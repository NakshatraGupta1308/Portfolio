import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory dispatches store
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  inquiryType: string;
  message: string;
  timestamp: string;
  status: 'received' | 'reviewed';
}

const contactMessages: ContactMessage[] = [
  {
    id: "DSP-2026-INIT",
    name: "Iowa State Engineering Career Services",
    email: "ecs@iastate.edu",
    subject: "Fall 2026 Engineering Career Fair & On-Campus Interviews",
    inquiryType: "Internship",
    message: "Candidate credentials verified for CprE Fall 2026 / Summer 2027 recruitment cycles.",
    timestamp: new Date().toISOString(),
    status: "reviewed"
  }
];

// Structured Resume Data
const RESUME_DATA = {
  candidate: {
    name: "Nakshatra Gupta",
    role: "Computer Engineering Undergraduate (B.S. CprE '27)",
    institution: "Iowa State University",
    location: "Ames, Iowa, United States",
    email: "ng1308@iastate.edu",
    phone: "+1 515-916-2251",
    targetTerm: "Fall 2026 & Beyond (Internship / Co-op / Full-Time)",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolioUrl: "https://wondrous-druid-2535ff.netlify.app/"
  },
  education: [
    {
      institution: "Iowa State University",
      location: "Ames, Iowa, United States",
      degree: "Bachelor of Science in Computer Engineering",
      period: "Expected Graduation: May 2027",
      status: "In Progress",
      relevantCoursework: [
        "Embedded Systems (CPR E 288)",
        "Computer Architecture",
        "Software Development Practice (COMS 3090)"
      ]
    },
    {
      institution: "Nirma University",
      location: "Ahmedabad, Gujarat, India",
      degree: "Bachelor of Science in Computer Science & Engineering",
      period: "July 2023 - May 2025 (Transferred)",
      status: "Transferred to ISU",
      relevantCoursework: [
        "Operating Systems",
        "Data Structures & Algorithms",
        "Software Development Principles"
      ]
    }
  ],
  experience: [
    {
      organization: "Iowa State University",
      department: "International Students and Scholars Office (ISSO)",
      role: "ISSO Office Assistant",
      type: "Part-time · On-site",
      location: "Ames, Iowa, United States",
      period: "Aug 2026 - Present",
      responsibilities: [
        "Processing I-9 Employment Eligibility Verification for international student employees.",
        "Scanning and verifying travel & university documents with high accuracy.",
        "Providing customer service in SUNAPSIS to students from diverse international backgrounds.",
        "Resolving documentation issues and ensuring strict confidentiality."
      ],
      skills: ["SUNAPSIS", "I-9 Verification", "Customer Service", "Data Entry", "Confidentiality"]
    },
    {
      organization: "Iowa State University Dining Services",
      department: "Culinary Operations",
      role: "Dining Student Worker",
      type: "Part-time · On-site",
      location: "Ames, Iowa, United States",
      period: "Aug 2025 - Present",
      responsibilities: [
        "Operating in a high-throughput, deadline-driven university culinary facility.",
        "Executing inventory management, sanitation compliance, and continuous customer service.",
        "Demonstrating punctuality, adaptive task switching, and proactive teamwork."
      ],
      skills: ["High-Pressure Execution", "Time Management", "Team Collaboration", "Sanitation Protocols"]
    }
  ],
  projects: [
    {
      id: "calmify",
      title: "Calmify: Native Android Mental Health Platform",
      index: "01",
      category: "Mobile & Full-Stack",
      course: "COMS 3090 @ Iowa State University",
      period: "Jan 2026 - May 2026",
      teamSize: "4-person engineering team",
      videoUrl: "https://www.youtube.com/watch?v=qTwxhTLsqMM",
      description: "Full-stack mental health platform connecting users with licensed counsellors via native Android with duplex WebSockets, appointment booking, AI assistant, and role-based permissions across 30+ activities.",
      technologies: ["Android SDK", "Java", "Spring Boot", "MySQL", "WebSockets", "Volley", "Glide", "GitLab CI/CD"]
    },
    {
      id: "cybot",
      title: "CyBot Autonomous Navigation & Sensing Platform",
      index: "02",
      category: "Academic / Hardware",
      course: "CPR E 288 @ Iowa State University",
      description: "Autonomous micro-rover programmed in bare-metal C for obstacle scanning, sensor fusion (IR + ultrasonic), PWM servo angle calibration, and duplex UART navigation commands.",
      technologies: ["Texas Instruments Tiva TM4C123", "Embedded C", "ADC0 Seq3 IR Sensor", "Ping Ultrasonic", "PWM Servo", "UART"]
    },
    {
      id: "rangam",
      title: "Rangam Graphics: Commercial Printing & Studio Website",
      index: "03",
      category: "Client Work / Production",
      liveUrl: "https://wondrous-druid-2535ff.netlify.app/",
      description: "Responsive commercial web architecture deployed for a 33+ year commercial printing company, integrating direct WhatsApp inquiry pipelines and digital product showcases.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Netlify Edge", "WhatsApp API", "Responsive UX"]
    },
    {
      id: "nasa-spaceapps",
      title: "NASA SpaceApps: 3D Celestial Orbit Visualization Engine",
      index: "04",
      category: "WebGL Visualization / Hackathon",
      recognition: "SpaceApps Winner",
      description: "Interactive browser-based 3D Keplerian celestial orbit simulator calculating semi-major axis, eccentricity, and inclination at 60 FPS using Three.js and WebGL shaders.",
      technologies: ["Three.js", "WebGL", "JavaScript ES6+", "NASA JPL Horizons Ephemeris", "GLSL Shaders"]
    }
  ],
  skills: {
    programming: ["C (Bare-Metal)", "Java", "Python", "HTML / CSS / JavaScript", "ARM Assembly"],
    hardware: [
      "TI Tiva TM4C123GXL",
      "UART / SPI / I2C",
      "GPIO Configuration",
      "PWM Timers",
      "Oscilloscopes",
      "Logic Analyzers",
      "ADC Sampling"
    ],
    frameworksAndTools: [
      "Android SDK",
      "Spring Boot",
      "WebSockets",
      "Three.js / WebGL",
      "MySQL",
      "Git / GitLab CI/CD",
      "Linux OS",
      "Netlify"
    ],
    concepts: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Hardware Interrupts (ISRs)",
      "Sensor Fusion & Filtering",
      "Microcontroller Memory Mapping",
      "Asynchronous Event Loops"
    ]
  }
};

