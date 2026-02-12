# CLI Reference

The `sapliy` CLI is the primary tool for developers to interact with the Sapliy ecosystem. It allows you to manage zones, debug flows, and bridge cloud events to your local development environment.

## Installation

```bash
# Via NPM
npm install -g @sapliyio/sapliy-cli

# Via Homebrew (macOS)
brew install sapliy/tap/sapliy
```

## Global Commands

- `sapliy login`: Authenticate the CLI with your Sapliy account.
- `sapliy logout`: Clear your local credentials.
- `sapliy version`: Check the current CLI version.

## Zone Management

- `sapliy zones list`: List all zones in your organization.
- `sapliy zones switch <id>`: Set the active zone for following commands.
- `sapliy zones create --name <name> --mode <test|live>`: Create a new zone.

## Event Triggers

Manually emit events to test your flows without writing code.

```bash
# Trigger an event in the active zone
sapliy trigger payment.succeeded --data '{"amount": 5000, "currency": "USD"}'

# Trigger in a specific zone
sapliy trigger user.signup --zone zone_abc123
```

## Debugging & Local Development

The most powerful feature of the CLI is bridging cloud automation to your local machine.

### `sapliy debug listen`
Listen to all incoming events and flow executions in real-time.

```bash
# Watch production events (requires live key)
sapliy debug listen --zone prod --verbose
```

### `sapliy connect`
Bridge events to your local server. This is essential for testing webhooks without using ngrok.

```bash
# Forward all 'checkout' events to your local dev server
sapliy connect --event checkout.* --to http://localhost:3000/webhooks
```

## Template Management

Apply pre-built industry standard flows to your zones.

```bash
# List available templates
sapliy templates list

# Apply a template to a zone
sapliy templates apply financial-fraud --zone dev
```

## Advanced

### `sapliy run`
Execute a local flow definition against the cloud engine (useful for CI/CD).

```bash
sapliy run ./my-flow.json --zone test
```
