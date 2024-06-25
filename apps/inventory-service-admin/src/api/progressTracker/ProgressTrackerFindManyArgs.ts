import { ProgressTrackerWhereInput } from "./ProgressTrackerWhereInput";
import { ProgressTrackerOrderByInput } from "./ProgressTrackerOrderByInput";

export type ProgressTrackerFindManyArgs = {
  where?: ProgressTrackerWhereInput;
  orderBy?: Array<ProgressTrackerOrderByInput>;
  skip?: number;
  take?: number;
};
