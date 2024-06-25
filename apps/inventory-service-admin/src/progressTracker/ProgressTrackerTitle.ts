import { ProgressTracker as TProgressTracker } from "../api/progressTracker/ProgressTracker";

export const PROGRESSTRACKER_TITLE_FIELD = "id";

export const ProgressTrackerTitle = (record: TProgressTracker): string => {
  return record.id?.toString() || String(record.id);
};
