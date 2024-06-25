import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProgressTrackerListRelationFilter } from "../progressTracker/ProgressTrackerListRelationFilter";

export type FileUploadWhereInput = {
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  progressTrackers?: ProgressTrackerListRelationFilter;
  status?: "Option1";
  uploadStatus?: "Option1";
};
