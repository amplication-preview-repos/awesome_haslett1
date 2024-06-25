import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileUploadTitle } from "../fileUpload/FileUploadTitle";

export const ProgressTrackerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="currentIndex" source="currentIndex" />
        <ReferenceInput
          source="fileUpload.id"
          reference="FileUpload"
          label="fileUpload"
        >
          <SelectInput optionText={FileUploadTitle} />
        </ReferenceInput>
        <SelectInput
          source="progressStatus"
          label="progressStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="totalItems" source="totalItems" />
      </SimpleForm>
    </Edit>
  );
};
