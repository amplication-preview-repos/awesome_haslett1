import { SortOrder } from "../../util/SortOrder";

export type FileUploadOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  uploadStatus?: SortOrder;
};
