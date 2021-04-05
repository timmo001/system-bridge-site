## GET

Gets OS information.

#### Request

`GET /os`

#### Response

`200 OK`

```json
{
    "platform": "win32",
    "distro": "Microsoft Windows 10 Pro",
    "release": "10.0.19042",
    "codename": "",
    "kernel": "10.0.19042",
    "arch": "x64",
    "hostname": "myhostname",
    "fqdn": "myhostname.local",
    "codepage": "1234",
    "logofile": "windows",
    "serial": "001234-10000-00000-AA123",
    "build": "19042",
    "servicepack": "0.0",
    "uefi": false,
    "hypervisor": true,
    "remoteSession": false,
    "users": [
        {
            "user": "username",
            "tty": "console",
            "date": "2021-01-01",
            "time": "10:00",
            "ip": "",
            "command": ""
        }
    ]
}
```