// API ROUTES //

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    system: "Nakshatra Gupta Engineering Systems Node",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// 2. Telemetry and live status
app.get("/api/telemetry", (req, res) => {
  const now = new Date();
  
  // Format local Central Time for Ames, Iowa
  const amesTime = now.toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  res.json({
    location: {
      station: "Ames, IA, USA",
      coordinates: "42.0267 N, 93.6465 W",
      institution: "Iowa State University",
      localTimeCT: `${amesTime} CT`
    },
    academicStatus: {
      program: "B.S. Computer Engineering (CprE)",
      expectedGraduation: "May 2027",
      targetCycle: "Fall 2026 & Beyond",
      readiness: "Open for Internships, Co-ops & Full-Time"
    },
    serverMetrics: {
      uptimeSeconds: Math.floor(process.uptime()),
      loadStatus: "NOMINAL",
      directChannel: "ACTIVE_MONITORED",
      totalDispatchesReceived: contactMessages.length
    }
  });
});

// 3. Projects catalog
app.get("/api/projects", (req, res) => {
  res.json({
    projects: RESUME_DATA.projects,
    count: RESUME_DATA.projects.length
  });
});

// 4. Detailed project by id
app.get("/api/projects/:id", (req, res) => {
  const project = RESUME_DATA.projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: "Project not found in systems dossier" });
  }
  res.json({ project });
});

// 5. Machine-readable JSON Resume Data for ATS / automated systems
app.get("/api/resume/data", (req, res) => {
  res.json(RESUME_DATA);
});

// 6. Direct Resume Download metadata / redirect
app.get("/api/resume/download", (req, res) => {
  const resumeDownloadUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLiUwFJTVFKWHwuGzLTLawJQd5pdTLRwm84AOneFyN_lNYKsV5DK5ck5m6Bd1DmbAjX7_nldXOS3atEB8ZN-_Lp3n9zZEOaodGN3X4fZzNdvLEm7tGh2LuaGLRS6dHdCRQkaJxIsVlou6QbOTV71Tczz6Qb-DzEPRO6tmG3ZPGswWeGXAnxLOEcefFiPOoGcyHQiCsgN-U3JZyVUamIj7nXC3dH88AGzxO3C9orpyrHVKIuJq4UvTDw3A8pPmUl736h4";
  res.redirect(resumeDownloadUrl);
});

// 7. Direct Dispatch Contact Submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, inquiryType, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({
      error: "Missing required fields: email and message are mandatory."
    });
  }

  const receiptId = `DSP-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const newDispatch: ContactMessage = {
    id: receiptId,
    name: name?.trim() || "Anonymous Engineering Recruiter",
    email: email.trim(),
    phone: phone?.trim(),
    subject: subject?.trim() || "Fall 2026 Engineering Opportunity",
    inquiryType: inquiryType || "Internship / Co-op",
    message: message.trim(),
    timestamp: new Date().toISOString(),
    status: "received"
  };

  contactMessages.unshift(newDispatch);

  console.log(`[CONTACT DISPATCH] Received inquiry #${receiptId} from ${newDispatch.email} (${newDispatch.subject})`);

  res.status(201).json({
    success: true,
    receiptId: newDispatch.id,
    timestamp: newDispatch.timestamp,
    message: "Direct inquiry logged successfully. Nakshatra Gupta will review and reply to your coordinates."
  });
});

