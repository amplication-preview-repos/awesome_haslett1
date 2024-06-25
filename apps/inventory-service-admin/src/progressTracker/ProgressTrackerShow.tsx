import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { FILEUPLOAD_TITLE_FIELD } from "../fileUpload/FileUploadTitle";

export const ProgressTrackerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
