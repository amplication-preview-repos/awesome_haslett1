import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  name?: StringNullableFilter;
  subCategories?: SubCategoryListRelationFilter;
};
