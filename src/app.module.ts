import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; 
import { ConfigModule } from '@nestjs/config';  
import { EnemyModule } from './enemy/enemy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  
      autoSchemaFile: true,
    }),
    EnemyModule,
  ],
})
export class AppModule {}
