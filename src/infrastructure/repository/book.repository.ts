import { IBookRepository } from "src/application/interfaces/repository/book.repository.abstract";
import { Book } from "src/domain/entities/book.entity";
import { BookEntity } from "./entities/bookEntity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export class BookRepositoryImpl extends IBookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {
    super();
  }

  create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async findByName(name: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { title: name } });
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ["authors"] });
  }
}
