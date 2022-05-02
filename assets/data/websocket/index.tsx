import { mdiDatabaseSearch, mdiDataMatrix, mdiPen } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdPlaceholder from "assets/data/websocket/items/placeholder.md";

export interface WebsocketDescription {
  title: string;
  icon: string;
  docs: string;
}

export const websocketItems: GenericObject<WebsocketDescription> = {
  registerListener: {
    title: "Registering as a Listener",
    icon: mdiPen,
    docs: mdPlaceholder,
  },
  getData: {
    title: "Requesting Data",
    icon: mdiDatabaseSearch,
    docs: mdPlaceholder,
  },
  receivingData: {
    title: "Receiving Data",
    icon: mdiDataMatrix,
    docs: mdPlaceholder,
  },
};
