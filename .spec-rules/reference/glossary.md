# 📚 SDD 术语表

> **用途**: 定义 Spec-Driven Development 中使用的关键术语

---

## 核心概念

### Spec-Driven Development (SDD)
**规格驱动开发** - 一种软件开发方法论，强制执行 Requirements → Design → Plan → Implementation 的严格流程，并在每个阶段设置强制性QA门控。

### Phase（阶段）
SDD 流程的一个阶段，如 PREWORK, REQUIREMENTS, DESIGN, PLAN, IMPLEMENTATION, ACCEPTANCE。

### QA Gate（QA门控）
阶段之间的强制审查检查点。未通过QA Gate的内容不能进入下一阶段。

### STATUS.json
项目状态的唯一真实来源。记录当前阶段、历史、阻塞和变更请求。

---

## 开发实践

### Vertical Slicing（垂直切片）
端到端构建功能切片（DB → API → UI），而不是水平分层（先所有DB，再所有API，再所有UI）。优点：早期风险检测，更快反馈。

### Green-to-Green（绿到绿）
每步执行后，项目必须处于可构建状态。避免"破坏状态"。

### Rolling Wave Planning（滚动波规划）
只详细规划当前阶段；未来阶段保持高级概要。避免过早详细规划导致的浪费。

### TDD (Test-Driven Development)
测试驱动开发 - 先写失败测试（Red），再实现使测试通过（Green），最后重构（Refactor）。

---

## 质量保证

### Adversarial QA（对抗性QA）
QA审查员必须采取挑剔态度，主动寻找问题而非寻找优点。"友好"的QA是无用的QA。

### Gherkin
Given-When-Then 格式的验收标准编写方法。明确定义初始状态、操作和预期结果。

### ADR (Architecture Decision Record)
架构决策记录 - 记录为什么做出某个设计决策、考虑了哪些替代方案、后果是什么。

---

## 文档

### File Manifest（文件清单）
DESIGN 中列出所有要创建/修改的文件。PLAN 必须覆盖所有这些文件。

### Traceability Matrix（可追溯性矩阵）
映射用户故事到设计节到实现步骤。确保每个需求都被设计和实现覆盖。

### Milestone（里程碑）
PLAN 中的检查点，通常每3-5步设置一个。到达里程碑时必须验证所有前置步骤和集成。

---

## 问题管理

### Deviation Report（偏差报告）
IMPLEMENTATION 阶段发现 PLAN 无法执行时生成的报告。包括问题、预期、实际、建议解决方案。

### Change Request (CR)
正式的需求变更流程。分为小（直接修复）、中（创建CR，可继续）、大（创建CR，必须回退）。

### Backtrack（回退）
返回到前一阶段修复问题。必须标记下游阶段为 INVALIDATED，重新执行流程。

### Blocker（阻塞）
阻止进度的问题。记录在 STATUS.json 的 `blockers` 数组中，包含 ID、描述、状态。

---

## 反模式（Anti-Patterns）

### Phase Skipping（跳阶段）
不完成前置阶段就跳到后续阶段。如不写需求直接实现代码。**严格禁止**。

### Cowboy Coding（牛仔编程）
在 plan.md 未完成或未批准时就开始写代码。**严格禁止**。

### Rubber Stamp QA（橡皮图章QA）
QA审查时不挑剔，什么都通过。导致错误流入下一阶段。**严格禁止**。

### Hallucination（幻觉）
假设文件/函数存在但实际不存在。必须通过 PREWORK 阶段的验证来防止。

### Big Bang Planning（大爆炸规划）
一次性详细规划所有阶段。导致早期规划浪费和后期上下文丢失。应使用滚动波规划。

### Over-Engineering（过度设计）
引入不必要的复杂性。应遵循 KISS 原则（Keep It Simple, Stupid）和 YAGNI 原则（You Aren't Gonna Need It）。

---

## 优先级

### MoSCoW
需求优先级模型：
- **Must Have**: MVP关键，不能发布
- **Should Have**: 重要但非关键
- **Could Have**: 锦上添花
- **Won't Have**: 明确不在此迭代范围

### P0/P1/P2/P3
问题优先级：
- **P0**: 严重，阻止发布，立即修复
- **P1**: 高优先级，应该尽快修复
- **P2**: 中优先级，计划修复
- **P3**: 低优先级，如有时间修复

---

## 技术术语

### N+1 Problem
数据库查询反模式。在循环中执行查询导致性能问题。应使用 JOIN 或批量查询。

### Idempotency（幂等性）
操作可以安全地多次执行而产生相同结果。对API和数据库操作很重要。

### RBAC (Role-Based Access Control)
基于角色的访问控制。用户被分配角色，角色有权限。

### Race Condition（竞态条件）
多个并发操作的结果取决于执行顺序。需要锁或事务来防止。

---

## 工作量估算

### T-Shirt Sizing
- **XS**: < 1小时
- **S**: 1-4小时
- **M**: 4-8小时
- **L**: 1-2天
- **XL**: > 2天

---

## 状态值

### Phase Status
- **IN_PROGRESS**: 正在进行
- **APPROVED**: 已批准，可以进入下一阶段
- **REJECTED**: 被拒绝，必须修复后重新提交
- **INVALIDATED**: 因上游变更而失效，需要重新执行

### Blocker/CR Status
- **OPEN/PENDING**: 待处理
- **APPROVED**: 已批准
- **REJECTED**: 已拒绝
- **RESOLVED**: 已解决
- **DEFERRED**: 推迟到未来

---

## 格言

> **"慢即是稳，稳即是快。"**

> **"没有计划就是计划失败。"**

> **"文档即代码，QA即生命线。"**

> **"质量是设计出来的，不是测试出来的；流程是强制执行的，不是建议遵守的。"**

