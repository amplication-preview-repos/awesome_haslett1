import * as graphql from "@nestjs/graphql";
import { ProgressTrackerResolverBase } from "./base/progressTracker.resolver.base";
import { ProgressTracker } from "./base/ProgressTracker";
import { ProgressTrackerService } from "./progressTracker.service";

@graphql.Resolver(() => ProgressTracker)
export class ProgressTrackerResolver extends ProgressTrackerResolverBase {
  constructor(protected readonly service: ProgressTrackerService) {
    super(service);
  }
}
