import { Injectable } from "@nestjs/common";

@Injectable()
export class CsvHandlerService {
  constructor() {}
  async ProcessCsv(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TrackProgress(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadCsv(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
