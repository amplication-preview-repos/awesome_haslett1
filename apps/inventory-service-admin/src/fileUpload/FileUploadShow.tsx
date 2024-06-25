import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FILEUPLOAD_TITLE_FIELD } from "./FileUploadTitle";

export const FileUploadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadStatus" source="uploadStatus" />
        <ReferenceManyField
          reference="ProgressTracker"
          target="fileUploadId"
          label="ProgressTrackers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentIndex" source="currentIndex" />
            <ReferenceField
              label="fileUpload"
              source="fileupload.id"
              reference="FileUpload"
            >
              <TextField source={FILEUPLOAD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="progressStatus" source="progressStatus" />
            <TextField label="status" source="status" />
            <TextField label="totalItems" source="totalItems" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
