# Flows

Flows are automation workflows that connect events to actions. They're the heart of Sapliy's automation platform.

## Anatomy of a Flow

Every flow has three parts:

```
Trigger → Logic → Action(s)
```

1. **Trigger** — What starts the flow (event type, schedule, webhook)
2. **Logic** — Conditions, filters, approvals
3. **Actions** — What happens (webhooks, notifications, API calls)

## Creating Flows

### Visual Flow Builder

The easiest way to create flows is the drag-and-drop Flow Builder:

1. Open [app.sapliy.io/flows](https://app.sapliy.io/flows)
2. Click "Create Flow"
3. Add a trigger node
4. Connect logic and action nodes
5. Deploy

### Via API

```js
const flow = await sapliy.flows.create({
  name: 'Send Receipt on Payment',
  trigger: {
    type: 'event',
    eventType: 'payment.succeeded'
  },
  actions: [
    {
      type: 'webhook',
      url: 'https://api.example.com/receipts',
      method: 'POST'
    }
  ]
});
```

## Trigger Types

### Event Triggers

Start the flow when a specific event is emitted:

```json
{
  "type": "event",
  "eventType": "checkout.completed"
}
```

### Schedule Triggers

Run on a schedule (cron syntax):

```json
{
  "type": "schedule",
  "cron": "0 9 * * 1" // Every Monday at 9 AM
}
```

### Webhook Triggers

Trigger from external HTTP requests:

```json
{
  "type": "webhook",
  "path": "/my-custom-trigger"
}
```

## Logic Nodes

### Conditions

Filter events based on data:

```json
{
  "type": "condition",
  "expression": "event.data.amount > 10000"
}
```

### Approvals

Require human approval before continuing:

```json
{
  "type": "approval",
  "assignees": ["finance@company.com"],
  "timeout": "24h"
}
```

### Delays

Wait before executing the next step:

```json
{
  "type": "delay",
  "duration": "5m"
}
```

## Action Types

### Webhook

Send HTTP request to any URL:

```json
{
  "type": "webhook",
  "url": "https://api.example.com/hook",
  "method": "POST",
  "headers": { "X-Custom": "value" },
  "body": "{{ event.data | json }}"
}
```

### Notification

Send email, SMS, or push notification:

```json
{
  "type": "notification",
  "channel": "email",
  "to": "{{ event.data.customer.email }}",
  "template": "payment-receipt"
}
```

### Ledger Entry

Create an audit log entry:

```json
{
  "type": "ledger",
  "entry": {
    "type": "credit",
    "amount": "{{ event.data.amount }}",
    "description": "Payment received"
  }
}
```

## Flow Variables

Access event data and context using template syntax:

::: v-pre
- `{{ event.type }}` — Event type
- `{{ event.data.amount }}` — Event payload data
- `{{ zone.id }}` — Current zone ID
- `{{ now }}` — Current timestamp
:::

## Debugging Flows

Watch flows execute in real-time:

```bash
sapliy debug listen --verbose
```

Inspect a specific flow run:

```bash
sapliy debug inspect flow_run_abc123
```

## Best Practices

1. **Keep flows focused** — One trigger, one purpose
2. **Use conditions** — Filter events early to avoid unnecessary work
3. **Add timeout handling** — Set reasonable timeouts for webhooks
4. **Test in test mode** — Always validate before deploying to live

## Related

- [Flow Builder](/automation/flow-builder) — Visual editor guide
- [Triggers](/automation/triggers) — Trigger reference
- [Actions](/automation/actions) — Action reference
