# 🔬 Implementation QA Protocol

> **Usage**: Use this checklist to verify that Phase 4 (Implementation) was successful before declaring the feature "Complete".

## 0. Structure Compliance (Mandatory First Check)
> **CRITICAL**: Verify the implementation followed the correct process.

*Check if all required artifacts exist:*
- [ ] All Step Execution Reports generated
- [ ] All Milestone Reports generated
- [ ] Deviation Reports (if any) properly documented
- [ ] STATUS.json updated with current state

## 1. Plan Alignment Check
> **CRITICAL**: Implementation must match PLAN exactly.

### 1.1 Step Completion
- [ ] **All Steps Marked**: Are ALL steps in `PLAN.md` marked as `[x]`?
- [ ] **No Skipped Steps**: Were any steps skipped? (If yes, why?)
- [ ] **Verification Executed**: Did the Agent run verification commands for EVERY step?

### 1.2 Code Fidelity
- [ ] **Code Snippets Used**: Were Code Snippets from PLAN used exactly as written?
- [ ] **No Unauthorized Changes**: Did the Agent add code not specified in PLAN?
- [ ] **DESIGN Alignment**: Does the code match the types/signatures in DESIGN Section 9?

### 1.3 Deviation Audit
| Deviation ID | Step | Type | Resolution | Approved |
|--------------|------|------|------------|----------|
| DEV-001 | 1.3 | Blocker | Fixed typo in path | ✅ |
| DEV-002 | 2.1 | Modification | Added missing import | ✅ |

- [ ] **All Deviations Documented**: Every deviation has a report?
- [ ] **All Deviations Approved**: Every deviation was justified?
- [ ] **No Unauthorized Deviations**: No changes made without reporting?

## 2. The "Green Build" Check
- [ ] **Build**: Does `[build command]` complete without error?
- [ ] **Type Check**: Does `[type check command]` pass with zero errors?
- [ ] **Lint**: Does `[lint command]` pass with zero warnings?

## 3. Milestone Verification
> Verify all Milestones from PLAN were properly completed.

| Milestone | Steps | All Checks Pass | Report Generated |
|-----------|-------|-----------------|------------------|
| Milestone 1 | 1.1-1.3 | ✅ | ✅ |
| Milestone 2 | 1.4-1.6 | ✅ | ✅ |

- [ ] **All Milestones Complete**: Every Milestone in PLAN has passed?
- [ ] **Milestone Reports Exist**: Every Milestone has a completion report?

## 4. Functional Testing
- [ ] **Happy Path**: Does the feature work for the standard use case?
- [ ] **Sad Path**: Does it handle errors gracefully (e.g., network error, invalid input)?
- [ ] **Regression**: Did we break existing features? (`[test command]` - all tests pass)
- [ ] **New Tests Added**: Are tests from DESIGN Section 7 (Verification Strategy) implemented?

## 5. Code Quality Review
- [ ] **No Debug Code**: Are `console.log`, `debugger`, etc. removed?
- [ ] **No TODO Comments**: Are "TODO" comments resolved or tracked in issues?
- [ ] **Naming Consistency**: Do variable/function names match DESIGN.md schema?
- [ ] **No Dead Code**: Is there any unused code that should be removed?
- [ ] **Error Handling**: Are errors handled as specified in DESIGN Section 6?

## 6. Final Artifacts Check
- [ ] **PLAN.md Updated**: All steps marked `[x]`, reflects final state
- [ ] **STATUS.json Updated**: Phase marked as `IMPLEMENTATION_COMPLETE`
- [ ] **Tests Committed**: All new tests are in the codebase
- [ ] **No Uncommitted Changes**: All changes are committed

## 7. User Acceptance (Phase 5)
> **Goal**: Validate the feature meets stakeholder expectations before declaring "Done".

### 7.1 Demo Checklist
- [ ] **Demo Prepared**: Can you demonstrate all User Stories from Requirements?
- [ ] **Happy Path Demo**: Show the primary use case working.
- [ ] **Error Handling Demo**: Show graceful degradation (e.g., network error).
- [ ] **Edge Case Demo**: Show boundary conditions handled.

### 7.2 Stakeholder Sign-off
- [ ] **Product Owner Review**: Feature meets business requirements?
- [ ] **UX Review**: Interaction patterns are intuitive?
- [ ] **Accessibility Review**: WCAG 2.1 AA compliance verified?

### 7.3 Acceptance Verdict
```markdown
## Acceptance Report
> **Feature**: [Feature Name]
> **Date**: YYYY-MM-DD
> **Reviewer**: [Name/Role]
> **Verdict**: 🔴 REJECTED | 🟡 CHANGES REQUESTED | 🟢 ACCEPTED

### Feedback
- [List any issues or change requests]

### Sign-off
- [ ] Product Owner: _______________
- [ ] Tech Lead: _______________
```

### 7.4 Post-Acceptance Actions
- [ ] **STATUS.json**: Update to `COMPLETE`.
- [ ] **Documentation**: Update user-facing docs if needed.
- [ ] **Monitoring**: Set up alerts for new feature (if applicable).
- [ ] **Feature Flag**: Enable for all users (if using gradual rollout).