import { CustomColors } from "../colors";
import { Status } from "../types";

export const GroupedStatusColorConfig: Record<
  Status,
  {
    connectorColor: string;
    dotColor: string;
  }
> = {
  [Status.COMPLETED]: {
    connectorColor: CustomColors.BRAND_BLUE_300,
    dotColor: CustomColors.BRAND_BLUE_300,
  },
  [Status.UPCOMING]: {
    connectorColor: CustomColors.BLACK_100,
    dotColor: CustomColors.BLACK_100,
  },
  [Status.ONGOING]: {
    connectorColor: CustomColors.BRAND_BLUE_300,
    dotColor: CustomColors.ALERT_400,
  },
  [Status.PENDING]: {
    connectorColor: CustomColors.BLACK_100,
    dotColor: CustomColors.BLACK_100,
  },
};
