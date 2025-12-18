# PDPI Spec - Spec-Driven Development (SDD) Protocol
# PDPI 规格驱动开发协议

Welcome to the PDPI Spec repository. This project defines a rigorous, AI-assisted software development process known as **Spec-Driven Development (SDD)**. It enforces a strict pipeline of **Requirements -> Design -> Plan -> Implementation** to ensure high-quality, maintainable, and predictable software delivery.

欢迎来到 PDPI Spec 仓库。本项目定义了一套严谨的、AI 辅助的软件开发流程，称为 **规格驱动开发 (SDD)**。它强制执行 **需求 -> 设计 -> 计划 -> 实现** 的严格流水线，以确保高质量、可维护且可预测的软件交付。

---

## 📚 Core Philosophy / 核心理念

The core philosophy is **"Think before you code"**. We do not jump straight into implementation. Instead, we follow a structured lifecycle where each phase builds upon the previous one, ensuring alignment and reducing rework.

核心理念是 **“谋定而后动”**。我们要避免直接跳入代码实现阶段，而是遵循一个结构化的生命周期，每个阶段都建立在前一个阶段的基础上，以确保目标一致并减少返工。

### The PDPI Pipeline / PDPI 流水线

1.  **Phase 0: PREWORK (Context Gathering)**
    *   **Goal**: Understand the existing codebase and constraints.
    *   **Output**: Context Artifact (Project DNA, Dependency Trace).
    *   **Role**: Context Detective.
    
    **第 0 阶段：准备工作 (上下文收集)**
    *   **目标**: 理解现有的代码库和约束条件。
    *   **产出**: 上下文工件 (项目基因, 依赖追踪)。
    *   **角色**: 上下文侦探。

2.  **Phase 1: REQUIREMENTS (The "Why" & "What")**
    *   **Goal**: Define the problem, Jobs to be Done (JTBD), and Gherkin-style User Stories.
    *   **Output**: Requirements Document (`requirements.md`).
    *   **Role**: Technical Product Manager.
    
    **第 1 阶段：需求定义 ("为什么" 和 "是什么")**
    *   **目标**: 定义问题、待办任务 (JTBD) 和 Gherkin 风格的用户故事。
    *   **产出**: 需求文档 (`requirements.md`)。
    *   **角色**: 技术产品经理。

3.  **Phase 2: DESIGN (The "How")**
    *   **Goal**: Architect the solution, define interfaces, data models, and trade-offs.
    *   **Output**: Design Spec (`design.md`) with Mermaid diagrams.
    *   **Role**: Principal Software Architect.
    
    **第 2 阶段：系统设计 ("怎么做")**
    *   **目标**: 架构解决方案，定义接口、数据模型和权衡分析。
    *   **产出**: 设计规格说明书 (`design.md`)，包含 Mermaid 图表。
    *   **角色**: 首席软件架构师。

4.  **Phase 3: PLAN (The "Steps")**
    *   **Goal**: Break down the design into atomic, verifiable implementation steps.
    *   **Output**: Implementation Plan (`plan.md`).
    *   **Role**: Senior Engineering Manager.
    
    **第 3 阶段：实施计划 ("步骤")**
    *   **目标**: 将设计拆分为原子的、可验证的实施步骤。
    *   **产出**: 实施计划 (`plan.md`)。
    *   **角色**: 高级工程经理。

5.  **Phase 4: IMPLEMENTATION (The "Build")**
    *   **Goal**: Execute the plan step-by-step with strict verification (TDD).
    *   **Output**: Production-ready Code.
    *   **Role**: Junior Developer / Implementation Specialist.
    
    **第 4 阶段：代码实现 ("构建")**
    *   **目标**: 严格按照验证标准 (TDD) 一步步执行计划。
    *   **产出**: 生产级代码。
    *   **角色**: 初级开发人员 / 实现专员。

---

## 🚀 How to Use / 使用指南

### 📖 文档导航

- **[DOCUMENTATION-INDEX.md](DOCUMENTATION-INDEX.md)** 📚 完整文档索引（按角色/场景查找）

