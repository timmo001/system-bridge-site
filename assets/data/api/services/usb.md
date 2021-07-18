## GET

Gets USB information.

### Example

#### Request

`GET /usb`

#### Response

`200 OK`

```json
{
    "devices": [
        {
            "bus": null,
            "deviceId": "USB\\VID_1532&amp;PID_0A01\\10000010",
            "id": 1,
            "name": "USB Composite Device",
            "type": "Hub",
            "removable": null,
            "vendor": null,
            "manufacturer": "",
            "maxPower": null,
            "serialNumber": null
        }
    ]
}
```
