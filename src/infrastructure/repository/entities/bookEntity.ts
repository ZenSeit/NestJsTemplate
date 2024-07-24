import { Entity, Column, PrimaryGeneratedColumn, Auth, ManyToMany, JoinTable } from "typeorm";
import { AuthorEntity } from "./authorEntity";
import { Book } from "src/domain/entities/book.entity";
import { Author } from "src/domain/entities/author.entity";

@Entity("book")
export class BookEntity implements Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => AuthorEntity, author => author.books)
  @JoinTable()
  authors: AuthorEntity[];

  @Column()
  year: number;
}
