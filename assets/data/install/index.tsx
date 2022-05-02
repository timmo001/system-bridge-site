import { mdiNetworkOutline } from "@mdi/js";

import { GenericObject } from "components/Types";
import { mdPlaceholder } from "assets/data/install/items/placeholder.md";

export interface InstallDescription {
  title: string;
  icon: string;
  description: string;
  docs: string;
}

export const installItems: GenericObject<InstallDescription> = {
  something: {
    title: "Something",
    icon: mdiNetworkOutline,
    description: "Placeholder.",
    docs: mdPlaceholder,
  },
};
