import * as graphql from "@nestjs/graphql";
import { CsvHandlerService } from "./csvhandler.service";

export class CsvHandlerResolver {
  constructor(protected readonly service: CsvHandlerService) {}

  @graphql.Mutation(() => String)
  async ProcessCsv(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessCsv(args);
  }

  @graphql.Query(() => String)
  async TrackProgress(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TrackProgress(args);
  }

  @graphql.Mutation(() => String)
  async UploadCsv(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadCsv(args);
  }
}
