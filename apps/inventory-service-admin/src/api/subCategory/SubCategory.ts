import { Category } from "../category/Category";
import { InventoryItem } from "../inventoryItem/InventoryItem";

export type SubCategory = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  name: string | null;
  updatedAt: Date;
};
