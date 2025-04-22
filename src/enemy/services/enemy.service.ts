import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enemy } from '../entities/enemy.entity';
import { CreateEnemyDto } from '../dto/create-enemy.dto';

@Injectable()
export class EnemyService {
  constructor(
    @InjectRepository(Enemy)
    private enemyRepository: Repository<Enemy>,
  ) {}

  findAll(): Promise<Enemy[]> {
    return this.enemyRepository.find();
  }

  findOne(id: number): Promise<Enemy> {
    return this.enemyRepository.findOneBy({ id });
  }

  create(createEnemyDto: CreateEnemyDto): Promise<Enemy> {
    const enemy = this.enemyRepository.create(createEnemyDto);
    return this.enemyRepository.save(enemy);
  }

  async createMany(createEnemyDtos: CreateEnemyDto[]): Promise<Enemy[]> {
    const enemies = createEnemyDtos.map(dto => this.enemyRepository.create(dto));
    return this.enemyRepository.save(enemies);
  }

  async update(id: number, updateEnemyDto: CreateEnemyDto): Promise<Enemy> {
    await this.enemyRepository.update(id, updateEnemyDto);
    return this.enemyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.enemyRepository.delete(id);
  }
}
