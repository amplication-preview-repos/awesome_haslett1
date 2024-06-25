import { SortOrder } from "../../util/SortOrder";

export type ProgressTrackerOrderByInput = {
  createdAt?: SortOrder;
  currentIndex?: SortOrder;
  fileUploadId?: SortOrder;
  id?: SortOrder;
  progressStatus?: SortOrder;
  status?: SortOrder;
  totalItems?: SortOrder;
  updatedAt?: SortOrder;
};
