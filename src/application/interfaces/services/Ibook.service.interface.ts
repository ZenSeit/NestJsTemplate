import { CreateBookDto } from "src/application/dtos/createBook.dto.interface";
import { Book } from "src/domain/entities/book.entity";

export abstract class IBookService {
  abstract getBooks(): Promise<Book[]>;
  abstract getBookName(name: string): Promise<Book>;
  abstract createBook(book: CreateBookDto): Promise<Book>;
}
