import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { SUBCATEGORY_TITLE_FIELD } from "./SubCategoryTitle";

export const SubCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InventoryItem"
          target="subCategoryId"
          label="InventoryItems"
        >
          <Datagrid rowClick="show">
            <TextField label="aprice" source="aprice" />
            <TextField label="bcode" source="bcode" />
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="depart" source="depart" />
            <TextField label="descript" source="descript" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="name" source="name" />
            <TextField label="prodid" source="prodid" />
            <TextField label="qtyonhand" source="qtyonhand" />
            <ReferenceField
              label="subCategory"
              source="subcategory.id"
              reference="SubCategory"
            >
              <TextField source={SUBCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
