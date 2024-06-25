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
import { ProgressTrackerService } from "../progressTracker.service";
import { ProgressTrackerCreateInput } from "./ProgressTrackerCreateInput";
import { ProgressTracker } from "./ProgressTracker";
import { ProgressTrackerFindManyArgs } from "./ProgressTrackerFindManyArgs";
import { ProgressTrackerWhereUniqueInput } from "./ProgressTrackerWhereUniqueInput";
import { ProgressTrackerUpdateInput } from "./ProgressTrackerUpdateInput";

export class ProgressTrackerControllerBase {
  constructor(protected readonly service: ProgressTrackerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProgressTracker })
  async createProgressTracker(
    @common.Body() data: ProgressTrackerCreateInput
  ): Promise<ProgressTracker> {
    return await this.service.createProgressTracker({
      data: {
        ...data,

        fileUpload: data.fileUpload
          ? {
              connect: data.fileUpload,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        currentIndex: true,

        fileUpload: {
          select: {
            id: true,
          },
        },

        id: true,
        progressStatus: true,
        status: true,
        totalItems: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProgressTracker] })
  @ApiNestedQuery(ProgressTrackerFindManyArgs)
  async progressTrackers(
    @common.Req() request: Request
  ): Promise<ProgressTracker[]> {
    const args = plainToClass(ProgressTrackerFindManyArgs, request.query);
    return this.service.progressTrackers({
      ...args,
      select: {
        createdAt: true,
        currentIndex: true,

        fileUpload: {
          select: {
            id: true,
          },
        },

        id: true,
        progressStatus: true,
        status: true,
        totalItems: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProgressTracker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async progressTracker(
    @common.Param() params: ProgressTrackerWhereUniqueInput
  ): Promise<ProgressTracker | null> {
    const result = await this.service.progressTracker({
      where: params,
      select: {
        createdAt: true,
        currentIndex: true,

        fileUpload: {
          select: {
            id: true,
          },
        },

        id: true,
        progressStatus: true,
        status: true,
        totalItems: true,
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
  @swagger.ApiOkResponse({ type: ProgressTracker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgressTracker(
    @common.Param() params: ProgressTrackerWhereUniqueInput,
    @common.Body() data: ProgressTrackerUpdateInput
  ): Promise<ProgressTracker | null> {
    try {
      return await this.service.updateProgressTracker({
        where: params,
        data: {
          ...data,

          fileUpload: data.fileUpload
            ? {
                connect: data.fileUpload,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          currentIndex: true,

          fileUpload: {
            select: {
              id: true,
            },
          },

          id: true,
          progressStatus: true,
          status: true,
          totalItems: true,
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
  @swagger.ApiOkResponse({ type: ProgressTracker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgressTracker(
    @common.Param() params: ProgressTrackerWhereUniqueInput
  ): Promise<ProgressTracker | null> {
    try {
      return await this.service.deleteProgressTracker({
        where: params,
        select: {
          createdAt: true,
          currentIndex: true,

          fileUpload: {
            select: {
              id: true,
            },
          },

          id: true,
          progressStatus: true,
          status: true,
          totalItems: true,
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
