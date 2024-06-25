/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SubCategory } from "./SubCategory";
import { SubCategoryCountArgs } from "./SubCategoryCountArgs";
import { SubCategoryFindManyArgs } from "./SubCategoryFindManyArgs";
import { SubCategoryFindUniqueArgs } from "./SubCategoryFindUniqueArgs";
import { CreateSubCategoryArgs } from "./CreateSubCategoryArgs";
import { UpdateSubCategoryArgs } from "./UpdateSubCategoryArgs";
import { DeleteSubCategoryArgs } from "./DeleteSubCategoryArgs";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { Category } from "../../category/base/Category";
import { SubCategoryService } from "../subCategory.service";
@graphql.Resolver(() => SubCategory)
export class SubCategoryResolverBase {
  constructor(protected readonly service: SubCategoryService) {}

  async _subCategoriesMeta(
    @graphql.Args() args: SubCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubCategory])
  async subCategories(
    @graphql.Args() args: SubCategoryFindManyArgs
  ): Promise<SubCategory[]> {
    return this.service.subCategories(args);
  }

  @graphql.Query(() => SubCategory, { nullable: true })
  async subCategory(
    @graphql.Args() args: SubCategoryFindUniqueArgs
  ): Promise<SubCategory | null> {
    const result = await this.service.subCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubCategory)
  async createSubCategory(
    @graphql.Args() args: CreateSubCategoryArgs
  ): Promise<SubCategory> {
    return await this.service.createSubCategory({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SubCategory)
  async updateSubCategory(
    @graphql.Args() args: UpdateSubCategoryArgs
  ): Promise<SubCategory | null> {
    try {
      return await this.service.updateSubCategory({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SubCategory)
  async deleteSubCategory(
    @graphql.Args() args: DeleteSubCategoryArgs
  ): Promise<SubCategory | null> {
    try {
      return await this.service.deleteSubCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [InventoryItem], { name: "inventoryItems" })
  async findInventoryItems(
    @graphql.Parent() parent: SubCategory,
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    const results = await this.service.findInventoryItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: SubCategory
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
