import { InventoryItemUpdateManyWithoutCategoriesInput } from "./InventoryItemUpdateManyWithoutCategoriesInput";
import { SubCategoryUpdateManyWithoutCategoriesInput } from "./SubCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  inventoryItems?: InventoryItemUpdateManyWithoutCategoriesInput;
  name?: string | null;
  subCategories?: SubCategoryUpdateManyWithoutCategoriesInput;
};
