import { mdiDataMatrix } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdReceivingData from "assets/data/mqtt/receiving-data.md";

export interface MqttDescription {
  title: string;
  icon: string;
  docs: string;
}

export const mqttData: GenericObject<MqttDescription> = {
  receivingData: {
    title: "Receiving Data",
    icon: mdiDataMatrix,
    docs: mdReceivingData,
  },
};
