import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IAuthorRepository } from "src/application/interfaces/repository/author.repository.abstract";
import { IBookRepository } from "src/application/interfaces/repository/book.repository.abstract";
import { IAuthorService } from "src/application/interfaces/services/Iauthor.service.interface";
import { IBookService } from "src/application/interfaces/services/Ibook.service.interface";
import { AuthorService } from "src/application/services/author.service";
import { BookService } from "src/application/services/book.service";
import { AuthorRepositoryImpl } from "src/infrastructure/repository/author.repository";
import { BookRepositoryImpl } from "src/infrastructure/repository/book.repository";
import { AuthorEntity } from "src/infrastructure/repository/entities/authorEntity";
import { BookEntity } from "src/infrastructure/repository/entities/bookEntity";

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  providers: [
    {
      provide: IBookRepository,
      useClass: BookRepositoryImpl,
    },
    {
      provide: IBookService,
      useClass: BookService,
    },
    {
      provide: IAuthorRepository,
      useClass: AuthorRepositoryImpl,
    },
    {
      provide: IAuthorService,
      useClass: AuthorService,
    }
  ],
  exports: [IBookService,IAuthorService],
})
export class ProviderModule {}
