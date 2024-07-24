import { Author } from "src/domain/entities/author.entity";

export abstract class IAuthorRepository {
    abstract findAll(): Promise<Author[]>;
    abstract findByName(name: string): Promise<Author>;
    abstract create(author: Author): Promise<Author>;
    }