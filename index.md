---
layout: home

hero:
  name: Sapliy Fintech
  text: Event-Driven Automation Platform
  tagline: Build powerful payment flows and business automation with zones, events, and visual workflows
  image:
    src: /hero.svg
    alt: Sapliy
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/quickstart
    - theme: alt
      text: View on GitHub
      link: https://github.com/sapliy/fintech-ecosystem

features:
  - icon: 🏗️
    title: Micro-Tenant Isolation
    details: Hardware-level separation and database-level partitioning ensure your "Live" and "Test" zones never leak data.
  - icon: ⚡
    title: High-Performance Event Bus
    details: Backed by Kafka, Sapliy Normalizes business events from any SDK, CLI, or Provider into a unified stream.
  - icon: ⚙️
    title: Stateless Flow Engine
    details: A Go-based engine executes nodes in parallel sandboxes. Automate complex financial logic with zero-loss durability.
  - icon: 🛡️
    title: Policy-Based Access (PBAC)
    details: Modular security using OPA/Rego and dynamic JSON policies. Enforce fine-grained rules on every API call.
  - icon: 🧩
    title: Extensible Service Catalog
    details: Integrate Stripe, PayPal, and Paymob out of the box. Or build custom Go connectors for your own services.
  - icon: 💻
    title: Developer-First Experience
    details: Use the unified CLI to bridge cloud events to your local server. SDKs for Node, Go, and Python included.
---

## Quick Example

```js
import Sapliy from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

// Emit an event
await sapliy.events.emit("checkout.completed", {
  orderId: "order_123",
  amount: 9900,
  currency: "USD",
});

// This event can trigger flows in the visual builder!
```

## Architecture

```
Organization → Zone → Event → Flow → Action
```

| Concept          | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Organization** | Owns everything, has users/teams/policies      |
| **Zone**         | Isolated automation space with test/live modes |
| **Event**        | The universal trigger (SDK, UI, providers)     |
| **Flow**         | Automation logic connecting events to actions  |

[View System Architecture](https://github.com/sapliy/fintech-ecosystem/blob/main/ARCHITECTURE.md)

<div class="tip custom-block">

Ready to build? Check out [Why Sapliy?](/concepts/comparison) to see how we compare to n8n, then follow the [Quick Start Guide](/getting-started/quickstart) to create your first zone.


</div>
