import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EnemyService } from '../services/enemy.service';
import { Enemy } from '../entities/enemy.entity';
import { CreateEnemiesInput } from '../dto/create-enemy.dto';

@Resolver(of => Enemy)
export class EnemyResolver {
  constructor(private readonly enemyService: EnemyService) {}

  @Query(returns => [Enemy])
  enemies() {
    return this.enemyService.findAll();
  }

  @Mutation(returns => [Enemy]) 
  async createEnemies(@Args('createEnemiesInput') createEnemiesInput: CreateEnemiesInput): Promise<Enemy[]> {
    const { enemy, enemies } = createEnemiesInput;

    if (enemy) {
      const createdEnemy = await this.enemyService.create(enemy);
      return [createdEnemy];
    }

    if (enemies && enemies.length > 0) {
      const createdEnemies = await this.enemyService.createMany(enemies);
      return createdEnemies;
    }

    throw new Error('You must provide at least one enemy or a list of enemies.');
  }
}
