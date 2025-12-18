---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SDD"
  text: "规格驱动开发"
  tagline: 一套严谨的 AI 辅助软件开发流程，强制执行 Requirements → Design → Plan → Implementation 流水线
  actions:
    - theme: brand
      text: 5分钟快速开始
      link: /GETTING-STARTED
    - theme: alt
      text: 查看文档
      link: /QUICK-START
    - theme: alt
      text: 提示词模板
      link: /PROMPT-TEMPLATES

features:
  - icon: 🎯
    title: 严格的阶段流程
    details: PREWORK → REQUIREMENTS → DESIGN → PLAN → IMPLEMENTATION → ACCEPTANCE，每个阶段有明确的产物和验证标准
  
  - icon: 🤖
    title: AI 智能协作
    details: AI 自动识别当前阶段，扮演对应角色（产品经理、架构师、工程经理等），提供专业指导
  
  - icon: ✅
    title: 内置 QA 门控
    details: 每个阶段结束自动运行质量检查，确保没有通过 QA 的内容不会进入下一阶段
  
  - icon: 📝
    title: 文档即代码
    details: 所有决策记录在 specs/ 目录下，形成可追溯的知识资产，支持中断恢复和团队协作
  
  - icon: 🔄
    title: 状态驱动
    details: STATUS.json 是唯一真实来源，AI 通过状态文件在会话间保持上下文，随时恢复工作
  
  - icon: 💬
    title: 95+ 提示词模板
    details: 覆盖所有场景的提示词模板库，包含正确/错误示例对比，帮助你高效与 AI 协作
  
  - icon: 🚀
    title: 5 分钟上手
    details: 跟随快速开始指南，5 分钟即可完成第一次体验，无需复杂配置
  
  - icon: 🎓
    title: 渐进式学习
    details: 从入门到精通的完整学习路径，适合新手快速上手，也适合老手深入定制
  
  - icon: 🛠️
    title: 高度可定制
    details: 所有规则都可自定义，QA 标准可调整，支持集成到 CI/CD 流程中
---

## 🌟 为什么选择 SDD？

<div class="tip custom-block" style="padding-top: 8px">

传统 AI 编程的问题：
- ❌ 直接让 AI "写代码"，容易产生不符合需求的代码
- ❌ 缺乏结构化过程，难以维护和追溯
- ❌ 没有质量门控，容易积累技术债务

SDD 的解决方案：
- ✅ 先想清楚"为什么"和"是什么"，再考虑"怎么做"
- ✅ 每个阶段有明确的产物和验证标准
- ✅ 内置 QA 门控，确保质量

</div>

## 🎯 工作流程一览

```mermaid
graph LR
    Start[开始新功能] --> P0[PREWORK<br/>收集上下文]
    P0 --> P1[REQUIREMENTS<br/>定义需求]
    P1 --> P2[DESIGN<br/>架构设计]
    P2 --> P3[PLAN<br/>制定步骤]
    P3 --> P4[IMPLEMENTATION<br/>编写代码]
    P4 --> P5[ACCEPTANCE<br/>验收测试]
    P5 --> Done[功能完成]
    
    style P0 fill:#e1f5ff
    style P1 fill:#fff3e0
    style P2 fill:#f3e5f5
    style P3 fill:#e8f5e9
    style P4 fill:#fce4ec
    style P5 fill:#fff9c4
    style Done fill:#c8e6c9
```

## 📚 核心文档

| 文档 | 说明 | 适合 |
|------|------|------|
| [5分钟极速入门](./GETTING-STARTED.md) | 3 步快速开始 + 常见问题 | 第一次使用 |
| [完整操作手册](./QUICK-START.md) | 详细工作流程 + 实战场景 | 深入了解 |
| [提示词模板库](./PROMPT-TEMPLATES.md) | 95+ 提示词模板 | 日常参考 |
| [AI 核心配置](./AGENTS.md) | Cursor 自动加载的规则 | 理解 AI 行为 |
| [文档索引](./DOCUMENTATION-INDEX.md) | 按角色/场景查找文档 | 快速定位 |

## 🚀 快速开始

### 第 1 步：确认环境（30秒）

在 Cursor 中打开项目，发送测试消息：

```
状态
```

如果看到 AI 响应，说明系统就绪！✅

