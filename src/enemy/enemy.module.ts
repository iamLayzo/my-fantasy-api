import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnemyService } from './services/enemy.service';
import { EnemyResolver } from './resolvers/enemy.resolver';
import { Enemy } from './entities/enemy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enemy])],
  providers: [EnemyService, EnemyResolver],
})
export class EnemyModule {}
