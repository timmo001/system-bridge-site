## GET

Gets graphics information.

#### Request

`GET /graphics`

#### Response

`200 OK`

```json
{
    "controllers": [
        {
            "vendor": "NVIDIA",
            "model": "NVIDIA GeForce RTX 3070",
            "bus": "PCI",
            "vram": 8192,
            "vramDynamic": false,
            "subDeviceId": "0x123456789",
            "driverVersion": "465.89",
            "name": "NVIDIA GeForce RTX 3070",
            "pciBus": "00000000:0A:00.0",
            "memoryTotal": 8192,
            "memoryUsed": 2578,
            "memoryFree": 5614,
            "utilizationGpu": 28,
            "utilizationMemory": 18,
            "temperatureGpu": 55,
            "powerDraw": 29.22,
            "powerLimit": 240,
            "clockCore": 255,
            "clockMemory": 810
        }
    ],
    "displays": [
        {
            "vendor": "(Standard monitor types)",
            "model": "Generic PnP Monitor",
            "deviceName": "\\\\.\\DISPLAY1",
            "main": true,
            "builtin": false,
            "connection": "DP",
            "resolutionX": 2560,
            "resolutionY": 1440,
            "sizeX": 60,
            "sizeY": 34,
            "pixelDepth": "32",
            "currentResX": 2560,
            "currentResY": 1440,
            "positionX": 0,
            "positionY": 0
        }
    ]
}
```
