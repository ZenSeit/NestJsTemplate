import { Book } from "src/domain/entities/book.entity";

export abstract class IBookRepository {
  abstract findAll(): Promise<Book[]>;
  abstract findByName(name: string): Promise<Book>;
  abstract create(book: Book): Promise<Book>;
}
