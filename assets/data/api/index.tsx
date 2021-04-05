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

import { GenericObject } from "components/Types";
import mdAudio from "assets/data/api/services/audio.md";

export interface APIServiceDescription {
  title: string;
  icon: string;
  description: string;
  docs: string;
}

export const apiServices: GenericObject<APIServiceDescription> = {
  audio: {
    title: "Audio",
    icon: mdiSpeakerMultiple,
    description: "Play audio, change volume, and get information.",
    docs: mdAudio,
  },
  battery: {
    title: "Battery",
    icon: mdiBatteryCharging,
    description: "Battery level, capacity and configuration.",
    docs: "",
  },
  bluetooth: {
    title: "Bluetooth",
    icon: mdiBluetoothConnect,
    description: "Bluetooth configuratoin and devices.",
    docs: "",
  },
  command: {
    title: "Command",
    icon: mdiCogs,
    description: "Run a command.",
    docs: "",
  },
  cpu: {
    title: "CPU",
    icon: mdiCpu64Bit,
    description: "CPU usage, clock speed, and configuration.",
    docs: "",
  },
  filesystem: {
    title: "Filesystem",
    icon: mdiHarddisk,
    description: "Filesystems and Disk information.",
    docs: "",
  },
  graphics: {
    title: "Graphics",
    icon: mdiExpansionCard,
    description: "Graphics card usage and configuration.",
    docs: "",
  },
  memory: {
    title: "Memory",
    icon: mdiMemory,
    description: "Memory usage and configuration.",
    docs: "",
  },
  network: {
    title: "Network",
    icon: mdiNetwork,
    description: "Networking information.",
    docs: "",
  },
  open: {
    title: "Open",
    icon: mdiFileDocument,
    description: "Open a URL or file using the default application.",
    docs: "",
  },
  processes: {
    title: "Processes",
    icon: mdiApplicationCog,
    description: "Show proccess information.",
    docs: "",
  },
  system: {
    title: "System",
    icon: mdiDesktopTower,
    description: "Get system informaiton.",
    docs: "",
  },
  video: {
    title: "Video",
    icon: mdiFilmstrip,
    description: "Play videos and control playback.",
    docs: "",
  },
};
