import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryItemCreateNestedManyWithoutSubCategoriesInput } from "./InventoryItemCreateNestedManyWithoutSubCategoriesInput";

export type SubCategoryCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutSubCategoriesInput;
  name?: string | null;
};
