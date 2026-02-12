# Configuring PBAC (Policy Based Access Control)

Sapliy uses a modular policy engine to enforce security across the platform. Depending on your deployment and security needs, you can use one of three policy layers.

## The Strategy Pattern
Sapliy's engine (written in Go) checks for policies in this order:
1.  **OPA (Open Policy Agent)**: If `policies.rego` exists.
2.  **JSON**: If `policies.json` exists.
3.  **Hardcoded**: Default fallback for basic security.

## 1. Simple JSON Policies
Best for small teams. Define roles and permissions in a flat JSON file.

### Example `policies.json`
```json
{
  "roles": {
    "developer": ["flow:read", "flow:create", "event:emit"],
    "admin": ["*"]
  }
}
```

## 2. Advanced OPA / Rego (Enterprise)
For complex requirements, Sapliy integrates with OPA. This allows for Attribute-Based Access Control (ABAC).

### Example `policies.rego`
This policy only allows refunds to be triggered if the user is an admin **AND** the refund amount is less than $500, or requires a second signature.

```rego
package sapliy.authz

default allow = false

# Allow admin to trigger refund if amount < 500
allow {
    input.action == "payment:refund"
    input.subject.role == "admin"
    input.resource.amount < 500
}

# Require high-level role for larger refunds
allow {
    input.action == "payment:refund"
    input.subject.role == "finance_lead"
}
```

## Deploying Policies

### Self-Hosted
Mount your policy files into the `fintech-ecosystem` container:

```yaml
# docker-compose.yml
services:
  gateway:
    image: sapliy/gateway
    volumes:
      - ./config/policies.rego:/app/config/policies.rego
    environment:
      - POLICY_FILE_REGO=/app/config/policies.rego
```

### SaaS
Policies are managed via the **Organization Settings** in the Dashboard.

## Policy Scopes

- **Organization**: Global rules (e.g., "Who can delete the Org?").
- **Zone**: Environment rules (e.g., "Developers can only access 'Test' zones").
- **Flow**: Execution rules (e.g., "Who can manually trigger this specific flow?").
