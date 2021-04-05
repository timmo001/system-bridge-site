## GET

Gets memory information.

#### Request

`GET /memory`

#### Response

`200 OK`

```json
{
    "total": 17110188032,
    "free": 4164755456,
    "used": 12945432576,
    "active": 12945432576,
    "available": 4164755456,
    "buffers": 0,
    "cached": 0,
    "slab": 0,
    "buffcache": 0,
    "swaptotal": 18656264192,
    "swapused": 1351614464,
    "swapfree": 17304649728,
    "layout": [
        {
            "size": 8589934592,
            "bank": "BANK 1",
            "type": "Unknown",
            "ecc": false,
            "clockSpeed": 3200,
            "formFactor": "DIMM",
            "manufacturer": "G-Skill",
            "partNum": "A1-123456-1ABCD",
            "serialNum": "12345678",
            "voltageConfigured": 1.2,
            "voltageMin": 1.2,
            "voltageMax": 1.2
        }
    ]
}
```
