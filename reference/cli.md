# CLI Reference

The `sapliy` CLI is the primary tool for developers to interact with the Sapliy ecosystem. It allows you to manage zones, debug flows, and bridge cloud events to your local development environment.

## Installation

```bash
# Via NPM
npm install -g @sapliyio/sapliy-cli

# Via Homebrew (macOS)
brew install sapliy/tap/sapliy

# From Source (Local)
# Navigate to sapliy-cli directory
make build
sudo make install
```

## Global Commands

- `sapliy login`: Authenticate the CLI with your Sapliy account.
- `sapliy logout`: Clear your local credentials.
- `sapliy version`: Check the current CLI version.

## Zone Management (`sapliy zones`)

Manage the logical isolation of your environments.

- `list`: List all zones in your organization.
- `create --name <name> [--mode test|live]`: Create a new zone (defaults to `test`).
- `switch <id>`: Set the active zone for all subsequent commands.

## Debugging & Inspection (`sapliy debug`)

Monitor automation flows as they execute in real-time.

### `listen`
Stream events in real-time via WebSocket.
- **Flags**:
  - `-z, --zone <id>`: Filter events by a specific zone.
  - `-v, --verbose`: Show full event JSON payloads.
  - `-f, --filter <type>`: Substring filter for event types (e.g., `payment.*`).

### `inspect <flow_execution_id>`
Get detailed logs and node transitions for a specific execution.

### `repl`
Start an interactive shell to test events and zones.
- **Internal Commands**:
  - `emit <type> [json]`: Manually trigger an event.
  - `zone <id>`: Switch the active zone context within the REPL.
  - `status`: Show current API key and endpoint configuration.

## Event Connectivity (`sapliy connect`)

Bridge the Sapliy Event Bus to your local machine.

- `sapliy connect [url]`: Connect to a specific WebSocket endpoint (defaults to `ws://localhost:8080/ws`).
- **Flags**:
  - `-k, --key <api_key>`: Provide an API key for authentication.
  - `-t, --trigger <payload>`: Send a JSON event payload immediately upon connection.

## Webhook Management (`sapliy webhooks`)

Monitor and resend external webhook deliveries.

- `list [--limit <n>] [--status <type>] [--zone <id>]`: List recent webhook delivery attempts.
- `inspect <event_id>`: View the full request/response cycle for a specific delivery.
- `replay <event_id> [--force]`: Resend a specific webhook to its endpoint.
- `replay-failed [--since <time>] [--dry-run]`: Bulk replay failed webhooks from the last `1h`, `24h`, etc.

## Zone Templates (`sapliy templates`)

Apply pre-configured industry standards to your zones.

- `list`: Browse available templates (e.g., `e-commerce`, `saas-billing`).
- `show <name>`: Inspect the flows, webhooks, and events included in a template.
- `apply <name> [--zone-name <name>] [--mode <mode>] [--dry-run]`: Setup a new zone with the template configuration.

## Flow Execution (`sapliy run`)

- `sapliy run <file.json> [--zone <id>]`: Execute a local flow definition against the cloud engine.
