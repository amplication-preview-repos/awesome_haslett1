/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CategoryService } from "../category.service";
import { CategoryCreateInput } from "./CategoryCreateInput";
import { Category } from "./Category";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateInput } from "./CategoryUpdateInput";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { InventoryItemWhereUniqueInput } from "../../inventoryItem/base/InventoryItemWhereUniqueInput";
import { SubCategoryFindManyArgs } from "../../subCategory/base/SubCategoryFindManyArgs";
import { SubCategory } from "../../subCategory/base/SubCategory";
import { SubCategoryWhereUniqueInput } from "../../subCategory/base/SubCategoryWhereUniqueInput";

export class CategoryControllerBase {
  constructor(protected readonly service: CategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  async createCategory(
    @common.Body() data: CategoryCreateInput
  ): Promise<Category> {
    return await this.service.createCategory({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @ApiNestedQuery(CategoryFindManyArgs)
  async categories(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.categories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async category(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    const result = await this.service.category({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCategory(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCategory(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/inventoryItems")
  @ApiNestedQuery(InventoryItemFindManyArgs)
  async findInventoryItems(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<InventoryItem[]> {
    const query = plainToClass(InventoryItemFindManyArgs, request.query);
    const results = await this.service.findInventoryItems(params.id, {
      ...query,
      select: {
        aprice: true,
        bcode: true,

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        depart: true,
        descript: true,
        description: true,
        id: true,
        location: true,
        name: true,
        prodid: true,
        qtyonhand: true,

        subCategory: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventoryItems")
  async connectInventoryItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventoryItems")
  async updateInventoryItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventoryItems")
  async disconnectInventoryItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/subCategories")
  @ApiNestedQuery(SubCategoryFindManyArgs)
  async findSubCategories(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<SubCategory[]> {
    const query = plainToClass(SubCategoryFindManyArgs, request.query);
    const results = await this.service.findSubCategories(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/subCategories")
  async connectSubCategories(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: SubCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subCategories: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/subCategories")
  async updateSubCategories(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: SubCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subCategories: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/subCategories")
  async disconnectSubCategories(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: SubCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subCategories: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