**快速开始**：
- **[GETTING-STARTED.md](GETTING-STARTED.md)** ⭐ **从这里开始** - 5分钟极速入门，第一次使用必读
- **[QUICK-START.md](QUICK-START.md)** - 完整操作指南，包含工作流程、常见场景和故障排查
- **[PROMPT-TEMPLATES.md](PROMPT-TEMPLATES.md)** - 提示词模板库，各阶段标准提示词参考

**系统配置**：
- **[AGENTS.md](AGENTS.md)** - AI核心配置文件（Cursor自动加载）
- **[.spec-rules/](.spec-rules/)** - 规则系统目录（详细协议和模板）

The protocols and templates for each phase are located in the `.spec-rules/` directory.
每个阶段的协议和模板都位于 `.spec-rules/` 目录下。

### Directory Structure / 目录结构

```
.
├── .spec-rules/           # The core protocol definitions / 核心协议定义
│   ├── PREWORK.md         # Context gathering rules / 上下文收集规则
│   ├── REQUIREMENTS.md    # Requirements generation rules / 需求生成规则
│   ├── DESIGN.md          # Architecture design rules / 架构设计规则
│   ├── PLAN.md            # Implementation planning rules / 实施计划规则
│   ├── IMPLEMENTATION.md  # Coding rules / 编码规则
│   ├── *-QA.md            # Quality Assurance checklists / 质量保证检查清单
│   └── templates/         # Document templates / 文档模板
└── specs/                 # Your project specifications live here / 你的项目规格说明书存放于此
    └── [module-name]/     # Specific feature or module / 具体的功能或模块
        ├── STATUS.json    # Phase tracking file / 阶段跟踪文件
        ├── PREWORK.md
        ├── requirements.md
        ├── design.md
        └── plan.md
```

### Starting a New Feature / 开始新功能

1.  **Initialize**: Create a folder in `specs/[module-name]/`.
2.  **Track**: Create a `STATUS.json` file (see templates).
3.  **Execute**: Follow the phases in order (Prework -> Req -> Design -> Plan -> Impl).
4.  **Verify**: Use the `*-QA.md` checklists before moving to the next phase.

1.  **初始化**: 在 `specs/[module-name]/` 中创建一个文件夹。
2.  **跟踪**: 创建一个 `STATUS.json` 文件 (参考模板)。
3.  **执行**: 按顺序执行各个阶段 (准备 -> 需求 -> 设计 -> 计划 -> 实现)。
4.  **验证**: 在进入下一阶段前，使用 `*-QA.md` 检查清单进行验证。

### Status Tracking (STATUS.json) / 状态跟踪 (STATUS.json)

The `STATUS.json` file is the **Source of Truth** for the project state. The Agent uses this file to maintain context across sessions.
`STATUS.json` 文件是项目状态的 **唯一真理来源**。智能体使用此文件在会话之间保持上下文。

*   **Managed by AI**: The Agent is responsible for creating and updating this file.
    **由 AI 管理**: 智能体负责创建和更新此文件。
*   **Protocol**: See `.spec-rules/README.md` (Section 0.1) for the detailed schema and lifecycle rules.
    **协议**: 详见 `.spec-rules/README.md` (第 0.1 节) 中的详细模式和生命周期规则。

---

## 🤖 Agent Role / 智能体角色

When working with an AI Agent (like Trae/Claude/GPT), the Agent acts as the **SDD Orchestrator**. It will:
当与 AI 智能体 (如 Trae/Claude/GPT) 协作时，智能体扮演 **SDD 编排者** 的角色。它将：

1.  **Read Rules**: Consult `.spec-rules/*.md` to understand its current role.
    **读取规则**: 参考 `.spec-rules/*.md` 以理解其当前角色。
2.  **Enforce Process**: Refuse to write code until Requirements, Design, and Plan are approved.
    **强制流程**: 在需求、设计和计划获得批准之前，拒绝编写代码。
3.  **Manage State**: Update `STATUS.json` to reflect progress.
    **管理状态**: 更新 `STATUS.json` 以反映进度。

> **Motto**: "Slow is Smooth, Smooth is Fast."
> **格言**: "慢即是稳，稳即是快。"
