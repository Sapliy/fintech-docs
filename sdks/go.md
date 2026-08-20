# Go SDK

## Installation

```bash
go get github.com/sapliy/sapliy-sdk-go
```

## Usage

```go
import "github.com/sapliy/sapliy-sdk-go"

client := sapliy.NewClient("sk_test_...")
zone, err := client.Zones.Create(ctx, "org_abc123", "My Zone", "test", "")
```
