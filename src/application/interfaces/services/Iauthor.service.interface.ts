import { Author } from "src/domain/entities/author.entity";

export abstract class IAuthorService {
    abstract getAuthors(): Promise<Author[]>;
    abstract getAuthorByName(name: string): Promise<Author>;
    abstract createAuthor(book: Author): Promise<Author>;
  }