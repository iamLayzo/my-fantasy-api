import { CreateEnemyDto } from './create-enemy.dto';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEnemyDto extends PartialType(CreateEnemyDto) {}
