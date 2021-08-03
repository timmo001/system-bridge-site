## GET

Gets CPU information.

### Example

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
    "voltage": "1.35",
    "speed": 3.9,
    "speedMin": 3.9,
    "speedMax": 3.89,
    "governor": "",
    "cores": 16,
    "physicalCores": 8,
    "processors": 1,
    "socket": "AM4",
    "flags": "de pse tsc sep mtrr mca cmov psn clfsh ds mmx",
    "virtualization": true,
    "cache": {
      "l1d": 0,
      "l1i": 0,
      "l2": 4194304,
      "l3": 33554432
    }
  },
  "currentSpeed": {
    "min": 4.19,
    "max": 4.19,
    "avg": 4.19,
    "cores": [
      4.19,
      4.19,
      4.19,
      4.19,
      4.19,
      4.19,
      4.19,
      4.19
    ]
  },
  "temperature": {
    "main": 68.88,
    "cores": [],
    "max": null,
    "socket": [],
    "chipset": null
  },
  "hardwareSensors": [
    {
      "id": "/amdcpu/0/load/1",
      "name": "CPU Core #1",
      "type": "Load",
      "value": 88.8888855
    },
    {
      "id": "/amdcpu/0/load/2",
      "name": "CPU Core #2",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/3",
      "name": "CPU Core #3",
      "type": "Load",
      "value": 44.4444427
    },
    {
      "id": "/amdcpu/0/load/4",
      "name": "CPU Core #4",
      "type": "Load",
      "value": 25
    },
    {
      "id": "/amdcpu/0/load/5",
      "name": "CPU Core #5",
      "type": "Load",
      "value": 11.1111107
    },
    {
      "id": "/amdcpu/0/load/6",
      "name": "CPU Core #6",
      "type": "Load",
      "value": 11.1111107
    },
    {
      "id": "/amdcpu/0/load/7",
      "name": "CPU Core #7",
      "type": "Load",
      "value": 33.3333321
    },
    {
      "id": "/amdcpu/0/load/8",
      "name": "CPU Core #8",
      "type": "Load",
      "value": 25
    },
    {
      "id": "/amdcpu/0/load/9",
      "name": "CPU Core #9",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/10",
      "name": "CPU Core #10",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/11",
      "name": "CPU Core #11",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/12",
      "name": "CPU Core #12",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/13",
      "name": "CPU Core #13",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/14",
      "name": "CPU Core #14",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/15",
      "name": "CPU Core #15",
      "type": "Load",
      "value": 11.1111107
    },
    {
      "id": "/amdcpu/0/load/16",
      "name": "CPU Core #16",
      "type": "Load",
      "value": 0
    },
    {
      "id": "/amdcpu/0/load/0",
      "name": "CPU Total",
      "type": "Load",
      "value": 15.625
    },
    {
      "id": "/amdcpu/0/power/0",
      "name": "Package Power",
      "type": "Power",
      "value": 30.14773
    },
    {
      "id": "/amdcpu/0/clock/1",
      "name": "Core #1",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/0",
      "name": "Core #1",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/1",
      "name": "Core #1 (SMU)",
      "type": "Power",
      "value": 8.07517
    },
    {
      "id": "/amdcpu/0/voltage/2",
      "name": "Core #1 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/2",
      "name": "Core #2",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/1",
      "name": "Core #2",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/2",
      "name": "Core #2 (SMU)",
      "type": "Power",
      "value": 5.81167555
    },
    {
      "id": "/amdcpu/0/voltage/3",
      "name": "Core #2 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/3",
      "name": "Core #3",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/2",
      "name": "Core #3",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/3",
      "name": "Core #3 (SMU)",
      "type": "Power",
      "value": 3.67053175
    },
    {
      "id": "/amdcpu/0/voltage/4",
      "name": "Core #3 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/4",
      "name": "Core #4",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/3",
      "name": "Core #4",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/4",
      "name": "Core #4 (SMU)",
      "type": "Power",
      "value": 5.19992
    },
    {
      "id": "/amdcpu/0/voltage/5",
      "name": "Core #4 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/5",
      "name": "Core #5",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/4",
      "name": "Core #5",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/5",
      "name": "Core #5 (SMU)",
      "type": "Power",
      "value": 5.872851
    },
    {
      "id": "/amdcpu/0/voltage/6",
      "name": "Core #5 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/6",
      "name": "Core #6",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/5",
      "name": "Core #6",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/6",
      "name": "Core #6 (SMU)",
      "type": "Power",
      "value": 3.44112349
    },
    {
      "id": "/amdcpu/0/voltage/7",
      "name": "Core #6 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/7",
      "name": "Core #7",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/6",
      "name": "Core #7",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/7",
      "name": "Core #7 (SMU)",
      "type": "Power",
      "value": 3.639944
    },
    {
      "id": "/amdcpu/0/voltage/8",
      "name": "Core #7 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/clock/8",
      "name": "Core #8",
      "type": "Clock",
      "value": 4192.49
    },
    {
      "id": "/amdcpu/0/factor/7",
      "name": "Core #8",
      "type": "Factor",
      "value": 42
    },
    {
      "id": "/amdcpu/0/power/8",
      "name": "Core #8 (SMU)",
      "type": "Power",
      "value": 7.432827
    },
    {
      "id": "/amdcpu/0/voltage/9",
      "name": "Core #8 VID",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/temperature/2",
      "name": "Core (Tctl/Tdie)",
      "type": "Temperature",
      "value": 68.875
    },
    {
      "id": "/amdcpu/0/temperature/3",
      "name": "CCD1 (Tdie)",
      "type": "Temperature",
      "value": 66.25
    },
    {
      "id": "/amdcpu/0/voltage/0",
      "name": "Core (SVI2 TFN)",
      "type": "Voltage",
      "value": 1.35
    },
    {
      "id": "/amdcpu/0/voltage/1",
      "name": "SoC (SVI2 TFN)",
      "type": "Voltage",
      "value": 1.0875
    },
    {
      "id": "/amdcpu/0/clock/0",
      "name": "Bus Speed",
      "type": "Clock",
      "value": 99.8212
    }
  ]
}
```
