import { Module } from "@nestjs/common";
import { FileUploadModuleBase } from "./base/fileUpload.module.base";
import { FileUploadService } from "./fileUpload.service";
import { FileUploadController } from "./fileUpload.controller";
import { FileUploadResolver } from "./fileUpload.resolver";

@Module({
  imports: [FileUploadModuleBase],
  controllers: [FileUploadController],
  providers: [FileUploadService, FileUploadResolver],
  exports: [FileUploadService],
})
export class FileUploadModule {}
