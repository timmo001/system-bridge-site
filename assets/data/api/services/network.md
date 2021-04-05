## GET

Gets networking information.

#### Request

`GET /network`

#### Response

`200 OK`

```json
{
    "connections": [
        {
            "protocol": "tcp",
            "localAddress": "0.0.0.0",
            "localPort": "135",
            "peerAddress": "0.0.0.0",
            "peerPort": "0",
            "state": "LISTEN",
            "pid": "1212",
            "process": ""
        }
    ],
    "gatewayDefault": "192.168.1.1",
    "interfaceDefault": "Ethernet",
    "interfaces": {
        "Ethernet": {
            "iface": "Ethernet",
            "ifaceName": "Intel(R) I211 Gigabit Network Connection",
            "ip4": "192.168.1.100",
            "ip4subnet": "255.255.255.0",
            "ip6": "ab80::cd80:35ef:12g4:45h1",
            "ip6subnet": "ffff:ffff:ffff:ffff::",
            "mac": "12:1A:22:33:44:B5",
            "internal": false,
            "virtual": false,
            "operstate": "up",
            "type": "wired",
            "duplex": "",
            "mtu": "",
            "speed": 1000,
            "dhcp": "true",
            "dnsSuffix": "local",
            "ieee8021xAuth": "Not defined",
            "ieee8021xState": "Disabled",
            "carrierChanges": 0
        }
    },
    "stats": {
        "Ethernet": {
            "iface": "Ethernet",
            "operstate": "up",
            "rx_bytes": 9079946363,
            "rx_dropped": 2,
            "rx_errors": 1,
            "tx_bytes": 229152023,
            "tx_dropped": 0,
            "tx_errors": 0,
            "rx_sec": 665824.9154081043,
            "tx_sec": 30464.574564661216,
            "ms": 48468
        }
    }
}
```
