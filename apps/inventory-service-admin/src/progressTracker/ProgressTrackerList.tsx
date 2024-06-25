import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FILEUPLOAD_TITLE_FIELD } from "../fileUpload/FileUploadTitle";

export const ProgressTrackerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgressTrackers"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
