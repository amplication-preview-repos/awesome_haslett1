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
  ValidateNested,
  IsOptional,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { SubCategory } from "../../subCategory/base/SubCategory";

@ObjectType()
class Category {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [InventoryItem],
  })
  @ValidateNested()
  @Type(() => InventoryItem)
  @IsOptional()
  inventoryItems?: Array<InventoryItem>;

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
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [SubCategory],
  })
  @ValidateNested()
  @Type(() => SubCategory)
  @IsOptional()
  subCategories?: Array<SubCategory>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Category as Category };
