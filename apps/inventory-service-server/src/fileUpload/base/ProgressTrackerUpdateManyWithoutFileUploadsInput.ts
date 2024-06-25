/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProgressTrackerWhereUniqueInput } from "../../progressTracker/base/ProgressTrackerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProgressTrackerUpdateManyWithoutFileUploadsInput {
  @Field(() => [ProgressTrackerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressTrackerWhereUniqueInput],
  })
  connect?: Array<ProgressTrackerWhereUniqueInput>;

  @Field(() => [ProgressTrackerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressTrackerWhereUniqueInput],
  })
  disconnect?: Array<ProgressTrackerWhereUniqueInput>;

  @Field(() => [ProgressTrackerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressTrackerWhereUniqueInput],
  })
  set?: Array<ProgressTrackerWhereUniqueInput>;
}

export { ProgressTrackerUpdateManyWithoutFileUploadsInput as ProgressTrackerUpdateManyWithoutFileUploadsInput };
