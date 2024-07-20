import { Book } from "src/domain/entities/book.entity";

export abstract class IBookService {
  abstract getBooks(): Promise<Book[]>;
  abstract getBookName(name: string): Promise<Book>;
  abstract createBook(book: Book): Promise<Book>;
}
