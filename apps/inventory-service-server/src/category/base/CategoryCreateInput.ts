/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InventoryItemCreateNestedManyWithoutCategoriesInput } from "./InventoryItemCreateNestedManyWithoutCategoriesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { SubCategoryCreateNestedManyWithoutCategoriesInput } from "./SubCategoryCreateNestedManyWithoutCategoriesInput";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => InventoryItemCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => InventoryItemCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  inventoryItems?: InventoryItemCreateNestedManyWithoutCategoriesInput;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SubCategoryCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => SubCategoryCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => SubCategoryCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  subCategories?: SubCategoryCreateNestedManyWithoutCategoriesInput;
}

export { CategoryCreateInput as CategoryCreateInput };
