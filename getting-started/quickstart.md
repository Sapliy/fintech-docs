# Quick Start

Get up and running with Sapliy in under 5 minutes.

## Prerequisites

- Node.js 18+ (or Python 3.11+, or Go 1.21+)
- A Sapliy account (sign up at [sapliy.io](https://sapliy.io))

## 1. Install the SDK

::: code-group

```bash [npm]
npm install @sapliyio/fintech
```

```bash [pip]
pip install sapliyio_fintech
```

```bash [go]
go get github.com/sapliy/fintech-sdk-go
```

:::

## 2. Get Your API Keys

After creating an account, you'll have access to:

- **Test Secret Key** (`sk_test_...`) — Use in development
- **Live Secret Key** (`sk_live_...`) — Use in production
- **Publishable Keys** (`pk_test_...`, `pk_live_...`) — Use in frontend

::: warning
Never expose secret keys in client-side code. Use publishable keys for frontend.
:::

## 3. Create Your First Zone

Zones are isolated environments for your automation flows.

::: code-group

```js [Node.js]
import Sapliy from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

const zone = await sapliy.zones.create({
  name: "My First Zone",
  mode: "test",
});

console.log("Zone created:", zone.id);
```

```python [Python]
import sapliy

client = sapliy.Client('sk_test_xxx')

zone = client.zones.create(
    name='My First Zone',
    mode='test'
)

print(f'Zone created: {zone.id}')
```

```go [Go]
import fintech "github.com/sapliy/fintech-sdk-go"

client := fintech.NewClient("sk_test_xxx")

zone, err := client.Zones.Create(ctx, &fintech.CreateZoneRequest{
    Name: "My First Zone",
    Mode: "test",
})

fmt.Println("Zone created:", zone.ID)
```

:::

## 4. Emit an Event

Events are the triggers for all automation flows.

```js
await sapliy.events.emit("checkout.completed", {
  orderId: "order_abc123",
  amount: 4999,
  currency: "USD",
  customer: {
    email: "customer@example.com",
  },
});
```

## 5. Build a Flow

1. Open the [Flow Builder](https://app.sapliy.io/flows)
2. Create a new flow
3. Add a trigger: "checkout.completed"
4. Add an action: Send email notification
5. Deploy the flow

Now every `checkout.completed` event will trigger your automation!

## Next Steps

- [Learn about Zones](/concepts/zones) — Understand test/live isolation
- [Explore the SDKs](/sdks/node) — Full API reference
- [Build Flows](/automation/flow-builder) — Create visual automations
- [Handle Webhooks](/api/webhooks) — Receive external events
