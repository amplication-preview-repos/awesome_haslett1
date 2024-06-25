import { FileUpload as TFileUpload } from "../api/fileUpload/FileUpload";

export const FILEUPLOAD_TITLE_FIELD = "fileName";

export const FileUploadTitle = (record: TFileUpload): string => {
  return record.fileName?.toString() || String(record.id);
};