// 8. List received dispatches (for demo / administration)
app.get("/api/contact/messages", (req, res) => {
  res.json({
    count: contactMessages.length,
    messages: contactMessages
  });
});

// 9. Intelligent AI Assistant endpoint for Nakshatra's Portfolio
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return geminiClient;
}

app.post("/api/assistant/chat", async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'question' parameter in request body." });
  }

  const prompt = `You are the technical AI Assistant representing Nakshatra Gupta's professional portfolio.
Here is the factual dossier on Nakshatra Gupta:
- Status: Bachelor of Science in Computer Engineering (B.S. CprE) at Iowa State University (Expected graduation: May 2027).
- Prior Education: Nirma University (Ahmedabad, India) B.S. in Computer Science & Engineering (Transferred July 2023 - May 2025).
- Availability: Actively interviewing for Fall 2026 and beyond (internships, co-ops, and full-time opportunities upon graduation).
- Location: Ames, Iowa.
- Contact: ng1308@iastate.edu | +1 515-916-2251.
- Current Roles: ISSO Office Assistant at Iowa State University (processing I-9 verifications, SUNAPSIS) and Dining Student Worker.
- Key Projects:
  1. Calmify: Native Android mental health platform built in a 4-person team for COMS 3090 at Iowa State University (Java, Spring Boot, MySQL, WebSockets with typing indicators & read receipts, 30+ activities, video demo on YouTube).
  2. CyBot Autonomous Navigation & Sensing Platform: TI TM4C123 ARM Cortex-M4 microcontroller, bare-metal C, IR + ultrasonic sensor fusion, PWM servo sweep, duplex UART control.
  3. Rangam Graphics: Commercial production website for a 33+ year commercial printing and packaging company (HTML/CSS/JS, live on Netlify).
  4. NASA SpaceApps 3D Celestial Orbit Visualization Engine: Three.js and WebGL compute engine simulating planetary trajectories and Keplerian math at 60 FPS.
- Technical Skills: C (Bare-Metal), Java, Python, HTML/CSS/JS, ARM Assembly, TI TM4C123, UART, SPI, I2C, PWM, Oscilloscopes, Android SDK, Spring Boot, MySQL, WebSockets, GitLab CI/CD.

Task: Answer the visitor's question in a professional, technically precise, and concise manner (2-4 sentences or structured bullet points). Emphasize Nakshatra's strengths in low-level systems, reliable software, and openness to Fall 2026 engineering positions.

Visitor Question: "${question}"`;

  try {
    const ai = getGeminiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      return res.json({
        reply: response.text || "Nakshatra Gupta is a Computer Engineering student at Iowa State University specializing in embedded firmware and high-performance software, open for Fall 2026 roles."
      });
    } else {
      // Rule-based fallback if GEMINI_API_KEY is not configured yet
      const q = question.toLowerCase();
      let fallbackReply = "Nakshatra Gupta is a Computer Engineering undergraduate at Iowa State University (Expected May 2027), actively seeking Fall 2026 internships, co-ops, and engineering opportunities in embedded systems, robotics, and software architecture.";

      if (q.includes("project") || q.includes("calmify") || q.includes("cybot")) {
        fallbackReply = "Nakshatra's flagship projects include Calmify (a native Android mental wellness platform with Spring Boot and WebSockets), CyBot (an autonomous rover on TI Tiva TM4C123 bare-metal C), Rangam Graphics (a commercial production web platform), and NASA SpaceApps (3D WebGL Keplerian orbit simulation).";
      } else if (q.includes("skill") || q.includes("language") || q.includes("c ") || q.includes("rust") || q.includes("python")) {
        fallbackReply = "Nakshatra's technical stack spans Bare-Metal C, Java, Python, ARM Assembly, HTML/CSS/JS, Texas Instruments TM4C123, UART/SPI/I2C protocols, PWM timers, Android SDK, Spring Boot, WebSockets, and Three.js/WebGL.";
      } else if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
        fallbackReply = "You can reach Nakshatra directly via academic email at ng1308@iastate.edu, phone at +1 515-916-2251, or by submitting a dispatch in the Contact section of this portfolio.";
      }

      return res.json({ reply: fallbackReply });
    }
  } catch (error: any) {
    console.error("[GEMINI ASSISTANT ERROR]", error);
    return res.json({
      reply: "Nakshatra Gupta is a Computer Engineering undergraduate at Iowa State University (Class of '27) with deep experience in embedded systems, Android SDK, and WebGL, available for Fall 2026 roles. Please reach out to ng1308@iastate.edu."
    });
  }
});

// FRONTEND INTEGRATION (Vite Middleware in Dev / Static Serving in Prod) //
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[BACKEND SERVER] Nakshatra Gupta Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
