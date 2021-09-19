import {
  mdiAndroid,
  mdiBell,
  mdiCogs,
  mdiDesktopTowerMonitor,
  mdiHomeAssistant,
  mdiInformationOutline,
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
      "Access your system's Audio, Battery, Bluetooth, CPU, Display, Filesystems, Graphics, Keyboard, Memory, Networking, OS, Process, System and USB information via the API.",
    icon: mdiInformationOutline,
  },
  {
    title: "Send Commands and Open files and URLs",
    description:
      "Automate your system by sending a command or opening a URL/path via the API.",
    icon: mdiCogs,
  },
  {
    title: "Send Notifications",
    description: "Send system notifications via the API.",
    icon: mdiBell,
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
  {
    title: "Android Companion App",
    description:
      "You can find the Android companion app on the [Play Store](https://play.google.com/store/apps/details?id=dev.timmo.systembridge). The source for this app can be found on [GitHub](https://github.com/timmo001/system-bridge-android-companion).",
    icon: mdiAndroid,
  },
];

export const apiFeatures: Array<Feature> = Object.values(apiServices);
export const apiFeaturesKeys: Array<string> = Object.keys(apiServices);
