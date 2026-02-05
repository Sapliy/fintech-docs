# Zones

Zones are the core isolation primitive in Sapliy. Think of them as separate environments where you can safely build and test automation flows.

## What is a Zone?

A Zone combines:

- **API Keys** — Separate secret and publishable keys
- **Mode** — Either `test` or `live`
- **Flows** — Automation workflows scoped to the zone
- **Events** — Event history and logs
- **Configuration** — Webhook endpoints, policies, settings

## Test vs Live Modes

Every zone operates in one of two modes:

| | Test Mode | Live Mode |
|---|-----------|-----------|
| **Secret Key** | `sk_test_...` | `sk_live_...` |
| **Publishable Key** | `pk_test_...` | `pk_live_...` |
| **Logs** | Separate | Separate |
| **Events** | Test data only | Production data |
| **Flows** | Can share or separate | Can share or separate |

::: tip Best Practice
Always develop and test in test mode first. Deploy to live mode only when you're confident in your flows.
:::

## Creating Zones

```js
const zone = await sapliy.zones.create({
  name: 'Production Checkout',
  mode: 'live'
});
```

Response:
```json
{
  "id": "zone_abc123",
  "name": "Production Checkout",
  "mode": "live",
  "secretKey": "sk_live_xxxx",
  "publishableKey": "pk_live_xxxx",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Zone Templates

Use templates to quickly set up zones with pre-configured flows:

```bash
sapliy templates apply e-commerce --zone-name "My Store"
```

Available templates:
- `e-commerce` — Checkout, payments, order tracking
- `saas-billing` — Subscriptions, invoicing
- `marketplace` — Multi-vendor, split payments
- `fintech-basic` — Payments with fraud checks
- `automation-hub` — Event automation without payments

## Switching Zones

### In the CLI

```bash
sapliy zones switch zone_abc123
```

### In Code

```js
const sapliy = new Sapliy('sk_test_xxx', {
  zone: 'zone_abc123'
});
```

## Zone-Scoped Events

Events are always scoped to a zone. This means:

1. Events in test zones don't affect live zones
2. Flows only trigger from events in their zone
3. Logs and history are isolated

```js
// This event only triggers flows in the zone associated with the API key
await sapliy.events.emit('payment.completed', { amount: 1000 });
```

## Related

- [Events](/concepts/events) — How events work
- [Flows](/concepts/flows) — Building automation
- [Test vs Live](/getting-started/test-vs-live) — Deployment guide
