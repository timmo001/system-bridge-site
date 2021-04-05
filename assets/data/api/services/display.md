## GET

Gets Display information. Brightness `-1` means your display is not supported or does not have a brightness value.

### Example

#### Request

`GET /display`

#### Response

`200 OK`

```json
{
    "brightness": -1,
    "displays": [
        {
            "id": 2528732444,
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 2560,
                "height": 1440
            },
            "workArea": {
                "x": 0,
                "y": 0,
                "width": 2560,
                "height": 1410
            },
            "accelerometerSupport": "unknown",
            "monochrome": false,
            "colorDepth": 24,
            "colorSpace": "{primaries:BT709, transfer:IEC61966_2_1, matrix:RGB, range:FULL}",
            "depthPerComponent": 8,
            "size": {
                "width": 2560,
                "height": 1440
            },
            "displayFrequency": 60,
            "workAreaSize": {
                "width": 2560,
                "height": 1410
            },
            "scaleFactor": 1.5,
            "rotation": 0,
            "internal": false,
            "touchSupport": "unknown"
        }
    ]
}
```

## PUT

Control brightness. You can only do this if your display is supported and have permissions.

### Brightness

Sets brightness percentage.

#### Request

`PUT /display/brightness`

```json
{
    "value": 60
}
```

#### Response

`200 OK`

```json
{
    "brightness": 60,
    "displays": [
        ...
    ]
}
```

### Brightness Down

Lowers brightness.

#### Request

`PUT /display/brightnessDown`

```json
{
    "value": 10
}
```

#### Response

`200 OK`

```json
{
    "brightness": 40,
    "displays": [
        ...
    ]
}
```

### Brightness Down

Raises brightness.

#### Request

`PUT /display/brightnessUp`

```json
{
    "value": 10
}
```

#### Response

`200 OK`

```json
{
    "brightness": 50,
    "displays": [
        ...
    ]
}
```
