
{% authentication_all %}

## GET

Gets battery information.

#### Request

`GET /battery`

#### Response

`200 OK`

```json
{
    "hasBattery": false,
    "cycleCount": 0,
    "isCharging": false,
    "designedCapacity": 0,
    "maxCapacity": 0,
    "currentCapacity": 0,
    "voltage": 0,
    "capacityUnit": "",
    "percent": 0,
    "timeRemaining": null,
    "acConnected": true,
    "type": "",
    "model": "",
    "manufacturer": "",
    "serial": ""
}
```
