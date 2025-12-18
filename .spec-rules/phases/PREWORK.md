# 🕵️ Phase 0: PREWORK（上下文收集）

> **角色**: 上下文侦探  
> **目标**: 在生成需求/设计/计划/代码之前，收集项目现状，防止幻觉  
> **QA角色**: 事实检查员

---

## 核心原则

**冰山理论**：用户请求只是冰山一角（10%），现有代码库是水下的90%。忽视水下部分会导致：
- ❌ 冗余：重新实现已有的工具函数
- ❌ 不一致：项目用 `fetch`，你却用 `axios`
- ❌ 回归：破坏隐藏的依赖关系

---

## 三步协议：DNA → 追踪 → 对齐

### 步骤1：项目DNA分析（骨架）

**目标**：识别项目的"基因"

**行动**：
1. **读取清单文件**：`package.json`, `Cargo.toml`, `requirements.txt`, `go.mod`
   - 识别：安装了哪些库？（如 `trpc`, `prisma`, `redux` vs `zustand`）

2. **读取配置文件**：`tsconfig.json`, `next.config.js`, `.env.example`
   - 识别：约束条件是什么？（严格模式、路径别名如 `@/`）

3. **扫描目录结构**：`ls -R`（深度2-3）
   - 识别：逻辑在哪？（`src/features` vs `src/app` vs `internal/domain`）

---

### 步骤2：语义追踪（神经系统）

**目标**：不只是grep字符串，而是追踪关系

**行动**：
1. **关键词扩展**
   - 用户说："编辑脚本"
   - 你搜索："Script", "Screenplay", "Document", "Page", "Editor"

2. **依赖追踪**
   - 找到 `TaskService` → 查找其**调用者**（Controllers/Routers）和**被调用者**（DB Models/Utils）
   - 目标：映射变更的"爆炸半径"

3. **模式匹配**
   - 寻找"双胞胎功能"：如果要构建"对脚本评论"，查看"对帖子评论"
   - 复制**模式**，不只是代码

---

### 步骤3：规格对齐（缺口）

**目标**：将请求叠加到现实上

**行动**：
1. **读取集成点**
   - 打开 `schema.prisma`（数据库）
   - 打开 `server/api/root.ts`（API注册表）
   - 打开 `routes.tsx`（导航）

2. **验证可复用性**
   - "我们有 `Modal` 组件吗？" → `ls src/components/ui`
   - "我们有日期格式化函数吗？" → `ls src/utils`

---

## 输出：验证上下文工件

生成结构化文档：

```markdown
# 🧩 PREWORK 上下文工件
> **模块**: [module-name]
> **日期**: YYYY-MM-DD
> **状态**: 已验证

## 1. 项目DNA
- **框架**: Next.js 14 (App Router)
- **状态管理**: Zustand + React Query
- **样式**: Tailwind + Shadcn UI
- **数据库**: Prisma (PostgreSQL)
- **测试**: Vitest + React Testing Library

## 2. 相关现实（地图）
- **核心实体**: `model Script` 在 `schema.prisma` (Line 45)
- **API模式**: tRPC路由器位于 `server/api/routers/`
- **UI组件**: 找到 `src/components/ui/dialog.tsx`（可复用）
- **相似功能**: `Note` 功能使用相同的"乐观更新"模式

## 3. 缺口（缺少的）
- [ ] 数据库中还没有 `Scene` 实体
- [ ] `Editor` 组件存在但缺少"多光标"支持
- [ ] 没有 `deleteScene` 的 tRPC 过程

## 4. 风险与约束
- **认证**: 必须使用 `ctx.session.user.id`
- **国际化**: 所有用户文本必须使用 `useTranslations`
- **性能**: 编辑器必须处理 10k+ 块

## 5. 下游阶段的关键约束
> **重要**: 这些约束必须在 REQUIREMENTS 和 DESIGN 中引用

1. 必须使用 `src/components/ui/dialog.tsx` 中的现有 `Modal` 组件
2. 认证模式：`ctx.session.user.id`（无自定义认证）
3. 状态管理：Zustand（非 Redux）
4. API 模式：`server/api/routers/` 中的 tRPC 过程

## 6. 验证命令
- `ls src/components/ui` → 验证 UI 组件存在
- `grep -r "model Script" prisma/` → 验证 Schema 位置
```

---

## 触发时机

**必须运行 PREWORK**：
- ✅ 任务开始时
- ✅ 创建新文件前（检查重复）
- ✅ 用户提到你在**此代码库**中不完全理解的术语时

---

## QA 检查清单（嵌入）

### 🧐 PREWORK QA：事实检查

**检查项**：

#### 1. 项目DNA检查
- [ ] **框架感知**: 识别了项目框架（Next.js/React/Prisma）？没有幻觉Express/Mongo？
- [ ] **库感知**: 在建议新库前检查了 `package.json`？
- [ ] **样式对齐**: 如果项目使用 CSS Modules，没有建议 Tailwind 类？

#### 2. 语义追踪检查
- [ ] **关系映射**: 找到了**相关**文件，不只是精确匹配关键词？
- [ ] **双胞胎功能**: 识别了相似的现有功能以复制模式？
- [ ] **依赖检查**: 识别了改变此文件会**破坏**什么？

#### 3. 规格对齐检查
- [ ] **文件验证**: 用 `ls` 验证了文件路径？
- [ ] **代码验证**: 读取了集成点（`schema.prisma`, `api/root.ts`）的内容？
- [ ] **复用验证**: 有现有组件但创建新的（如 `MyButton` 而有 `ui/button`）？

#### 4. 拒绝标准（严格）

**🔴 立即拒绝**：
- 建议使用 `axios` 但 `package.json` 只有 `ky` 或 `fetch`
- 假设 `src/utils/api.ts` 存在但没有检查
- 创建新Table组件，但已有 `components/ui/table.tsx`
- 在建议schema变更前没有读取 `schema.prisma`

---

## 输出交付

**通过标准**：
- ✅ 创建了 `specs/[module]/prework.md`
- ✅ 识别了项目技术栈
- ✅ 列出了可复用组件
- ✅ 验证了所有文件路径
- ✅ 没有任何未经验证的假设

**拒绝标准**：
- ❌ 任何"我认为文件在..."（必须用 `ls` 验证）
- ❌ 建议项目中不存在的库
- ❌ 遗漏了明显的相似功能

