import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("book")
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  year: number;
}
