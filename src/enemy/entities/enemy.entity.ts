import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()  
@Entity()
export class Enemy {
  @PrimaryGeneratedColumn()
  @Field(type => Int) 
  id: number;

  @Column()
  @Field()  
  name: string;

  @Column()
  @Field() 
  category: string;

  @Column('int')
  @Field(type => Int)  
  level: number;

  @Column('text')
  @Field()  
  description: string;

  @Column('text')
  @Field()  
  abilities: string;

  @Column('text')
  @Field()  
  interactionPhrases: string;
}
