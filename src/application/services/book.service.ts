import { Book } from "src/domain/entities/book.entity";
import { IBookRepository } from "../interfaces/repository/book.repository.abstract";
import { IBookService } from "../interfaces/services/Ibook.service.interface";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookDto } from "../dtos/createBook.dto.interface";
import { Author } from "src/domain/entities/author.entity";
import { IAuthorService } from "../interfaces/services/Iauthor.service.interface";

@Injectable()
export class BookService extends IBookService {
  constructor(private readonly bookRepository: IBookRepository,private readonly authorService:IAuthorService) {
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
    return book;
  }

  async createBook(book: CreateBookDto): Promise<Book> {
    const autorsBook = await this.authorService.getAuthorsByIds(book.authors);
    if (autorsBook.length ===0) {
      throw new NotFoundException("Author not found");
    }
    const bookEntity: Book = {
      title: book.title,
      authors: autorsBook,
      year: book.year,
    };
    return this.bookRepository.create(bookEntity);
  }
}
