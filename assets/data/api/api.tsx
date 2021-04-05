import {
  mdiApplicationCog,
  mdiBatteryCharging,
  mdiBluetoothConnect,
  mdiCogs,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiExpansionCard,
  mdiFileDocument,
  mdiFilmstrip,
  mdiHarddisk,
  mdiMemory,
  mdiNetwork,
  mdiSpeakerMultiple,
} from "@mdi/js";

export interface APIServiceDescription {
  title: string;
  icon: string;
  description: string;
  docs: string;
}

export const apiServices: Array<APIServiceDescription> = [
  {
    title: "Audio",
    icon: mdiSpeakerMultiple,
    description: "Play audio, change volume, and get information.",
    docs: "",
  },
  {
    title: "Battery",
    icon: mdiBatteryCharging,
    description: "Battery level, capacity and configuration.",
    docs: "",
  },
  {
    title: "Bluetooth",
    icon: mdiBluetoothConnect,
    description: "BLuetooth configuratoin and devices.",
    docs: "",
  },
  {
    title: "Command",
    icon: mdiCogs,
    description: "Run a command.",
    docs: "",
  },
  {
    title: "CPU",
    icon: mdiCpu64Bit,
    description: "CPU usage, clock speed, and configuration.",
    docs: "",
  },
  {
    title: "Filesystem",
    icon: mdiHarddisk,
    description: "Filesystems and Disk information.",
    docs: "",
  },
  {
    title: "Graphics",
    icon: mdiExpansionCard,
    description: "Graphics card usage and configuration.",
    docs: "",
  },
  {
    title: "Memory",
    icon: mdiMemory,
    description: "Memory usage and configuration.",
    docs: "",
  },
  {
    title: "Network",
    icon: mdiNetwork,
    description: "Networking information.",
    docs: "",
  },
  {
    title: "Open",
    icon: mdiFileDocument,
    description: "Open a URL or file using the default application.",
    docs: "",
  },
  {
    title: "Processes",
    icon: mdiApplicationCog,
    description: "Show proccess information.",
    docs: "",
  },
  {
    title: "System",
    icon: mdiDesktopTower,
    description: "Get system informaiton.",
    docs: "",
  },
  {
    title: "Video",
    icon: mdiFilmstrip,
    description: "Play videos and control playback.",
    docs: "",
  },
];
