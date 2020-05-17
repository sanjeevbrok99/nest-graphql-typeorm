import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SocialStatusDto {
  @Field(() => ID, { nullable: true }) id?: number;
  @Field(() => String, { nullable: true }) socialStatusName?: string;
  @Field(() => Int, { nullable: true }) version?: number;
}