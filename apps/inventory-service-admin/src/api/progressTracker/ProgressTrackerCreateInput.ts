import { FileUploadWhereUniqueInput } from "../fileUpload/FileUploadWhereUniqueInput";

export type ProgressTrackerCreateInput = {
  currentIndex?: number | null;
  fileUpload?: FileUploadWhereUniqueInput | null;
  progressStatus?: "Option1" | null;
  status?: "Option1" | null;
  totalItems?: number | null;
};
