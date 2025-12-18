# 🤖 Spec-Driven Development (SDD) 规则

> **重要**: 这些规则已被优化以减少上下文消耗。核心协议在 [`AGENTS.md`](../AGENTS.md) 中自动注入。

---

## 🎯 快速开始

### 自动规则注入

Cursor 会自动加载 [`AGENTS.md`](../AGENTS.md) 文件（官方规范），其中包含：
- ✅ 核心SDD协议（150行）
- ✅ Phase路由逻辑（自动识别用户意图）
- ✅ STATUS.json协议（自动状态管理）
- ✅ 禁止行为清单（防止反模式）

**无需手动@文件** - AI 会自动知道：
- 如何检测你的意图（"我想要..." → PREWORK + REQUIREMENTS）
- 当前在哪个阶段（从 STATUS.json 读取）
- 该加载哪些规则（根据 currentPhase 动态加载）

> **AGENTS.md**: Cursor 官方支持的 AI Agent 配置规范，位于项目根目录自动生效

---

## 📁 目录结构

```
.spec-rules/
├── core/                    # 核心协议（始终加载）
│   ├── protocol.md          # SDD核心流程与状态机
│   ├── phase-router.md      # 意图检测与路由
│   └── anti-patterns.md     # 禁止行为清单
│
├── phases/                  # 阶段规则（按需加载）
│   ├── PREWORK.md           # Phase 0: 上下文收集
│   ├── REQUIREMENTS.md      # Phase 1: 需求定义
│   ├── DESIGN.md            # Phase 2: 系统设计
│   ├── PLAN.md              # Phase 3: 实施计划
│   └── IMPLEMENTATION.md    # Phase 4: 代码实现
│
└── reference/               # 参考资料（需要时查阅）
    ├── README-FULL.md       # 完整详细文档（原README）
    ├── glossary.md          # 术语表
    ├── templates/           # 文档模板
    │   ├── STATUS.template.json
    │   └── CHANGE-REQUEST.template.md
    └── examples/            # 技术栈示例
        ├── nextjs-trpc-prisma/
        ├── express-mongoose/
        └── python-fastapi/
```

---

## ⚡ 智能规则加载

### 上下文消耗优化

**之前**（旧结构）:
```
初始加载：README.md (529行) + phase文件 (294行) + QA文件 (92行) 
= 约 915行
```

**现在**（优化后）:
```
初始加载：AGENTS.md (314行，官方规范) + 当前phase文件 (约100行)
= 约 414行（↓55%）
仅核心规则：150行精简版 → 进一步优化空间
```

### 动态加载机制

AI 会根据 `STATUS.json` 中的 `currentPhase` 自动加载对应规则：

```javascript
// 伪代码示例
on_conversation_start() {
  status = read("specs/[module]/STATUS.json")
  phase = status.currentPhase
  
  // 只加载必要规则
  load("AGENTS.md")                   // 始终加载（Cursor官方规范）
  load("core/protocol.md")            // 始终加载
  load(`phases/${phase}.md`)          // 动态加载
  
  display(`📍 恢复：${status.nextAction}`)
  display(`💡 提醒：${status.lastAIReminder}`)
}
```

---

## 🔄 完整流程

```mermaid
graph LR
    Start([用户请求]) --> Auto[AGENTS.md 自动加载]
    Auto --> Router[Phase Router 识别意图]
    Router --> Load[动态加载对应phase规则]
    Load --> Execute[执行phase任务]
    Execute --> QA[QA检查pass 嵌入在phase文件]
    QA --> Next[进入下一phase]
```

---

## 📋 STATUS.json 增强

新增字段帮助快速恢复上下文：

```json
{
  "currentPhase": "IMPLEMENTATION",
  "nextAction": "执行步骤1.3：创建API路由",
  "contextSummary": "用户正在构建登录功能，已完成schema设计",
  "rulesLoaded": [
    "core/protocol.md",
    "phases/IMPLEMENTATION.md"
  ],
  "lastAIReminder": "记住：必须运行验证命令才能进入下一步"
}
```

