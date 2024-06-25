import { ProgressTrackerUpdateManyWithoutFileUploadsInput } from "./ProgressTrackerUpdateManyWithoutFileUploadsInput";

export type FileUploadUpdateInput = {
  fileName?: string | null;
  filePath?: string | null;
  progressTrackers?: ProgressTrackerUpdateManyWithoutFileUploadsInput;
  status?: "Option1" | null;
  uploadStatus?: "Option1" | null;
};
