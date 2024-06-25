import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FileUploadWhereUniqueInput } from "../fileUpload/FileUploadWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProgressTrackerWhereInput = {
  currentIndex?: IntNullableFilter;
  fileUpload?: FileUploadWhereUniqueInput;
  id?: StringFilter;
  progressStatus?: "Option1";
  status?: "Option1";
  totalItems?: IntNullableFilter;
};
