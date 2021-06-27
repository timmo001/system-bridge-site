import {
  mdiCogs,
  mdiDesktopTowerMonitor,
  mdiFilmstrip,
  mdiHomeAssistant,
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
      "Access your system's Audio, Battery, Bluetooth, CPU, Display, Filesystems, Graphics, Memory, Media, Networking, OS, Process and System information via the API.",
    icon: mdiInformationOutline,
  },
  {
    title: "Send Commands and Notifications",
    description:
      "Automate your system by sending a command, opening a URL or path, or sending system notifications via the API.",
    icon: mdiCogs,
  },
  {
    title: "Cross-Platform",
    description: "Compatible with Windows, Mac and Linux.",
    icon: mdiDesktopTowerMonitor,
  },
  {
    title: "Integrated with Home Assistant",
    description:
      "Interact with your Bridges using [Home Assistant](https://www.home-assistant.io/integrations/system_bridge).",
    icon: mdiHomeAssistant,
  },
];

export const apiFeatures: Array<Feature> = Object.values(apiServices);
export const apiFeaturesKeys: Array<string> = Object.keys(apiServices);
