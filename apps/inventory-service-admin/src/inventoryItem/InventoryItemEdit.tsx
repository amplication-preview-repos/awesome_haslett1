import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { SubCategoryTitle } from "../subCategory/SubCategoryTitle";

export const InventoryItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="aprice" source="aprice" />
        <TextInput label="bcode" source="bcode" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="depart" source="depart" />
        <TextInput label="descript" source="descript" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="prodid" source="prodid" />
        <NumberInput step={1} label="qtyonhand" source="qtyonhand" />
        <ReferenceInput
          source="subCategory.id"
          reference="SubCategory"
          label="subCategory"
        >
          <SelectInput optionText={SubCategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
