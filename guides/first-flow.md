# How-to: Build Your First Flow

Automation flows in Sapliy allow you to connect **Events** to **Actions** using **Logic** nodes.

## Prerequisites

1.  A Sapliy account and an active **Organization**.
2.  A **Zone** created (e.g., `Development`).
3.  An API Key for that zone.

## Step 1: Define Your Trigger

Every flow starts with an event. Decide which event should start your automation.
Common triggers:
- `payment.succeeded`
- `user.created`
- `checkout.session.completed`

## Step 2: Add Logic (Conditional Routing)

Use logic nodes to filter events or branch your flow.
- **Filters**: Only proceed if `amount > 1000`.
- **Conditions**: If `user.is_premium`, route to Priority Support; otherwise, route to Standard.

## Step 3: Configure Actions

Actions are the final steps of your flow.
- **Webhook**: Send a POST request to your backend.
- **Notification**: Send an email or Slack message.
- **Audit**: Log the activity in a persistent audit trail.

## Step 4: Test in Test Mode

Activate your flow in **Test Mode** first. Trigger a mock event using the Sapliy CLI:

```bash
sapliy events trigger payment.succeeded --data '{"amount": 5000}'
```

## Step 5: Promote to Live

Once validated, toggle the flow to **Live Mode**. It will now respond to real production events.

---

[View Advanced Guide](/concepts/flows) | [SDK Reference](/sdks/node)
