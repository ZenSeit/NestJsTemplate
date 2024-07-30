import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { IBookService } from "../../application/interfaces/services/Ibook.service.interface";
import { IAuthorService } from "../../application/interfaces/services/Iauthor.service.interface";
import { Book } from "src/domain/entities/book.entity";
import { CreateBookDto } from "src/application/dtos/createBook.dto.interface";
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly bookService: IBookService,
    private readonly authorService: IAuthorService
  ) {}

  @Get("books")
  async getBooks(): Promise<any> {
    return this.bookService.getBooks();
  }

  @Get("books/:name")
  async getBookName(@Param('name') name: string): Promise<any> {
    return this.bookService.getBookName(name);
  }

  @Post("books")
  async createBook(@Body() book: CreateBookDto,@Res() res:Response): Promise<Response>{

    await this.bookService.createBook(book);
    return res.status(201).send();
  }

  @Get("authors")
  async getAuthors(): Promise<any> {
    return this.authorService.getAuthors();
  }
}
