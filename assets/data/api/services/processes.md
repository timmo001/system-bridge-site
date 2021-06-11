## GET

Gets system information.

### Example: Get All

#### Request

`GET /processes`

#### Response

`200 OK`

```json
{
    "all": 380,
    "running": 0,
    "blocked": 0,
    "sleeping": 0,
    "unknown": 380,
    "list": [
        {
            "pid": 9660,
            "parentPid": 38700,
            "name": "Spotify.exe",
            "cpu": 0.0038981035726119244,
            "cpuu": 0.0019490517863059622,
            "cpus": 0.0019490517863059622,
            "pmem": 0.7410063744646053,
            "priority": 8,
            "memVsz": 97600,
            "memRss": 123816,
            "nice": 0,
            "started": "2021-04-05 11:10:10",
            "state": "unknown",
            "tty": "",
            "user": "",
            "command": "\"C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe\"",
            "path": "C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe",
            "params": ""
        }
    ],
    "load": {
        "avgLoad": 0,
        "currentLoad": 11.681666793786388,
        "currentLoadUser": 7.30760430173137,
        "currentLoadSystem": 4.195205044110543,
        "currentLoadNice": 0,
        "currentLoadIdle": 88.31833320621362,
        "currentLoadIrq": 0.1788574479444741,
        "rawCurrentLoad": 91895,
        "rawCurrentLoadUser": 57486,
        "rawCurrentLoadSystem": 33002,
        "rawCurrentLoadNice": 0,
        "rawCurrentLoadIdle": 694765,
        "rawCurrentLoadIrq": 1407,
        "cpus": [
            {
                "load": 13.416161616161615,
                "loadUser": 5.965656565656566,
                "loadSystem": 6.597979797979798,
                "loadNice": 0,
                "loadIdle": 86.58383838383838,
                "loadIrq": 0.8525252525252526,
                "rawLoad": 6641,
                "rawLoadUser": 2953,
                "rawLoadSystem": 3266,
                "rawLoadNice": 0,
                "rawLoadIdle": 42859,
                "rawLoadIrq": 422
            }
        ]
    }
}
```

### Example: Get Spotify

You can add ?exact=true to find the exact match. This is useful when
processes use similar names.

#### Request

`GET /processes/spotify.exe`

`GET /processes/spotify.exe?exact=true`

#### Response

`200 OK`

```json
[
    {
        "pid": 9660,
        "parentPid": 38700,
        "name": "Spotify.exe",
        "cpu": 0.0038981035726119244,
        "cpuu": 0.0019490517863059622,
        "cpus": 0.0019490517863059622,
        "pmem": 0.7410063744646053,
        "priority": 8,
        "memVsz": 97600,
        "memRss": 123816,
        "nice": 0,
        "started": "2021-04-05 11:10:10",
        "state": "unknown",
        "tty": "",
        "user": "",
        "command": "\"C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe\"",
        "path": "C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe",
        "params": ""
    }
]
```

