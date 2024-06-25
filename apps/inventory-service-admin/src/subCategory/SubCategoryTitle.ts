import { SubCategory as TSubCategory } from "../api/subCategory/SubCategory";

export const SUBCATEGORY_TITLE_FIELD = "name";

export const SubCategoryTitle = (record: TSubCategory): string => {
  return record.name?.toString() || String(record.id);
};
