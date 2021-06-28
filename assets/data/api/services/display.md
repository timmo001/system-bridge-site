## GET

Gets Display information. Brightness `-1` means your display is not supported
or does not have a brightness value.

### Example

#### Request

`GET /display`

#### Response

`200 OK`

```json
{
    "displays": [
        {
            "vendor": "(Standard monitor types)",
            "model": "Generic PnP Monitor",
            "main": true,
            "sizeX": null,
            "sizeY": null,
            "resolutionX": 3840,
            "resolutionY": 2160,
            "pixelDepth": 32,
            "currentResX": 3840,
            "currentResY": 2160,
            "positionX": 0,
            "positionY": 0,
            "currentRefreshRate": 59
        }
    ]
}
```
