import { FileUploadWhereUniqueInput } from "../fileUpload/FileUploadWhereUniqueInput";

export type ProgressTrackerUpdateInput = {
  currentIndex?: number | null;
  fileUpload?: FileUploadWhereUniqueInput | null;
  progressStatus?: "Option1" | null;
  status?: "Option1" | null;
  totalItems?: number | null;
};
