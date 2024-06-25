import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SubCategoryWhereUniqueInput } from "../subCategory/SubCategoryWhereUniqueInput";

export type InventoryItemCreateInput = {
  aprice?: number | null;
  bcode?: string | null;
  category?: CategoryWhereUniqueInput | null;
  depart?: string | null;
  descript?: string | null;
  description?: string | null;
  location?: string | null;
  name?: string | null;
  prodid?: string | null;
  qtyonhand?: number | null;
  subCategory?: SubCategoryWhereUniqueInput | null;
};
