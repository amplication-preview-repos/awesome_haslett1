import { FileUpload } from "../fileUpload/FileUpload";

export type ProgressTracker = {
  createdAt: Date;
  currentIndex: number | null;
  fileUpload?: FileUpload | null;
  id: string;
  progressStatus?: "Option1" | null;
  status?: "Option1" | null;
  totalItems: number | null;
  updatedAt: Date;
};
