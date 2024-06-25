import { InventoryItem } from "../inventoryItem/InventoryItem";
import { SubCategory } from "../subCategory/SubCategory";

export type Category = {
  createdAt: Date;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  name: string | null;
  subCategories?: Array<SubCategory>;
  updatedAt: Date;
};
