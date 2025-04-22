import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEnemyDto {
  @Field()
  name: string;

  @Field()
  category: string;

  @Field()
  level: number;

  @Field()
  description: string;

  @Field()
  abilities: string;

  @Field()
  interactionPhrases: string;
}

@InputType()
export class CreateEnemiesInput {
  @Field(() => [CreateEnemyDto], { nullable: true })
  enemies?: CreateEnemyDto[]; 

  @Field(() => CreateEnemyDto, { nullable: true })
  enemy?: CreateEnemyDto; 
}
