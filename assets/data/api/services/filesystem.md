## GET

Gets filesystem information.

#### Request

`GET /filesystem`

#### Response

`200 OK`

```json
{
    "blockDevices": {
        "C:": {
            "name": "C:",
            "identifier": "C:",
            "type": "disk",
            "fsType": "ntfs",
            "mount": "C:",
            "size": "145870548992",
            "physical": "Local",
            "uuid": "0A12A3456",
            "label": "",
            "model": "",
            "serial": "0A12A3456",
            "removable": false,
            "protocol": ""
        }
    },
    "diskLayout": {
        "SCSI\\DISK&amp;VEN_AB&amp;PROD_AB123456789-123456789\\5&amp;B1F1234&amp;0&amp;020000": {
            "device": "SCSI\\DISK&amp;VEN_AB&amp;PROD_AB123456789-123456789\\5&amp;B1F1234&amp;0&amp;020000",
            "type": "HD",
            "name": "AB 123456789-123456789",
            "vendor": "(Standard disk drives)",
            "size": 2000396321280,
            "bytesPerSector": 512,
            "totalCylinders": 243201,
            "totalHeads": 255,
            "totalSectors": 3907024065,
            "totalTracks": 62016255,
            "tracksPerCylinder": 255,
            "sectorsPerTrack": 63,
            "firmwareRevision": "80.00A80",
            "serialNum": "AB-123456789",
            "interfaceType": "SATA",
            "smartStatus": "Ok",
            "temperature": null
        }
    },
    "disksIO": null,
    "fsSize": {
        "C:": {
            "fs": "C:",
            "type": "NTFS",
            "size": 145870548992,
            "used": 134322929664,
            "available": 11547619328,
            "use": 92.08,
            "mount": "C:"
        }
    }
}
```
