import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IBookRepository } from "src/application/interfaces/repository/book.repository.abstract";
import { IBookService } from "src/application/interfaces/services/Ibook.service.interface";
import { BookService } from "src/application/services/book.service";
import { BookRepositoryImpl } from "src/infrastructure/repository/book.repository";
import { BookEntity } from "src/infrastructure/repository/entities/bookEntity";

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [
    {
      provide: IBookRepository,
      useClass: BookRepositoryImpl,
    },
    {
      provide: IBookService,
      useClass: BookService,
    },
  ],
  exports: [IBookRepository, IBookService],
})
export class ProviderModule {}
