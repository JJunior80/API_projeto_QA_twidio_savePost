import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('posts')
export class Post {

  @PrimaryGeneratedColumn('uuid')
  post_id: string

  @Column()
  author: string

  @Column()
  content: string
}
