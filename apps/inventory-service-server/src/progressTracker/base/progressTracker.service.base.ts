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
  ProgressTracker as PrismaProgressTracker,
  FileUpload as PrismaFileUpload,
} from "@prisma/client";

export class ProgressTrackerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProgressTrackerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.progressTracker.count(args);
  }

  async progressTrackers(
    args: Prisma.ProgressTrackerFindManyArgs
  ): Promise<PrismaProgressTracker[]> {
    return this.prisma.progressTracker.findMany(args);
  }
  async progressTracker(
    args: Prisma.ProgressTrackerFindUniqueArgs
  ): Promise<PrismaProgressTracker | null> {
    return this.prisma.progressTracker.findUnique(args);
  }
  async createProgressTracker(
    args: Prisma.ProgressTrackerCreateArgs
  ): Promise<PrismaProgressTracker> {
    return this.prisma.progressTracker.create(args);
  }
  async updateProgressTracker(
    args: Prisma.ProgressTrackerUpdateArgs
  ): Promise<PrismaProgressTracker> {
    return this.prisma.progressTracker.update(args);
  }
  async deleteProgressTracker(
    args: Prisma.ProgressTrackerDeleteArgs
  ): Promise<PrismaProgressTracker> {
    return this.prisma.progressTracker.delete(args);
  }

  async getFileUpload(parentId: string): Promise<PrismaFileUpload | null> {
    return this.prisma.progressTracker
      .findUnique({
        where: { id: parentId },
      })
      .fileUpload();
  }
}