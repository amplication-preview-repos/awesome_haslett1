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
import { ProgressTracker } from "./ProgressTracker";
import { ProgressTrackerCountArgs } from "./ProgressTrackerCountArgs";
import { ProgressTrackerFindManyArgs } from "./ProgressTrackerFindManyArgs";
import { ProgressTrackerFindUniqueArgs } from "./ProgressTrackerFindUniqueArgs";
import { CreateProgressTrackerArgs } from "./CreateProgressTrackerArgs";
import { UpdateProgressTrackerArgs } from "./UpdateProgressTrackerArgs";
import { DeleteProgressTrackerArgs } from "./DeleteProgressTrackerArgs";
import { FileUpload } from "../../fileUpload/base/FileUpload";
import { ProgressTrackerService } from "../progressTracker.service";
@graphql.Resolver(() => ProgressTracker)
export class ProgressTrackerResolverBase {
  constructor(protected readonly service: ProgressTrackerService) {}

  async _progressTrackersMeta(
    @graphql.Args() args: ProgressTrackerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProgressTracker])
  async progressTrackers(
    @graphql.Args() args: ProgressTrackerFindManyArgs
  ): Promise<ProgressTracker[]> {
    return this.service.progressTrackers(args);
  }

  @graphql.Query(() => ProgressTracker, { nullable: true })
  async progressTracker(
    @graphql.Args() args: ProgressTrackerFindUniqueArgs
  ): Promise<ProgressTracker | null> {
    const result = await this.service.progressTracker(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProgressTracker)
  async createProgressTracker(
    @graphql.Args() args: CreateProgressTrackerArgs
  ): Promise<ProgressTracker> {
    return await this.service.createProgressTracker({
      ...args,
      data: {
        ...args.data,

        fileUpload: args.data.fileUpload
          ? {
              connect: args.data.fileUpload,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ProgressTracker)
  async updateProgressTracker(
    @graphql.Args() args: UpdateProgressTrackerArgs
  ): Promise<ProgressTracker | null> {
    try {
      return await this.service.updateProgressTracker({
        ...args,
        data: {
          ...args.data,

          fileUpload: args.data.fileUpload
            ? {
                connect: args.data.fileUpload,
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

  @graphql.Mutation(() => ProgressTracker)
  async deleteProgressTracker(
    @graphql.Args() args: DeleteProgressTrackerArgs
  ): Promise<ProgressTracker | null> {
    try {
      return await this.service.deleteProgressTracker(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => FileUpload, {
    nullable: true,
    name: "fileUpload",
  })
  async getFileUpload(
    @graphql.Parent() parent: ProgressTracker
  ): Promise<FileUpload | null> {
    const result = await this.service.getFileUpload(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
