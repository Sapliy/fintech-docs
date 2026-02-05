# Events

Events are the universal trigger for all automation in Sapliy. Every action in the platform — from payments to notifications — is driven by events.

## Core Concept

```
Event → Flow → Action
```

When an event is emitted, Sapliy:
1. Records the event in the zone's history
2. Matches it against active flows
3. Executes any triggered flows
4. Logs all actions for audit

## Emitting Events

### From SDKs

```js
await sapliy.events.emit('checkout.completed', {
  orderId: 'order_123',
  amount: 9900,
  currency: 'USD',
  customer: { email: 'user@example.com' }
});
```

### From Webhooks

Configure external services to send events to your zone's webhook endpoint:

```
POST https://api.sapliy.io/v1/zones/{zone_id}/events
Authorization: Bearer sk_test_xxx
Content-Type: application/json

{
  "type": "stripe.payment_intent.succeeded",
  "data": { ... }
}
```

### From the CLI

```bash
sapliy trigger payment.created --zone zone_abc --data '{"amount": 5000}'
```

## Event Structure

Every event has this structure:

```json
{
  "id": "evt_abc123",
  "type": "checkout.completed",
  "zoneId": "zone_xyz",
  "data": {
    "orderId": "order_123",
    "amount": 9900
  },
  "createdAt": "2024-01-15T14:30:00Z"
}
```

## Standard Event Types

Sapliy recognizes these standard event types:

### Payment Events
- `payment.created` — Payment intent created
- `payment.succeeded` — Payment completed successfully
- `payment.failed` — Payment failed

### Checkout Events
- `checkout.started` — Customer started checkout
- `checkout.completed` — Checkout completed
- `checkout.abandoned` — Checkout abandoned

### Subscription Events
- `subscription.created` — New subscription
- `subscription.updated` — Plan changed
- `subscription.cancelled` — Subscription ended

### Custom Events

You can emit any custom event type:

```js
await sapliy.events.emit('inventory.low', {
  productId: 'prod_123',
  currentStock: 5
});
```

## Listening to Events

### Real-time via WebSocket

```js
const ws = sapliy.events.stream({ zone: 'zone_abc' });

ws.on('event', (event) => {
  console.log('Received:', event.type, event.data);
});
```

### Via CLI Debug Mode

```bash
sapliy debug listen --zone zone_abc --verbose
```

### In Flows

Create flows in the Flow Builder that trigger on specific event types.

## Event History

Query past events for debugging:

```js
const events = await sapliy.events.list({
  type: 'payment.succeeded',
  limit: 50
});
```

## Related

- [Zones](/concepts/zones) — Event isolation
- [Flows](/concepts/flows) — Triggering automation
- [Flow Builder](/automation/flow-builder) — Visual flow creation
