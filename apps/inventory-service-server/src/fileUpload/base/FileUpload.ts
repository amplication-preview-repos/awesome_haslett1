/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProgressTracker } from "../../progressTracker/base/ProgressTracker";
import { EnumFileUploadStatus } from "./EnumFileUploadStatus";
import { EnumFileUploadUploadStatus } from "./EnumFileUploadUploadStatus";

@ObjectType()
class FileUpload {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filePath!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [ProgressTracker],
  })
  @ValidateNested()
  @Type(() => ProgressTracker)
  @IsOptional()
  progressTrackers?: Array<ProgressTracker>;

  @ApiProperty({
    required: false,
    enum: EnumFileUploadStatus,
  })
  @IsEnum(EnumFileUploadStatus)
  @IsOptional()
  @Field(() => EnumFileUploadStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumFileUploadUploadStatus,
  })
  @IsEnum(EnumFileUploadUploadStatus)
  @IsOptional()
  @Field(() => EnumFileUploadUploadStatus, {
    nullable: true,
  })
  uploadStatus?: "Option1" | null;
}

export { FileUpload as FileUpload };
