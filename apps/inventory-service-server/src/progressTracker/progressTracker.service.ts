import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgressTrackerServiceBase } from "./base/progressTracker.service.base";

@Injectable()
export class ProgressTrackerService extends ProgressTrackerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
