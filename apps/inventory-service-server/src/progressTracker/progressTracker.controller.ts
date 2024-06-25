import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgressTrackerService } from "./progressTracker.service";
import { ProgressTrackerControllerBase } from "./base/progressTracker.controller.base";

@swagger.ApiTags("progressTrackers")
@common.Controller("progressTrackers")
export class ProgressTrackerController extends ProgressTrackerControllerBase {
  constructor(protected readonly service: ProgressTrackerService) {
    super(service);
  }
}
