import {
  mdiCogs,
  mdiDesktopTowerMonitor,
  mdiFilmstrip,
  mdiInformationOutline,
  mdiSpeakerMultiple,
} from "@mdi/js";
import { apiServices } from "./api";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const userFeatures: Array<Feature> = [
  {
    title: "System Information",
    description:
      "Access your system's Audio, Battery, Bluetooth, CPU, Filesystems, Graphics, Memory, Networking, OS, and Process information via the API.",
    icon: mdiInformationOutline,
  },
  {
    title: "Send Commands and Notifications",
    description:
      "Automate your system by sending a command, opening a URL or path, or sending system notifications via the API.",
    icon: mdiCogs,
  },
  {
    title: "Audio Player and Controls",
    description:
      "Play music or sounds and change the volume of your device via the API.",
    icon: mdiSpeakerMultiple,
  },
  {
    title: "Video Player",
    description: "Play local or hosted videos on your device via the API.",
    icon: mdiFilmstrip,
  },
  {
    title: "Cross-Platform",
    description: "Compatible with Windows, Mac and Linux.",
    icon: mdiDesktopTowerMonitor,
  },
];

export const apiFeatures: Array<Feature> = Object.values(apiServices);
