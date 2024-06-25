/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Category as PrismaCategory,
  InventoryItem as PrismaInventoryItem,
  SubCategory as PrismaSubCategory,
} from "@prisma/client";

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CategoryCountArgs, "select">): Promise<number> {
    return this.prisma.category.count(args);
  }

  async categories(
    args: Prisma.CategoryFindManyArgs
  ): Promise<PrismaCategory[]> {
    return this.prisma.category.findMany(args);
  }
  async category(
    args: Prisma.CategoryFindUniqueArgs
  ): Promise<PrismaCategory | null> {
    return this.prisma.category.findUnique(args);
  }
  async createCategory(
    args: Prisma.CategoryCreateArgs
  ): Promise<PrismaCategory> {
    return this.prisma.category.create(args);
  }
  async updateCategory(
    args: Prisma.CategoryUpdateArgs
  ): Promise<PrismaCategory> {
    return this.prisma.category.update(args);
  }
  async deleteCategory(
    args: Prisma.CategoryDeleteArgs
  ): Promise<PrismaCategory> {
    return this.prisma.category.delete(args);
  }

  async findInventoryItems(
    parentId: string,
    args: Prisma.InventoryItemFindManyArgs
  ): Promise<PrismaInventoryItem[]> {
    return this.prisma.category
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .inventoryItems(args);
  }

  async findSubCategories(
    parentId: string,
    args: Prisma.SubCategoryFindManyArgs
  ): Promise<PrismaSubCategory[]> {
    return this.prisma.category
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subCategories(args);
  }
}
