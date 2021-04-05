## GET

Gets CPU information.

#### Request

`GET /cpu`

#### Response

`200 OK`

```json
{
    "cache": {
        "l1d": 0,
        "l1i": 0,
        "l2": 4194304,
        "l3": 33554432
    },
    "cpu": {
        "manufacturer": "AMD",
        "brand": "Ryzen 7 3800X 8-Core Processor",
        "vendor": "AuthenticAMD",
        "family": "23",
        "model": "123",
        "stepping": "0",
        "revision": "12345",
        "voltage": "",
        "speed": 3.9,
        "speedMin": 3.9,
        "speedMax": 3.89,
        "governor": "",
        "cores": 16,
        "physicalCores": 8,
        "processors": 1,
        "socket": "AM4",
        "flags": "de pse tsc sep mtrr mca cmov psn clfsh ds mmx fxsr sse sse2 ss htt tm ia64 pbe",
        "virtualization": false,
        "cache": {
            "l1d": 0,
            "l1i": 0,
            "l2": 4194304,
            "l3": 33554432
        }
    },
    "currentSpeed": {
        "min": 3.89,
        "max": 3.89,
        "avg": 3.89,
        "cores": [
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89,
            3.89
        ]
    },
    "temperature": {
        "main": null,
        "cores": [],
        "max": null,
        "socket": [],
        "chipset": null
    }
}
```