### 第 2 步：启动第一个功能（2分钟）

```
我要添加用户登录功能
```

AI 会自动进入 PREWORK 阶段，收集项目上下文。

### 第 3 步：跟随 AI 引导（15-30分钟）

每个阶段结束时，AI 会询问是否进入下一阶段，你只需回复"是"或"继续"。

**详细步骤** → [5分钟极速入门](./GETTING-STARTED.md)

## 💡 实战案例

### 场景 1：全新功能开发

```
你: 我要添加文件上传功能

AI: [创建 STATUS.json，进入 PREWORK...]
    已识别：
    - 框架: React + Node.js
    - 现有功能: 图片上传（可参考）
    ✅ PREWORK 完成。是否进入 REQUIREMENTS 阶段？

你: 是

AI: [进入 REQUIREMENTS，生成 requirements.md...]
    已创建 3 个 Gherkin 场景
    ✅ 是否进入 DESIGN 阶段？

[...依次完成各阶段...]
```

### 场景 2：中断后恢复

```
你: 状态

AI: 📍 模块：file-upload
    🔄 当前阶段：IMPLEMENTATION
    ➡️ 下一步：执行步骤 3.2

你: 继续

AI: [从步骤 3.2 继续执行...]
```

**更多场景** → [完整操作手册](./QUICK-START.md)

## 🎓 学习路径

### 路径 1：快速上手（1 小时）

```
1. 阅读 5分钟极速入门 (5 min)
2. 完成第一个简单功能 (30 min)
3. 浏览提示词模板库 (10 min)
4. 完成第二个功能 (15 min)
```

### 路径 2：深入理解（1 天）

```
1. 阅读完整操作手册 (15 min)
2. 完成中等复杂功能 (1 hour)
3. 阅读规则系统文档 (30 min)
4. 尝试各种场景和提示词 (2 hours)
```

### 路径 3：系统定制（1 周）

```
1. 完成路径 1 和 2
2. 自定义 QA 检查清单
3. 编写项目特定模板
4. 集成到 CI/CD
5. 团队培训推广
```

## 💬 提示词速查表

| 场景 | 提示词 |
|------|--------|
| 查看状态 | `状态` |
| 启动新功能 | `我要添加 [功能名称]` |
| 继续工作 | `继续` |
| 进入下一阶段 | `是` |
| 报告问题 | `步骤 X.X 失败了` |
| 暂停工作 | `暂停` |

**完整模板库** → [提示词模板](./PROMPT-TEMPLATES.md)

## 🌐 系统架构

SDD 采用三层规则体系：

```
AGENTS.md (核心配置，Cursor 自动加载)
    │
    ├─ core/              # 核心协议
    │   ├─ protocol.md    # SDD 流程定义
    │   ├─ phase-router.md # 阶段路由逻辑
    │   └─ anti-patterns.md # 反模式清单
    │
    ├─ phases/            # 各阶段详细规则
    │   ├─ PREWORK.md
    │   ├─ REQUIREMENTS.md
    │   ├─ DESIGN.md
    │   ├─ PLAN.md
    │   └─ IMPLEMENTATION.md
    │
    └─ reference/         # 参考资料和模板
        ├─ templates/     # 文档模板
        ├─ examples/      # 完整示例
        └─ glossary.md    # 术语表
```

**详细架构** → [规则系统](/.spec-rules/README.md)

## 📊 效果数据

| 指标 | 数据 |
|------|------|
| 上手时间 | 5 分钟 |
| 提示词模板 | 95+ |
| 实战场景 | 5+ |
| 学习路径 | 3 条 |
| 文档数量 | 18+ |
| 上下文优化 | 减少 72.8% |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

- **发现问题**：提 [Issue](https://github.com/zgs225/PDPI-spec/issues)
- **改进文档**：提 [Pull Request](https://github.com/zgs225/PDPI-spec/pulls)
- **分享经验**：在 [Discussions](https://github.com/zgs225/PDPI-spec/discussions) 讨论

## 📄 开源协议

本项目采用 [ISC License](https://opensource.org/licenses/ISC) 开源。

---

<div class="tip custom-block" style="padding-top: 8px">

💡 **开始使用**：点击上方 "5分钟快速开始" 按钮，立即体验 SDD 系统！

</div>