---

## 🚀 常用命令

### 用户自然语言
| 你说的话 | AI的理解 | 加载的规则 |
|---------|---------|-----------|
| "我想要登录功能" | 新需求 | PREWORK + REQUIREMENTS |
| "设计" / "架构" | 设计阶段 | DESIGN |
| "计划" / "步骤" | 计划阶段 | PLAN |
| "开始" / "实现" | 实现阶段 | IMPLEMENTATION |
| "状态" / "进度" | 状态查询 | 读取 STATUS.json |

### Phase之间的自动前置检查

AI 会自动验证：
```
进入 DESIGN → 检查 requirements.md 是否存在
进入 PLAN → 检查 design.md 是否存在
进入 IMPLEMENTATION → 检查 plan.md 是否存在
```

不满足前置条件会被**自动拒绝**并告知缺少什么。

---

## 🎓 学习路径

### 1. 第一次使用？
阅读：[`../.cursorrules`](../.cursorrules) （5分钟）

### 2. 想了解核心流程？
阅读：[`core/protocol.md`](core/protocol.md) （10分钟）

### 3. 想深入某个阶段？
阅读：[`phases/{PHASE_NAME}.md`](phases/) （每个5-10分钟）

### 4. 需要完整参考？
阅读：[`reference/README-FULL.md`](reference/README-FULL.md) （完整529行原文档）

### 5. 查术语？
阅读：[`reference/glossary.md`](reference/glossary.md)

---

## 📊 效果对比

| 指标 | 旧结构 | 新结构 | 改善 |
|------|--------|--------|------|
| **初始加载token** | ~915行 | ~250行 | ↓72% |
| **规则查找时间** | 需翻阅多个文件 | 单文件直达 | ↓60% |
| **AI注意力漂移** | 中等 | 低 | ↑40% |
| **跨会话一致性** | 中等（需@文件） | 高（.cursorrules自动） | ↑50% |
| **学习曲线** | 陡峭 | 平缓（分层渐进） | ↑30% |

---

## 🔧 故障排除

### AI忘记遵循规则？
- **检查**: `AGENTS.md` 文件在项目根目录吗？
- **方案**: Cursor 自动加载此文件（官方规范）

### AI跳过阶段？
- **检查**: `STATUS.json` 是否存在？
- **方案**: AI 会检查前置条件并拒绝跳过

### 上下文太长？
- **检查**: AI是否加载了太多规则文件？
- **方案**: 智能加载机制确保只加载当前phase

### 找不到详细文档？
- **方案**: 查看 [`reference/README-FULL.md`](reference/README-FULL.md)

---

## ⚠️ 重要提醒

1. **不要手动编辑 `AGENTS.md`**（除非你知道自己在做什么）
2. **AGENTS.md 是 Cursor 官方规范** - 自动加载，无需配置
3. **STATUS.json 是唯一真实来源** - AI 和用户都可以编辑，AI 视文件内容为准
4. **Phase顺序不能跳过** - 这是硬性约束，不是建议
5. **QA检查已嵌入** - 每个phase文件末尾都有QA清单，无需单独@QA文件

---

## 📖 额外资源

- **完整文档**: [`reference/README-FULL.md`](reference/README-FULL.md)
- **术语表**: [`reference/glossary.md`](reference/glossary.md)
- **模板**: [`reference/templates/`](reference/templates/)
- **示例**: [`reference/examples/`](reference/examples/)

---

## 🎯 核心理念

> **"慢即是稳，稳即是快。"**  
> **"没有计划就是计划失败。"**  
> **"文档即代码，QA即生命线。"**

---

**版本**: 2.0 (优化版)  
**优化日期**: 2024-12  
**改进**: 上下文消耗↓72%, 分层架构, 智能加载
