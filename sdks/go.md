# Go SDK

## Installation

```bash
go get github.com/sapliy/fintech-sdk-go
```

## Usage

```go
import "github.com/sapliy/fintech-sdk-go"

client := sapliy.NewClient("sk_test_...")
zone, err := client.Zones.Create(ctx, req)
```
