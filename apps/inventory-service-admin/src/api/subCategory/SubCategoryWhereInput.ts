import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubCategoryWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  name?: StringNullableFilter;
};
