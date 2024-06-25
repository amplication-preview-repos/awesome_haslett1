import { ProgressTracker } from "../progressTracker/ProgressTracker";

export type FileUpload = {
  createdAt: Date;
  fileName: string | null;
  filePath: string | null;
  id: string;
  progressTrackers?: Array<ProgressTracker>;
  status?: "Option1" | null;
  updatedAt: Date;
  uploadStatus?: "Option1" | null;
};
