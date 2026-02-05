# API Overview

The Sapliy API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Base URL

```
https://api.sapliy.io/v1
```

## Authentication

Authenticate using your API key via Bearer Auth:

```bash
curl https://api.sapliy.io/v1/zones \
  -H "Authorization: Bearer sk_test_..."
```
