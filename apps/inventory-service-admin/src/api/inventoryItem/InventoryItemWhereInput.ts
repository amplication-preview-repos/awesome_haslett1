import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SubCategoryWhereUniqueInput } from "../subCategory/SubCategoryWhereUniqueInput";

export type InventoryItemWhereInput = {
  aprice?: FloatNullableFilter;
  bcode?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  depart?: StringNullableFilter;
  descript?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  prodid?: StringNullableFilter;
  qtyonhand?: IntNullableFilter;
  subCategory?: SubCategoryWhereUniqueInput;
};
