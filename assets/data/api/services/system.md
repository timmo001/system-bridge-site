## GET

Gets system information.

### Example

#### Request

`GET /system`

#### Response

`200 OK`

```json
{
    "baseboard": {
        "manufacturer": "ASUSTeK COMPUTER INC.",
        "model": "ROG STRIX X370-F GAMING",
        "version": "Rev X.0x",
        "serial": "123454367765754",
        "assetTag": "",
        "memMax": 134217728,
        "memSlots": 4
    },
    "bios": {
        "vendor": "American Megatrends Inc.",
        "version": "ALASKA - 123456",
        "releaseDate": "2021-01-10",
        "revision": ""
    },
    "chassis": {
        "manufacturer": "Default string",
        "model": "",
        "type": "Desktop",
        "version": "Default string",
        "serial": "Default string",
        "assetTag": "",
        "sku": ""
    },
    "system": {
        "manufacturer": "System manufacturer",
        "model": "System Product Name",
        "version": "System Version",
        "serial": "System Serial Number",
        "uuid": "001234-10000-00000-AA123",
        "sku": "SKU",
        "virtual": false
    },
    "uuid": {
        "os": "001234-10000-00000-AA123213-3343423",
        "hardware": "001234-10000-00000-AA123",
        "macs": [
            "12:1A:22:33:44:B5"
        ]
    }
}
```
