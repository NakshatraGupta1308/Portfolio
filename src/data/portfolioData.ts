import { Project, Dispatch, ArsenalSkill, SystemMetric } from '../types';

export const SYSTEM_METRICS: SystemMetric = {
  consensusLatency: '0.84ms',
  uptime: '99.998%',
  activeNodes: 14208,
  memoryBandwidth: '3.2 TB/s',
  clockDrift: '< 12ns P99',
  formalProofPassRate: '100.00%',
};

export const PROJECTS: Project[] = [
  {
    id: 'neuron-k',
    index: '01',
    title: 'NEURON-K',
    subtitle: 'Sub-millisecond Neural Inference Kernel for Heterogeneous Silicon',
    client: 'Autonomous Silicon Labs',
    year: '2025 // 2026',
    status: 'OPERATIONAL',
    category: 'hardware',
    tags: ['Rust', 'RISC-V Vector', 'Triton', 'Bare-Metal', 'eBPF'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Engineered a bare-metal execution kernel for quantized transformer workloads on specialized RISC-V edge co-processors. Eliminates operating system context-switching overhead through direct hardware register mapping and custom vectorized matrix-multiply pipelines.',
    challenge: 'Conventional embedded inference architectures incur severe OS interrupt latency, page table walks, and cache thrashing when scheduling dynamic transformer layers on heterogeneous edge accelerators.',
    solution: 'Constructed a zero-copy lockless ring scheduler in Rust that maps tensor weights directly into dedicated SRAM blocks, utilizing custom RISC-V vectorized assembly routines with sub-microsecond cycle deterministic execution.',
    impactMetrics: [
      { label: 'P99 Latency', value: '820 μs', delta: '-82.9%', subtext: 'Down from 4.80ms baseline' },
      { label: 'Throughput', value: '3,840 tok/s', delta: '+340%', subtext: 'INT4 Batch size 1' },
      { label: 'Thermal Envelope', value: '4.2W', delta: '-60%', subtext: 'Fanless passive chassis' },
      { label: 'Zero Context Switches', value: '0 OS Trap', delta: 'Deterministic', subtext: 'Bare-metal ring-0' }
    ],
    telemetry: [
      { metric: 'DSP L1 CACHE HIT', val: '99.4%', status: 'nominal' },
      { metric: 'SRAM UTILIZATION', val: '88.2%', status: 'nominal' },
      { metric: 'INSTRUCTION DIVERG', val: '0.00%', status: 'nominal' },
      { metric: 'JITTER VARIANCE', val: '± 4ns', status: 'peak' }
    ],
    benchmarks: [
      { metricName: 'Inference Latency (P99)', unit: 'μs', legacy: 4800, engineered: 820, improvementPercentage: 82.9 },
      { metricName: 'Energy per Token', unit: 'mJ', legacy: 18.4, engineered: 3.8, improvementPercentage: 79.3 },
      { metricName: 'Cold Boot Setup Time', unit: 'ms', legacy: 140, engineered: 12, improvementPercentage: 91.4 }
    ],
    architectureNodes: [
      { step: 'STAGE 01', title: 'Zero-Copy DMA Ingestion', description: 'Sensor PCIe direct stream mapped to pin-locked SRAM buffer', latency: '40 ns' },
      { step: 'STAGE 02', title: 'Tile Dispatch Matrix', description: 'Decodes quantized INT4 weights into RISC-V vector lanes', latency: '180 ns' },
      { step: 'STAGE 03', title: 'Vectorized GEMM Core', description: 'Pipelined fused multiply-accumulate without register spills', latency: '540 ns' },
      { step: 'STAGE 04', title: 'Deterministic Output Latch', description: 'Actuator control frame emitted directly to CAN/EtherCAT bus', latency: '60 ns' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'neuron_kernel_core.rs',
      code: `// NEURON-K: Low-overhead bare-metal tensor dispatch
#[no_mangle]
#[inline(always)]
pub unsafe extern "C" fn dispatch_layer_fused_v4(
    weights: *const u32,
    inputs: *const u32,
    outputs: *mut u32,
    dim_k: usize,
) {
    core::arch::asm!(
        "vsetvli t0, {len}, e8, m8, ta, ma",
        "vle8.v  v8, ({w})",
        "vle8.v  v16, ({inp})",
        "vwmaccu.vv v24, v8, v16",
        "vse32.v v24, ({out})",
        len = in(reg) dim_k,
        w = in(reg) weights,
        inp = in(reg) inputs,
        out = in(reg) outputs,
        options(nostack, preserves_flags)
    );
}`
    },
    specs: [
      { label: 'Target ISA', value: 'RV64GCV (RISC-V Vector 1.0)' },
      { label: 'Clock Frequency', value: '1.2 GHz Synchronous' },
      { label: 'Compilation Target', value: 'llvm-target riscv64-unknown-none-elf' },
      { label: 'Verification Method', value: 'Formal symbolic execution via Kani' }
    ]
  },
  {
    id: 'aethel-net',
    index: '02',
    title: 'AETHEL-NET',
    subtitle: 'Byzantine Fault Tolerant Mesh Protocol for Orbital Constellations',
    client: 'Aethel Aerospace Labs',
    year: '2025',
    status: 'FIELD DEPLOYED',
    category: 'systems-arch',
    tags: ['Rust', 'QUIC', 'TLA+', 'libp2p', 'Distributed Systems'],
    image: 'https://images.unsplash.com/photo-1517976487507-580377e2fbe6?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Asynchronous Byzantine Fault Tolerant (aBFT) consensus protocol engineered for non-terrestrial optical inter-satellite links (ISLs). Tolerates extreme Doppler frequency shifts, line-of-sight occultations, and adversarial electronic warfare jamming.',
    challenge: 'Low Earth Orbit (LEO) constellations experience frequent link disruptions (10-100ms interruptions) and dynamic routing topologies where synchronous consensus algorithms (Raft, Paxos) deadlock.',
    solution: 'Designed an asynchronous DAG-based consensus fabric with erasure-coded epoch checkpoints and verifiable random function (VRF) leader rotation, mathematically verified in TLA+ under 33% Byzantine node adversarial thresholds.',
    impactMetrics: [
      { label: 'Consensus Finality', value: '42 ms', delta: '-68%', subtext: 'Global constellation sync' },
      { label: 'Packet Drop Recovery', value: '100%', delta: '0 Lost Blocks', subtext: 'Across 12,000 passes' },
      { label: 'Byzantine Resistance', value: '33.3% f', delta: 'Proven Invariant', subtext: 'TLA+ Model Checked' },
      { label: 'Bandwidth Overhead', value: '2.4 KB/epoch', delta: '-74%', subtext: 'Compact BLS signatures' }
    ],
    telemetry: [
      { metric: 'OPTICAL LINK SNR', val: '31.4 dB', status: 'nominal' },
      { metric: 'DAG MEMORY FOOTPRINT', val: '42 MB', status: 'nominal' },
      { metric: 'CONSENSUS ROUND TIME', val: '38 ms', status: 'nominal' },
      { metric: 'CROSS-PLANE JITTER', val: '± 1.2ms', status: 'nominal' }
    ],
    benchmarks: [
      { metricName: 'Consensus Finality (Global LEO)', unit: 'ms', legacy: 132, engineered: 42, improvementPercentage: 68.2 },
      { metricName: 'Re-convergence After Occlusion', unit: 'ms', legacy: 890, engineered: 64, improvementPercentage: 92.8 },
      { metricName: 'Signatures Verification / Sec', unit: 'k-ops', legacy: 8.2, engineered: 64.5, improvementPercentage: 686.5 }
    ],
    architectureNodes: [
      { step: 'NODE 01', title: 'Laser ISL Ingestion Layer', description: 'Framing and FEC decoding over Free-Space Optics', latency: '4 ms' },
      { step: 'NODE 02', title: 'DAG Event Generation', description: 'Locally generated cryptographically signed transaction vertices', latency: '12 ms' },
      { step: 'NODE 03', title: 'Threshold BLS Aggregation', description: 'Coalesces 64 validator signatures into single 48-byte proof', latency: '16 ms' },
      { step: 'NODE 04', title: 'Total-Order Commit Anchor', description: 'Deterministic epoch commit without leader bottleneck', latency: '10 ms' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'aethel_dag_consensus.rs',
      code: `// Aethel-Net: Asynchronous topological epoch finalizer
pub fn verify_epoch_supermajority(
    dag: &Arc<RwLock<AethelDAG>>,
    round: EpochRound,
    quorum_threshold: usize,
) -> Result<CommitProof, ConsensusError> {
    let vertices = dag.read().get_round_vertices(round);
    let valid_votes = vertices.par_iter()
        .filter(|v| v.signature.verify_bls12_381(&v.digest))
        .count();

    if valid_votes >= quorum_threshold {
        Ok(CommitProof::generate(round, valid_votes))
    } else {
        Err(ConsensusError::QuorumPending(valid_votes, quorum_threshold))
    }
}`
    },
    specs: [
      { label: 'Consensus Type', value: 'Asynchronous DAG Directed Acyclic Graph' },
      { label: 'Signature Scheme', value: 'BLS12-381 Aggregate Multi-Signatures' },
      { label: 'Network Transport', value: 'Custom QUIC over UDP / Raw Optical Ethernet' },
      { label: 'Formal Proof Engine', value: 'TLA+ Model Checker TLC (10^9 states)' }
    ]
  },
  {
    id: 'hydra-hypervisor',
    index: '03',
    title: 'HYDRA-HYPERVISOR',
    subtitle: 'Zero-Trust Formally Verified Memory-Safe Type-1 Hypervisor',
    client: 'Defense Cybernetics Consortium',
    year: '2024 // 2025',
    status: 'VERIFIED',
    category: 'cybernetics',
    tags: ['Zig', 'x86_64 VT-x', 'Coq Proofs', 'eBPF', 'Zero-Trust'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Type-1 micro-hypervisor written in Zig and formally proven in Coq to guarantee non-interference and hardware capability compartmentalization. Defends against transient execution side-channels (Spectre/Meltdown/Downfall) at the microcode level.',
    challenge: 'Multi-tenant high-assurance cloud nodes are vulnerable to microarchitectural covert channels where CPU branch prediction and cache lines leak private encryption keys between guest enclaves.',
    solution: 'Engineered hardware-enforced spatial partitioning and automated cache line sanitization on every VM-exit. Verified memory safety invariants using Coq formal proofs and custom eBPF telemetry hooks.',
    impactMetrics: [
      { label: 'Proof Coverage', value: '100.0%', delta: 'Zero Gaps', subtext: 'Coq machine-checked' },
      { label: 'Virtualization Overhead', value: '1.4%', delta: '-4.8%', subtext: 'Industry avg 6.2%' },
      { label: 'VM-Exit Latency', value: '142 ns', delta: '-62%', subtext: 'Hardware optimized' },
      { label: 'CVE Vulnerabilities', value: '0 Found', delta: 'Audited', subtext: 'NCC Group Red Team' }
    ],
    telemetry: [
      { metric: 'EPT PAGE TABLE FAULTS', val: '0.00 /s', status: 'nominal' },
      { metric: 'BRANCH TARGET BUFFER CLR', val: '100% PASS', status: 'nominal' },
      { metric: 'GUEST ISOLATION DEPTH', val: 'RING -1 SEC', status: 'nominal' },
      { metric: 'INTERRUPT RESPONSE', val: '86 ns', status: 'peak' }
    ],
    benchmarks: [
      { metricName: 'VM-Exit & Context Restore', unit: 'ns', legacy: 380, engineered: 142, improvementPercentage: 62.6 },
      { metricName: 'TLB Flush Overhead', unit: 'cycles', legacy: 1200, engineered: 310, improvementPercentage: 74.1 },
      { metricName: 'IPC Micro-benchmark Drop', unit: '%', legacy: 5.8, engineered: 1.4, improvementPercentage: 75.8 }
    ],
    architectureNodes: [
      { step: 'LAYER 0', title: 'Silicon Root-of-Trust', description: 'Cryptographic measurement verified by AMD SEV-SNP / Intel TDX', latency: 'Boot-time' },
      { step: 'LAYER 1', title: 'Micro-Kernel Capability Vault', description: 'Zero unchecked pointers; capability tokens govern all page writes', latency: '4 ns' },
      { step: 'LAYER 2', title: 'EPT Memory Slicing', description: 'Dedicated physical cache ways allocated per guest domain', latency: '18 ns' },
      { step: 'LAYER 3', title: 'Predictive Threat Containment', description: 'Ring-0 eBPF filter kills rogue hypercalls in real-time', latency: '32 ns' }
    ],
    codeSnippet: {
      language: 'zig',
      filename: 'hydra_vmx_isolate.zig',
      code: `// HYDRA: Hardware VT-x context sanitation
pub fn sanitize_guest_exit_state() callconv(.Naked) void {
    asm volatile (
        \\\\ wbinvd
        \\\\ mfence
        \\\\ lfence
        \\\\ mov $0x48, %ecx
        \\\\ xor %eax, %eax
        \\\\ xor %edx, %edx
        \\\\ wrmsr
        \\\\ ret
    );
}`
    },
    specs: [
      { label: 'Virtualization Platform', value: 'Intel VT-x (VMX) & AMD-V (SVM)' },
      { label: 'Formal Proof Suite', value: 'Coq 8.18 with Bedrock2 Framework' },
      { label: 'Code Base Size', value: '4,850 lines of audited Zig' },
      { label: 'Security Clearance', value: 'ITAR & Common Criteria EAL7 Ready' }
    ]
  },
  {
    id: 'chronos-core',
    index: '04',
    title: 'CHRONOS-CORE',
    subtitle: 'Sub-100ns Lock-Free Deterministic Order Matching Engine',
    client: 'HyperScale Capital Infrastructure',
    year: '2024',
    status: 'OPERATIONAL',
    category: 'systems-arch',
    tags: ['C++20', 'DPDK', 'OpenCL FPGA', 'Lock-Free', 'Linux isolcpus'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Financial market matching engine executing continuous double auctions at sub-100 nanosecond tick latency. Implemented with cache-line-aligned single-producer-single-consumer queues and kernel-bypass networking.',
    challenge: 'Microsecond packet processing jitter caused by Linux networking stack interrupts and CPU thread synchronization leads to adverse execution slippage in algorithmic market makers.',
    solution: 'Engineered an end-to-end kernel bypass pipeline via DPDK and custom FPGA NIC logic, executing orders entirely within CPU L2 cache without heap allocations or mutex primitives.',
    impactMetrics: [
      { label: 'Mean Tick Latency', value: '86 ns', delta: '-88%', subtext: 'Wire-to-wire processing' },
      { label: 'Throughput', value: '120M msg/s', delta: 'Single Socket', subtext: 'Zero message loss' },
      { label: 'P99.99 Latency Tail', value: '140 ns', delta: 'Ultra Flat', subtext: 'No GC or OS jitter' },
      { label: 'Allocations in Hot-Path', value: '0 bytes', delta: 'Static Pre-alloc', subtext: 'Direct ring-buffer' }
    ],
    telemetry: [
      { metric: 'NIC RX QUEUE DROP', val: '0.00%', status: 'nominal' },
      { metric: 'CPU CORE PINNING', val: 'CORES 8-15 100%', status: 'nominal' },
      { metric: 'L3 CACHE HIT RATIO', val: '98.9%', status: 'nominal' },
      { metric: 'CLOCK SYNCHRONIZATION', val: 'PTP 8ns', status: 'nominal' }
    ],
    benchmarks: [
      { metricName: 'Mean Match Latency', unit: 'ns', legacy: 740, engineered: 86, improvementPercentage: 88.3 },
      { metricName: 'P99.9 Latency Tail', unit: 'ns', legacy: 2100, engineered: 140, improvementPercentage: 93.3 },
      { metricName: 'Packet Processing Overhead', unit: 'cycles', legacy: 920, engineered: 110, improvementPercentage: 88.0 }
    ],
    architectureNodes: [
      { step: 'STAGE 1', title: 'DPDK Kernel Bypass', description: 'PCIe memory directly mapped to L2-pinned worker thread', latency: '18 ns' },
      { step: 'STAGE 2', title: 'Lockless Ring Book', description: 'Price ladder updated via atomic bitwise bitmask operations', latency: '34 ns' },
      { step: 'STAGE 3', title: 'Deterministic Match Arbiter', description: 'Price-time priority execution without heap reallocation', latency: '22 ns' },
      { step: 'STAGE 4', title: 'Wire Transmission Multicast', description: 'Immediate hardware timestamp latching onto optical transceivers', latency: '12 ns' }
    ],
    codeSnippet: {
      language: 'cpp',
      filename: 'chronos_orderbook.hpp',
      code: `// CHRONOS: Cache-line aligned lock-free matching engine
template <size_t Capacity>
class alignas(64) SPSCQueue {
    alignas(64) std::atomic<uint64_t> head_{0};
    alignas(64) std::atomic<uint64_t> tail_{0};
    alignas(64) OrderEvent ring_[Capacity];

public:
    inline bool push(const OrderEvent& event) noexcept {
        const uint64_t current_tail = tail_.load(std::memory_order_relaxed);
        if (current_tail - head_.load(std::memory_order_acquire) >= Capacity) [[unlikely]]
            return false;
        ring_[current_tail & (Capacity - 1)] = event;
        tail_.store(current_tail + 1, std::memory_order_release);
        return true;
    }
};`
    },
    specs: [
      { label: 'Language Standard', value: 'ISO C++20 with Concepts & Coroutines' },
      { label: 'Hardware Platform', value: 'AMD EPYC 9654 + Solarflare XtremeScale NIC' },
      { label: 'Networking Engine', value: 'Intel DPDK 24.11 / Solarflare Onload' },
      { label: 'Memory Allocation', value: '100% Static Pre-allocation on NUMA nodes' }
    ]
  },
  {
    id: 'synapse-trace',
    index: '05',
    title: 'SYNAPSE-TRACE',
    subtitle: 'Kernel-Grounded Autonomous Threat Neutralization Engine',
    client: 'Global Cyber Defense Grid',
    year: '2024 // 2025',
    status: 'OPERATIONAL',
    category: 'defense-infra',
    tags: ['eBPF', 'Rust', 'Linux Kernel', 'LibTorch', 'Cybersecurity'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Autonomous in-kernel intrusion neutralization daemon that utilizes eBPF verifier-compliant telemetry programs to intercept and neutralize kernel exploits and memory hijacking in under 4 milliseconds.',
    challenge: 'Modern privilege-escalation exploits execute in memory without touching disk, rendering conventional user-space endpoint detection and response (EDR) agents blind and slow.',
    solution: 'Embedded an array of non-intrusive eBPF tracepoints hooked into sys_enter, fork, and mprotect routines, paired with a lightweight quantized Bayesian neural graph classifier running directly in ring-0 safe memory.',
    impactMetrics: [
      { label: 'Zero-Day Interception', value: '99.98%', delta: '4,200 Trials', subtext: 'Against state-actor toolkits' },
      { label: 'Mean Isolation Time', value: '3.2 ms', delta: '-94%', subtext: 'Automated namespace freeze' },
      { label: 'CPU Overhead', value: '< 0.8%', delta: 'Negligible', subtext: 'In-kernel verifier safe' },
      { label: 'False Positive Rate', value: '0.0001%', delta: '1 in 1M calls', subtext: 'Calibrated baseline' }
    ],
    telemetry: [
      { metric: 'EBPF PROGRAM RUNTIME', val: '120 ns / syscall', status: 'nominal' },
      { metric: 'MEMORY BUFFER RETENTION', val: '64 MB Ring', status: 'nominal' },
      { metric: 'ACTIVE KERNEL HOOKS', val: '128 Tracepoints', status: 'nominal' },
      { metric: 'THREAT CONTAINMENT LEVEL', val: 'AUTONOMOUS SIG', status: 'peak' }
    ],
    benchmarks: [
      { metricName: 'Exploit Detection to Kill', unit: 'ms', legacy: 48.0, engineered: 3.2, improvementPercentage: 93.3 },
      { metricName: 'Syscall Interception Overhead', unit: 'ns', legacy: 850, engineered: 120, improvementPercentage: 85.8 },
      { metricName: 'Memory Footprint', unit: 'MB', legacy: 420, engineered: 64, improvementPercentage: 84.7 }
    ],
    architectureNodes: [
      { step: 'STAGE 1', title: 'eBPF Ring-0 Tracepoint Hook', description: 'Monitors raw syscall entries with zero runtime user-space transitions', latency: '40 ns' },
      { step: 'STAGE 2', title: 'Control-Flow Graph Hash', description: 'Hashes return instruction addresses against statically verified binaries', latency: '180 ns' },
      { step: 'STAGE 3', title: 'Bayesian Anomaly Classifier', description: 'Evaluates structural deviations from legitimate execution trees', latency: '2.4 ms' },
      { step: 'STAGE 4', title: 'SIGKILL & Cgroup Jail', description: 'Instantly revokes file descriptors and kills thread hierarchy', latency: '600 μs' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'synapse_ebpf_hook.rs',
      code: `// SYNAPSE: Kernel tracepoint hook for credential extraction attempts
#[tracepoint(name = "sys_enter_ptrace")]
pub fn handle_ptrace_attempt(ctx: TracePointContext) -> u32 {
    let pid = bpf_get_current_pid_tgid() >> 32;
    let target_pid = ctx.read_arg(1).unwrap_or(0);
    
    if is_protected_process(target_pid) {
        // Issue instantaneous hardware signal to terminate offending thread
        bpf_send_signal(9); // SIGKILL
        bpf_printk!("UNAUTHORIZED PTRACE INTERCEPTED PID=%d TARGET=%d", pid, target_pid);
    }
    0
}`
    },
    specs: [
      { label: 'Kernel Compatibility', value: 'Linux 5.15 LTS through 6.12+ (eBPF CO-RE)' },
      { label: 'Verifier Validation', value: 'Strict Linux eBPF verifier compliant (0 loops)' },
      { label: 'Target Platforms', value: 'x86_64, aarch64 (AWS Graviton, Ampere)' },
      { label: 'Isolation Method', value: 'cgroup v2 hard freeze + SIGKILL dispatch' }
    ]
  },
  {
    id: 'vault-zero',
    index: '06',
    title: 'VAULT-ZERO',
    subtitle: 'Post-Quantum Ephemeral Key Exchange Enclave',
    client: 'Cryptographic Resilience Initiative',
    year: '2023 // 2024',
    status: 'VERIFIED',
    category: 'cybernetics',
    tags: ['Rust', 'ML-KEM / Kyber', 'Verilog', 'HSM Enclaves', 'Cryptanalysis'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Hardware-anchored post-quantum key encapsulation mechanism implementing NIST FIPS 203 (ML-KEM/Kyber-1024) with rigorous side-channel resistance against differential power analysis (DPA) and timing attacks.',
    challenge: 'Emerging quantum computing architectures threaten existing RSA-4096 and ECDSA-384 public key infrastructures; migration to lattice cryptography requires heavy polynomial operations prone to micro-timing leakage.',
    solution: 'Implemented constant-time polynomial multiplication algorithms in hand-tuned RISC-V assembly and custom Verilog coprocessor IP, passing rigorous leakage tests with 100M power traces.',
    impactMetrics: [
      { label: 'NIST Standards', value: 'FIPS 203', delta: 'Compliant', subtext: 'ML-KEM-1024 Grade' },
      { label: 'Encapsulation Latency', value: '28.4 μs', delta: '-64%', subtext: 'Constant-time guaranteed' },
      { label: 'Side-Channel Leakage', value: 't-test < 4.5', delta: 'Zero TVLA', subtext: '100M physical traces' },
      { label: 'Hardware Gate Count', value: '18.2k LUTs', delta: 'Compact', subtext: 'FPGA and ASIC ready' }
    ],
    telemetry: [
      { metric: 'POWER TRACE VARIANCE', val: '< 0.02 mV', status: 'nominal' },
      { metric: 'POLYNOMIAL NTT RUNTIME', val: '14.2 μs', status: 'nominal' },
      { metric: 'ENTROPY POOL QUALITY', val: 'SP 800-90B PASS', status: 'nominal' },
      { metric: 'TEMPERATURE COEFFICIENT', val: 'STABLE -40°C to +85°C', status: 'nominal' }
    ],
    benchmarks: [
      { metricName: 'Key Encapsulation (Kyber-1024)', unit: 'μs', legacy: 78.0, engineered: 28.4, improvementPercentage: 63.5 },
      { metricName: 'Polynomial Multiplication NTT', unit: 'cycles', legacy: 28400, engineered: 7900, improvementPercentage: 72.1 },
      { metricName: 'Decapsulation Time', unit: 'μs', legacy: 94.0, engineered: 32.1, improvementPercentage: 65.8 }
    ],
    architectureNodes: [
      { step: 'STAGE 1', title: 'True Random Number Generation', description: 'Quantum tunneling TRNG verified under NIST SP 800-90B', latency: '4 μs' },
      { step: 'STAGE 2', title: 'Number Theoretic Transform (NTT)', description: 'Fast polynomial matrix arithmetic in constant clock cycles', latency: '14 μs' },
      { step: 'STAGE 3', title: 'Error Polynomial Sampling', description: 'Constant-time centered binomial distribution sampler', latency: '6 μs' },
      { step: 'STAGE 4', title: 'Ciphertext Serialization', description: 'Formatted 1568-byte ciphertext emitted to secure hardware bus', latency: '4 μs' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'kyber_constant_time.rs',
      code: `// VAULT-ZERO: Constant-time Montgomery reduction in Galois Field
#[inline(always)]
pub fn montgomery_reduce(a: i64) -> i16 {
    const Q: i64 = 3329;
    const QINV: i64 = 62209; // -q^{-1} mod 2^16
    let t = ((a as i16) as i64 * QINV) as i16;
    let mut c = ((a - (t as i64) * Q) >> 16) as i16;
    // Guaranteed branchless conditional subtraction
    c -= Q as i16;
    c += ((c >> 15) & (Q as i16));
    c
}`
    },
    specs: [
      { label: 'Security Level', value: 'NIST Level 5 (Quantum Equivalent to AES-256)' },
      { label: 'Constant Time Guarantee', value: 'Formally verified via Dudect and Valgrind' },
      { label: 'Ciphertext Size', value: '1,568 bytes' },
      { label: 'Shared Secret Size', value: '32 bytes (256-bit symmetric key)' }
    ]
  }
];

export const DISPATCHES: Dispatch[] = [
  {
    id: 'log-084',
    index: '084',
    title: 'Formal Verification of Asynchronous Raft in Adversarial Topologies',
    date: '2026.04.12',
    category: 'DISTRIBUTED SYSTEMS',
    readTime: '11 MIN READ',
    doi: '10.1145/3849102.3849108',
    abstract: 'Standard consensus proofs assume bounded transmission latency between healthy nodes. This monograph introduces a machine-checked TLA+ verification framework for Raft log replication operating over adversarial non-terrestrial mesh networks subject to periodic Byzantine eclipse attacks.',
    keyTheorems: [
      'Theorem 1.1 (Log Monotonicity): Under arbitrary packet reordering and bounded eclipse intervals τ < 3Δ, uncommitted log entries cannot be overwritten across intersecting quorums.',
      'Theorem 2.4 (Byzantine Liveness): Leader election terminates in at most 2 rounds when less than (N-1)/3 nodes exhibit adversarial drop behavior.'
    ],
    paragraphs: [
      {
        heading: '01. The Fallacy of Bounded Synchrony in Orbital Links',
        body: 'Distributed systems literature frequently defaults to partial synchrony models (Dwork, Lynch, Stockmeyer 1988) with the assumption that after some unknown Global Stabilization Time (GST), network latency remains bounded by Δ. In orbital constellations utilizing optical inter-satellite links (ISLs), this assumption collapses: occultation events by planetary geometry and high-angle solar conjunctions introduce systematic, periodic disconnections where latency spikes by four orders of magnitude.'
      },
      {
        heading: '02. Formal Specification in TLA+ Specification Language',
        body: 'To rigorously verify safety properties under these conditions, we modeled the consensus state machine as a transition system where node timers are non-deterministic and the network environment acts as an adversarial scheduler that can delay, duplicate, or re-route messages without violating cryptographic integrity.',
        codeOrFormula: `---------------- MODULE AdversarialRaft ----------------
EXTENDS Naturals, Sequences, FiniteSets

CONSTANT Nodes, MaxElections, AdversarialBudget

VARIABLE currentTerm, state, log, commitIndex, networkDropRate

TypeOK ==
  /\\ currentTerm \\in [Nodes -> Nat]
  /\\ state \\in [Nodes -> {"Follower", "Candidate", "Leader"}]
  /\\ commitIndex \\in [Nodes -> Nat]

LogConsistencyInvariant ==
  \\A n1, n2 \\in Nodes :
    \\A idx \\in 1..Min(commitIndex[n1], commitIndex[n2]) :
      log[n1][idx] = log[n2][idx]
=========================================================`
      },
      {
        heading: '03. Model-Checking Results and State Space Exploration',
        body: 'Using the distributed TLC model checker across a 128-core cluster, we verified 4.8 × 10⁹ states without identifying a single log divergence violation. In contrast, standard Raft implementations without term-epoch anchoring exhibited split-brain states within 12,000 steps under equivalent adversarial network partition injections.'
      }
    ],
    bibtex: `@article{vex2026formalraft,
  author    = {Alexander Vex},
  title     = {Formal Verification of Asynchronous Raft in Adversarial Topologies},
  journal   = {Transactions on Distributed Systems and Cybernetics},
  volume    = {42},
  number    = {2},
  pages     = {104--119},
  year      = {2026},
  doi       = {10.1145/3849102.3849108}
}`,
    tags: ['TLA+', 'Raft', 'Formal Verification', 'Consensus', 'Orbital Networks']
  },
  {
    id: 'log-081',
    index: '081',
    title: 'Thermodynamic Constraints on Ultra-Dense Neural Silicon Enclosures',
    date: '2025.11.28',
    category: 'HARDWARE & SILICON',
    readTime: '14 MIN READ',
    doi: '10.1109/JSSC.2025.9928172',
    abstract: 'As transformer model architectures push compute density towards 100 TFLOPS/cm², thermal throttling becomes the definitive bottleneck for real-time inference latency. We analyze the intersection of micro-fluidic liquid metal cooling and dynamic frequency scaling (DVFS) under sub-millisecond workloads.',
    keyTheorems: [
      'Proposition 3.2 (Heat Flux Equilibrium): Maximum sustained heat flux Q_max cannot exceed 350 W/cm² without catastrophic dielectric breakdown in sub-2nm node interconnects.',
      'Law of Transient Thermal Shock: Step jumps in GPU/NPU utilization create localized hot-spots that propagate through the substrate faster than mechanical heat-pipe dissipation cycles.'
    ],
    paragraphs: [
      {
        heading: '01. The Thermal Wall of Sub-2nm Nodes',
        body: 'Contemporary chiplet designs pack trillions of transistors into millimeter-scale silicon dies. While power-gating techniques shut down idle compute units, the instantaneous power ramp when transitioning from speculative decoding to full multi-head attention causes a localized thermal surge of up to 45°C/millisecond.'
      },
      {
        heading: '02. Micro-Channel Fluidic Heat Extraction',
        body: 'We developed an etched micro-capillary cold plate architecture using Galinstan (eutectic gallium-indium-tin liquid metal) with an active closed-loop electromagnetic pump. By coupling the pump frequency directly to the eBPF hardware performance counter (measuring instruction retirement rates), the cooling system pre-emptively circulates coolant 200 microseconds before thermal sensors register temperature rise.'
      }
    ],
    bibtex: `@article{vex2025thermo,
  author    = {Alexander Vex},
  title     = {Thermodynamic Constraints on Ultra-Dense Neural Silicon Enclosures},
  journal   = {IEEE Journal of Solid-State Circuits},
  volume    = {60},
  number    = {11},
  pages     = {3120--3134},
  year      = {2025}
}`,
    tags: ['Thermodynamics', 'Silicon', 'Microfluidics', 'Edge AI', 'Packaging']
  },
  {
    id: 'log-077',
    index: '077',
    title: 'eBPF-Grounded Micro-Segmentation: Replacing Traditional Firewalls in Edge Fabrics',
    date: '2025.07.19',
    category: 'CYBERSECURITY',
    readTime: '9 MIN READ',
    doi: '10.1007/s10207-025-00781-4',
    abstract: 'Traditional iptables, nftables, and perimeter firewalls incur non-negligible CPU cache misses and linear packet evaluation degradation. By compiling declarative security policies directly into verified eBPF bytecode loaded at the XDP (eXpress Data Path) layer, edge fabrics achieve wire-rate packet filtering with zero kernel memory allocations.',
    keyTheorems: [
      'Benchmark Observation: eBPF XDP evaluates security rules in O(1) time using BPF hash maps, maintaining 100Gbps line rate compared to 12.4Gbps under legacy netfilter conntrack.',
      'Zero Memory Allocations Invariant: All policy evaluations occur within the driver RX ring buffer before sk_buff construction.'
    ],
    paragraphs: [
      {
        heading: '01. Netfilter Overhead at 100 Gbps',
        body: 'When processing 148 million packets per second on 100 Gigabit Ethernet, each packet has an arrival budget of just 6.72 nanoseconds. The Linux netfilter architecture spends over 45 nanoseconds allocating kernel socket buffers (sk_buff), calculating connection tracking states, and traversing nested rule tables.'
      },
      {
        heading: '02. Compiling Security Declarations to BPF Bytecode',
        body: 'Our approach compiles hierarchical zero-trust access control lists directly into LLVM BPF target assembly. Packet headers are parsed in under 8 instructions, checked against a cache-line-aligned LPM (Longest Prefix Match) trie, and either forwarded or dropped at the network interface card driver level.'
      }
    ],
    bibtex: `@article{vex2025ebpfseg,
  author    = {Alexander Vex},
  title     = {eBPF-Grounded Micro-Segmentation in Edge Fabrics},
  journal   = {International Journal of Information Security},
  volume    = {24},
  pages     = {89--101},
  year      = {2025}
}`,
    tags: ['eBPF', 'XDP', 'Zero-Trust', 'Networking', 'Linux Kernel']
  },
  {
    id: 'log-072',
    index: '072',
    title: 'Deterministic Clock Synchronization Without GPS Hardware Under Jamming',
    date: '2024.10.05',
    category: 'SYSTEMS ARCHITECTURE',
    readTime: '13 MIN READ',
    doi: '10.1109/TIM.2024.3412091',
    abstract: 'Electromagnetic warfare environments frequently deny GNSS/GPS reception. We present an oscillator-grounded deterministic clock synchronization algorithm utilizing peer-to-peer PTP hardware timestamps and Kalman filter drift estimation that preserves sub-15 nanosecond phase alignment over 72 hours of complete satellite blackout.',
    keyTheorems: [
      'Kalman Filter Stability Theorem: When peer drift estimators share variance matrices over symmetric bidirectional optical links, the cumulative phase divergence grows at O(sqrt(t)) rather than O(t).',
      'Drift Invariant: Rubidium atomic standard Allan deviation maintained at 10^-12 across extreme vibration profiles.'
    ],
    paragraphs: [
      {
        heading: '01. Vulnerabilities of GPS Disciplined Oscillators',
        body: 'Modern distributed ledgers and military radar clusters depend on GPS PPS (Pulse Per Second) signals for absolute time coordination. Low-power RF spoofing transmitters can introduce microsecond time dilation attacks that trigger artificial consensus timeouts without physical network penetration.'
      },
      {
        heading: '02. Peer-to-Peer Phase Dispersal Protocol',
        body: 'By continuously measuring the round-trip propagation time of laser pulses between neighboring nodes and feeding the timing differentials into an un-scented Kalman filter, each node establishes a virtual relativistic time consensus that ignores external jammed frequency bands.'
      }
    ],
    bibtex: `@article{vex2024clocksync,
  author    = {Alexander Vex},
  title     = {Deterministic Clock Synchronization Without GPS Under Jamming},
  journal   = {IEEE Transactions on Instrumentation and Measurement},
  volume    = {73},
  pages     = {1--14},
  year      = {2024}
}`,
    tags: ['Clock Sync', 'PTP IEEE 1588', 'EW Jamming', 'Kalman Filter', 'Atomic Clocks']
  }
];

export const ARSENAL_SKILLS: ArsenalSkill[] = [
  {
    name: 'Rust Systems & Concurrency',
    category: 'Low-Level Systems',
    proficiency: 98,
    experience: '8+ YEARS',
    productionNodes: '42,000+ Nodes Deployed',
    highlights: ['Bare-metal no_std firmware', 'Custom lock-free allocators', 'SIMD / AVX-512 vectorization', 'Async actor frameworks (Tokio/custom)']
  },
  {
    name: 'Linux Kernel & eBPF Engineering',
    category: 'Low-Level Systems',
    proficiency: 95,
    experience: '7+ YEARS',
    productionNodes: 'Ring-0 In-Kernel Hooks',
    highlights: ['XDP line-rate network drivers', 'kprobes/tracepoints instrumentation', 'Kernel memory subsystem hacking', 'Zero-overhead telemetry maps']
  },
  {
    name: 'Distributed Consensus & Mesh Topologies',
    category: 'Distributed Protocols',
    proficiency: 96,
    experience: '9+ YEARS',
    productionNodes: '12M Tx/sec Global Fabric',
    highlights: ['Asynchronous DAG consensus (aBFT)', 'Raft & Paxos high-throughput variants', 'QUIC custom state machines', 'Gossip protocols & anti-entropy']
  },
  {
    name: 'C++20 / Zig Bare-Metal Systems',
    category: 'Low-Level Systems',
    proficiency: 92,
    experience: '10+ YEARS',
    productionNodes: 'Sub-100ns Order Engines',
    highlights: ['Cache-conscious data structures', 'Kernel-bypass networking via DPDK', 'Type-1 micro-hypervisor primitives', 'Deterministic memory management']
  },
  {
    name: 'RISC-V & Custom Silicon Acceleration',
    category: 'Hardware & AI Silicon',
    proficiency: 90,
    experience: '6+ YEARS',
    productionNodes: '1.2M Custom ASICs',
    highlights: ['RISC-V Vector (RVV 1.0) intrinsics', 'Triton & CUDA kernel optimization', 'FPGA Verilog logic pipelines', 'Heterogeneous compute DMA engines']
  },
  {
    name: 'Formal Verification & Mathematical Proofs',
    category: 'Formal Methods & Security',
    proficiency: 89,
    experience: '5+ YEARS',
    productionNodes: '100% Verified Invariants',
    highlights: ['TLA+ model checking (TLC engine)', 'Coq interactive theorem proving', 'Kani Rust symbolic execution', 'Temporal logic invariant validation']
  },
  {
    name: 'Post-Quantum & Applied Cryptography',
    category: 'Formal Methods & Security',
    proficiency: 94,
    experience: '7+ YEARS',
    productionNodes: 'FIPS 203 Compliant',
    highlights: ['Kyber/Dilithium lattice schemes', 'Side-channel constant-time design', 'Threshold BLS12-381 signatures', 'Hardware Security Module (HSM) microcode']
  },
  {
    name: 'High-Throughput Telemetry & Observability',
    category: 'Distributed Protocols',
    proficiency: 94,
    experience: '8+ YEARS',
    productionNodes: 'Petabyte/Day Stream Ingest',
    highlights: ['eBPF-driven zero-overhead metrics', 'Sub-millisecond latency profiling', 'Dynamic flamegraph tracing (perf)', 'Distributed tracing over QUIC']
  }
];
