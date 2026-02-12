# Sapliy Fintech Documentation

[![Docs](https://img.shields.io/badge/docs-sapliy.io-blue)](https://docs.sapliy.io)

Official documentation site for the Sapliy Fintech Ecosystem — powered by [VitePress](https://vitepress.dev).

## Vision

A comprehensive documentation hub covering:

- **Getting Started** — Quick start guides for each SDK
- **Core Concepts** — Organizations, Zones, Events, Flows
- **API Reference** — Complete REST/gRPC documentation
- **Tutorials** — Step-by-step walkthroughs
- **Examples** — Real-world integrations

## Project Structure

```
docs/
├── getting-started/
│   ├── quickstart.md
│   ├── authentication.md
│   └── test-vs-live.md
├── concepts/
│   ├── architecture.md  # System Design & Microservices
│   ├── comparison.md    # Sapliy vs n8n / Zapier
│   ├── features.md      # Core Platform Features
│   ├── security.md      # Security & Access Control
│   ├── organizations.md
│   ├── zones.md
│   ├── events.md
│   └── flows.md
├── guides/
│   ├── integrations.md  # 3rd Party Connectors
│   ├── pbac-config.md   # Configuring OPA/JSON Policies
│   └── first-flow.md    # Step-by-step Tutorial
├── sdks/
│   ├── node.md
│   ├── python.md
│   └── go.md
├── api/
│   ├── overview.md
│   ├── payments.md
│   ├── wallets.md
│   ├── ledger.md
│   └── webhooks.md
└── reference/
    ├── cli.md          # Sapliy CLI Command Ref
    ├── nodes.md        # Automation Nodes Ref
    ├── errors.md
    └── rate-limits.md
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build
```

## Contributing

Documentation contributions are welcome. See [CONTRIBUTING.md](https://github.com/Sapliy/fintech-ecosystem/blob/main/CONTRIBUTING.md).

## Architecture

Sapliy is built as a high-performance event-driven ecosystem. 

- **Concepts**: [Architecture Overview](/concepts/architecture)
- **Deep Dive**: [ARCHITECTURE.md](https://github.com/sapliy/fintech-ecosystem/blob/main/ARCHITECTURE.md)


## License

MIT © [Sapliy](https://github.com/sapliy)
