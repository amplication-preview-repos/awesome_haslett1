import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryItemUpdateManyWithoutSubCategoriesInput } from "./InventoryItemUpdateManyWithoutSubCategoriesInput";

export type SubCategoryUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryItems?: InventoryItemUpdateManyWithoutSubCategoriesInput;
  name?: string | null;
};
