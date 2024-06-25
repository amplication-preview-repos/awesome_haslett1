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
import { InventoryItemService } from "../inventoryItem.service";
import { InventoryItemCreateInput } from "./InventoryItemCreateInput";
import { InventoryItem } from "./InventoryItem";
import { InventoryItemFindManyArgs } from "./InventoryItemFindManyArgs";
import { InventoryItemWhereUniqueInput } from "./InventoryItemWhereUniqueInput";
import { InventoryItemUpdateInput } from "./InventoryItemUpdateInput";

export class InventoryItemControllerBase {
  constructor(protected readonly service: InventoryItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InventoryItem })
  async createInventoryItem(
    @common.Body() data: InventoryItemCreateInput
  ): Promise<InventoryItem> {
    return await this.service.createInventoryItem({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,

        subCategory: data.subCategory
          ? {
              connect: data.subCategory,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InventoryItem] })
  @ApiNestedQuery(InventoryItemFindManyArgs)
  async inventoryItems(
    @common.Req() request: Request
  ): Promise<InventoryItem[]> {
    const args = plainToClass(InventoryItemFindManyArgs, request.query);
    return this.service.inventoryItems({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InventoryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async inventoryItem(
    @common.Param() params: InventoryItemWhereUniqueInput
  ): Promise<InventoryItem | null> {
    const result = await this.service.inventoryItem({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: InventoryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInventoryItem(
    @common.Param() params: InventoryItemWhereUniqueInput,
    @common.Body() data: InventoryItemUpdateInput
  ): Promise<InventoryItem | null> {
    try {
      return await this.service.updateInventoryItem({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,

          subCategory: data.subCategory
            ? {
                connect: data.subCategory,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: InventoryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInventoryItem(
    @common.Param() params: InventoryItemWhereUniqueInput
  ): Promise<InventoryItem | null> {
    try {
      return await this.service.deleteInventoryItem({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}