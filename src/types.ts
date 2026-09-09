export type ScreenId = 
  | 'overview' 
  | 'operations' 
  | 'case-studies' 
  | 'dispatches' 
  | 'arsenal' 
  | 'transmission';

export type ProjectCategory = 
  | 'all'
  | 'systems-arch'
  | 'cybernetics'
  | 'hardware'
  | 'defense-infra';

export interface ProjectMetric {
  label: string;
  value: string;
  delta?: string;
  subtext?: string;
}

export interface TelemetryPoint {
  metric: string;
  val: string;
  status: 'nominal' | 'peak' | 'critical';
}

export interface BenchmarkComparison {
  metricName: string;
  unit: string;
  legacy: number;
  engineered: number;
  improvementPercentage: number;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  status: 'OPERATIONAL' | 'FIELD DEPLOYED' | 'VERIFIED' | 'RESEARCH PREVIEW';
  category: ProjectCategory;
  tags: string[];
  image: string;
  abstract: string;
  challenge: string;
  solution: string;
  impactMetrics: ProjectMetric[];
  telemetry: TelemetryPoint[];
  benchmarks: BenchmarkComparison[];
  architectureNodes: { step: string; title: string; description: string; latency: string }[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  specs: { label: string; value: string }[];
}

export interface Dispatch {
  id: string;
  index: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  doi: string;
  abstract: string;
  keyTheorems: string[];
  paragraphs: { heading: string; body: string; codeOrFormula?: string }[];
  bibtex: string;
  tags: string[];
}

export interface SystemMetric {
  consensusLatency: string;
  uptime: string;
  activeNodes: number;
  memoryBandwidth: string;
  clockDrift: string;
  formalProofPassRate: string;
}

export interface ArsenalSkill {
  name: string;
  category: 'Low-Level Systems' | 'Distributed Protocols' | 'Hardware & AI Silicon' | 'Formal Methods & Security';
  proficiency: number;
  experience: string;
  productionNodes: string;
  highlights: string[];
}
