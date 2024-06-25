import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileUploadTitle } from "../fileUpload/FileUploadTitle";

export const ProgressTrackerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
