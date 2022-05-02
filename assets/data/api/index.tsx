import { mdiNetworkOutline } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdPlaceholder from "assets/data/api/items/placeholder.md";

export interface APIDescription {
  title: string;
  icon: string;
  docs: string;
}

export const apiItems: GenericObject<APIDescription> = {
  something: {
    title: "Something",
    icon: mdiNetworkOutline,
    docs: mdPlaceholder,
  },
};
