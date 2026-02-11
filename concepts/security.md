# Security & Access Control

Sapliy is built for environments where security is non-negotiable.

## Policy Based Access Control (PBAC)

Unlike simple "Admin vs User" roles, PBAC allows for complex rules logic.

### How it works
Every request to the Sapliy engine runs through a Policy Check.
- **Subject**: Who is asking? (User ID, API Key Token)
- **Action**: What do they want? (`flow:create`, `event:emit`)
- **Resource**: On what? (`zone:production`)
- **Context**: When/Where? (IP Address, Time of day)

### Example Policy
```json
{
  "effect": "allow",
  "action": "flow:deploy",
  "resource": "zone:production",
  "condition": {
    "and": [
      { "equals": { "subject.role": "admin" } },
      { "requires_approval": true }
    ]
  }
}
```

## API Key Scopes

Never use a root key in your application. Generate scoped keys:

- `pk_test_...` (Public): Can only **emit** specific client-side events. Safe for browsers.
- `sk_test_...` (Secret): Full access, keep on server.
- **Restricted Keys**:
    - `events:write` only (for a specific microservice).
    - `audit:read` only (for compliance tools).

## Organization Management

- **User Roles**: Assign users to pre-defined roles or custom policy groups.
- **Zone Restriction**: Restrict developers to `Test` zones only, preventing accidental changes to `Live`.

## Audit Logs

Every single change is recorded in the **Immutable Ledger**.
- Who changed the flow?
- What was the previous value?
- When did it happen?

This is available via the Dashboard and the Management API.
