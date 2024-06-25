import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CsvHandlerService } from "./csvhandler.service";

@swagger.ApiTags("csvHandlers")
@common.Controller("csvHandlers")
export class CsvHandlerController {
  constructor(protected readonly service: CsvHandlerService) {}

  @common.Post("/process")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessCsv(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessCsv(body);
      }

  @common.Get("/progress/:fileId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TrackProgress(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TrackProgress(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadCsv(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadCsv(body);
      }
}
