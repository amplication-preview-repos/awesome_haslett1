import { InventoryItemCreateNestedManyWithoutCategoriesInput } from "./InventoryItemCreateNestedManyWithoutCategoriesInput";
import { SubCategoryCreateNestedManyWithoutCategoriesInput } from "./SubCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  inventoryItems?: InventoryItemCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  subCategories?: SubCategoryCreateNestedManyWithoutCategoriesInput;
};
