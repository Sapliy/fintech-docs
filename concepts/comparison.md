# Why Sapliy? (vs n8n / Zapier)

While tools like **n8n** and **Zapier** are excellent for connecting apps together, **Sapliy** is built for a different purpose: **Software-Defined Business Logic**.

| Feature | Sapliy | n8n / Zapier |
| :--- | :--- | :--- |
| **Primary Goal** | Define & execute business rules & financial flows | Connect app A to app B |
| **Architecture** | Event-Driven (Push) | Polling / Webhook per Node |
| **Isolation** | **Zones** (Test/Live) with strict separation | Workspace based (often mixed) |
| **Triggering** | SDK (`sapliy.emit`), API, Webhook | Webhooks, Polling, Schedules |
| **Versioning** | Flows are versioned code/assets | Live editing (risky) |
| **Logic** | Policy-Based Access Control (PBAC) + State | Linear workflows |
| **Developer Exp** | **SDK First**, CLI, Local Dev | UI First, Low-code |

## 1. Event-Driven vs Point-to-Point

In **n8n**, a workflow usually starts with a specific trigger (e.g., "On Stripe Payment"). If you change your payment provider, you have to rewrite your workflows.

In **Sapliy**, you emit a **Business Event** (e.g., `checkout.completed`).
- It doesn't matter *where* it came from (Stripe, PayPal, CLI).
- Multiple flows can listen to the *same* event independently.
- Decouples your code from your automation.

```javascript
// Your code just says "This happened"
await sapliy.emit("checkout.completed", { amount: 100 });

// Your Sapliy flows decide what to do:
// 1. Send receipt (Flow A)
// 2. Grant access license (Flow B)
// 3. Update CRM (Flow C)
```

## 2. Safe by Design: Zones

Fintech requires safety. You can't accidentally run a test transaction on a live production database.

**Sapliy enforces isolation:**
- **Test Mode**: Operations differ by API key (`sk_test_...`). Events here *cannot* trigger Live flows.
- **Live Mode**: Strictly for real money/data.
- **Zones**: Organization-level isolation. A "Staging" zone is completely separate from "Production" zone.

## 3. Policy & Control (PBAC)

Sapliy isn't just moving data; it's enforcing rules.
- **Access Control**: "Who can refund triggering this flow?"
- **Approval Nodes**: Flows can pause and wait for human (Admin) approval via the Dashboard.
- **Audit Trails**: Every action is immutably logged for compliance.

## 4. Why Developers Choose Sapliy

- **One SDK**: You don't need 50 different SDKs. Just `sapliy-sdk`.
- **Local Dev**: Use the CLI to forward events to your local machine.
- **Type Safety**: Events are typed.
- **Hybrid Deployment**: Start SaaS, move to Self-Hosted if you need data sovereignty.
