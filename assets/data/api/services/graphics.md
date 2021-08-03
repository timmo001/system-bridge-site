## GET

Gets graphics information.

### Example

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
      "subDeviceId": "0x40691458",
      "driverVersion": "471.41",
      "name": "NVIDIA GeForce RTX 3070",
      "pciBus": "00000000:0A:00.0",
      "fanSpeed": 46,
      "memoryTotal": 8192,
      "memoryUsed": 2929,
      "memoryFree": 5263,
      "utilizationGpu": 14,
      "utilizationMemory": 12,
      "temperatureGpu": 54,
      "powerDraw": 41.6,
      "powerLimit": 268.8,
      "clockCore": 1016,
      "clockMemory": 4995
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
    },
    {
      "vendor": "",
      "model": "",
      "deviceName": "\\\\.\\DISPLAY2",
      "main": false,
      "builtin": false,
      "connection": "DP",
      "resolutionX": 2560,
      "resolutionY": 1440,
      "sizeX": 60,
      "sizeY": 34,
      "pixelDepth": "32",
      "currentResX": 2560,
      "currentResY": 1440,
      "positionX": 2560,
      "positionY": 0
    }
  ],
  "hardwareSensors": [
    {
      "id": "/gpu-nvidia/0/temperature/0",
      "name": "GPU Core",
      "type": "Temperature",
      "value": 54
    },
    {
      "id": "/gpu-nvidia/0/clock/0",
      "name": "GPU Core",
      "type": "Clock",
      "value": 960.000061
    },
    {
      "id": "/gpu-nvidia/0/clock/1",
      "name": "GPU Memory",
      "type": "Clock",
      "value": 5000.996
    },
    {
      "id": "/gpu-nvidia/0/clock/2",
      "name": "GPU Shader",
      "type": "Clock",
      "value": 0
    },
    {
      "id": "/gpu-nvidia/0/load/0",
      "name": "GPU Core",
      "type": "Load",
      "value": 16
    },
    {
      "id": "/gpu-nvidia/0/load/1",
      "name": "GPU Memory Controller",
      "type": "Load",
      "value": 12
    },
    {
      "id": "/gpu-nvidia/0/load/2",
      "name": "GPU Video Engine",
      "type": "Load",
      "value": 57
    },
    {
      "id": "/gpu-nvidia/0/load/4",
      "name": "GPU Bus",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/gpu-nvidia/0/control/0",
      "name": "GPU Fan",
      "type": "Control",
      "value": 45
    },
    {
      "id": "/gpu-nvidia/0/smalldata/3",
      "name": "GPU Memory Total",
      "type": "SmallData",
      "value": 8192
    },
    {
      "id": "/gpu-nvidia/0/smalldata/2",
      "name": "GPU Memory Used",
      "type": "SmallData",
      "value": 2880.33984
    },
    {
      "id": "/gpu-nvidia/0/smalldata/1",
      "name": "GPU Memory Free",
      "type": "SmallData",
      "value": 5311.66
    },
    {
      "id": "/gpu-nvidia/0/load/3",
      "name": "GPU Memory",
      "type": "Load",
      "value": 35.1604
    }
  ]
}
```
