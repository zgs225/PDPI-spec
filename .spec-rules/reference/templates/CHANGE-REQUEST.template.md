# Change Request: CR-[XXX]

> **Module**: [module-name]
> **Date**: YYYY-MM-DD
> **Requestor**: [Name/Role]
> **Current Phase**: [Phase when CR was raised]
> **Type**: Scope Change | Bug Fix | Clarification | Architecture Change

## 1. Description
*What needs to change and why?*

[Describe the change request in detail]

## 2. Justification
*Why is this change necessary?*

- [ ] User feedback
- [ ] Technical discovery
- [ ] Business requirement change
- [ ] Bug/Issue found
- [ ] Other: _______________

## 3. Impact Analysis

### 3.1 Affected Phases
| Phase | Impact Level | Changes Required |
|-------|--------------|------------------|
| REQUIREMENTS | None / Minor / Major | [Description] |
| DESIGN | None / Minor / Major | [Description] |
| PLAN | None / Minor / Major | [Description] |
| IMPLEMENTATION | None / Minor / Major | [Description] |

### 3.2 Effort Estimate
- **Additional Effort**: [Low: < 2h | Medium: 2-8h | High: > 8h]
- **Delay Risk**: [None | Minor | Significant]

### 3.3 Risk Assessment
- **Technical Risk**: [Low | Medium | High]
- **Business Risk**: [Low | Medium | High]
- **Mitigation**: [How to reduce risk]

## 4. Alternatives Considered
1. **Do Nothing**: [Why this is not acceptable]
2. **Alternative A**: [Description and why rejected]
3. **Alternative B**: [Description and why rejected]

## 5. Decision

### 5.1 Verdict
- [ ] ✅ **Approved** -> Backtrack to Phase: _______________
- [ ] ⏸️ **Deferred** -> Add to Future Work in: _______________
- [ ] ❌ **Rejected** -> Reason: _______________

### 5.2 Decision Maker
- **Name**: _______________
- **Date**: _______________

## 6. Execution Plan (if Approved)

### 6.1 Backtrack Steps
1. Mark downstream phases as INVALIDATED in STATUS.json
2. Update [target phase] document with changes
3. Re-run QA for [target phase]
4. Cascade forward through subsequent phases

### 6.2 Affected Files
- [ ] `specs/[module]/requirements.md`
- [ ] `specs/[module]/design.md`
- [ ] `specs/[module]/plan.md`
- [ ] `specs/[module]/STATUS.json`

## 7. Post-Change Verification
- [ ] All affected documents updated
- [ ] QA passed for revised phases
- [ ] STATUS.json reflects current state
- [ ] Team notified of changes
