import { Module } from "@nestjs/common";
import { ProgressTrackerModuleBase } from "./base/progressTracker.module.base";
import { ProgressTrackerService } from "./progressTracker.service";
import { ProgressTrackerController } from "./progressTracker.controller";
import { ProgressTrackerResolver } from "./progressTracker.resolver";

@Module({
  imports: [ProgressTrackerModuleBase],
  controllers: [ProgressTrackerController],
  providers: [ProgressTrackerService, ProgressTrackerResolver],
  exports: [ProgressTrackerService],
})
export class ProgressTrackerModule {}
