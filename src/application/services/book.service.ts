import { Book } from "src/domain/entities/book.entity";
import { IBookRepository } from "../interfaces/repository/book.repository.abstract";
import { IBookService } from "../interfaces/services/Ibook.service.interface";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class BookService extends IBookService {
  constructor(private readonly bookRepository: IBookRepository) {
    super();
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async getBookName(name: string): Promise<Book> {
    const book = await this.bookRepository.findByName(name);
    if (!book) {
      throw new NotFoundException(`Book with name ${name} not found`);
    }
    return this.bookRepository.findByName(name);
  }

  async createBook(book: Book): Promise<Book> {
    return this.bookRepository.create(book);
  }
}
