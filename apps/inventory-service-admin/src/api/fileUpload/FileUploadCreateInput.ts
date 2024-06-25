import { ProgressTrackerCreateNestedManyWithoutFileUploadsInput } from "./ProgressTrackerCreateNestedManyWithoutFileUploadsInput";

export type FileUploadCreateInput = {
  fileName?: string | null;
  filePath?: string | null;
  progressTrackers?: ProgressTrackerCreateNestedManyWithoutFileUploadsInput;
  status?: "Option1" | null;
  uploadStatus?: "Option1" | null;
};
