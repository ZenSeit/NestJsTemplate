import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./bookEntity";
import { Author } from "src/domain/entities/author.entity";
import { Book } from "src/domain/entities/book.entity";

@Entity("author")
export class AuthorEntity implements Author {
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    country: string;

    @ManyToMany(() => BookEntity, book => book.authors)
    books: BookEntity[];
}