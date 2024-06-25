import { Category } from "../category/Category";
import { SubCategory } from "../subCategory/SubCategory";

export type InventoryItem = {
  aprice: number | null;
  bcode: string | null;
  category?: Category | null;
  createdAt: Date;
  depart: string | null;
  descript: string | null;
  description: string | null;
  id: string;
  location: string | null;
  name: string | null;
  prodid: string | null;
  qtyonhand: number | null;
  subCategory?: SubCategory | null;
  updatedAt: Date;
};
