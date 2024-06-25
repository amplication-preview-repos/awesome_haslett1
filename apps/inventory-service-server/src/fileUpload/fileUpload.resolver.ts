import * as graphql from "@nestjs/graphql";
import { FileUploadResolverBase } from "./base/fileUpload.resolver.base";
import { FileUpload } from "./base/FileUpload";
import { FileUploadService } from "./fileUpload.service";

@graphql.Resolver(() => FileUpload)
export class FileUploadResolver extends FileUploadResolverBase {
  constructor(protected readonly service: FileUploadService) {
    super(service);
  }
}
