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

## Planned Structure

```
docs/
├── getting-started/
│   ├── quickstart.md
│   ├── authentication.md
│   └── test-vs-live.md
├── concepts/
│   ├── comparison.md    # Sapliy vs n8n
│   ├── features.md      # Core Technical Features
│   ├── security.md      # PBAC & Access Control
│   ├── organizations.md
│   ├── zones.md
│   ├── events.md
│   └── flows.md
├── sdks/
│   ├── node.md
│   ├── python.md
│   └── go.md
├── api/
│   ├── payments.md
│   ├── wallets.md
│   ├── ledger.md
│   └── webhooks.md
├── automation/
│   ├── flow-builder.md
│   ├── triggers.md
│   ├── actions.md
│   └── integrations.md  # 3rd Party Integrations
└── reference/
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

Key concepts: Organization → Zone → Event → Flow → Action.

See [ARCHITECTURE.md](https://github.com/sapliy/fintech-ecosystem/blob/main/ARCHITECTURE.md) for details.

## License

MIT © [Sapliy](https://github.com/sapliy)
