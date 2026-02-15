import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  post_id: string

  @Column()
  author: string

  @Column()
  content: string

  @CreateDateColumn()
  created_at: Date
}

