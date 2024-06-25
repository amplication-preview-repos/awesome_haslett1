import { Module } from "@nestjs/common";
import { CsvHandlerService } from "./csvhandler.service";
import { CsvHandlerController } from "./csvhandler.controller";
import { CsvHandlerResolver } from "./csvhandler.resolver";

@Module({
  controllers: [CsvHandlerController],
  providers: [CsvHandlerService, CsvHandlerResolver],
  exports: [CsvHandlerService],
})
export class CsvHandlerModule {}
