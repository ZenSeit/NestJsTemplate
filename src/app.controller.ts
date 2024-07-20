import { Controller, Get, Param, Post } from "@nestjs/common";
import { IBookService } from "./application/interfaces/services/Ibook.service.interface";

@Controller()
export class AppController {
  constructor(private readonly bookService: IBookService) {}

  @Get("books")
  async getBooks(): Promise<any> {
    return this.bookService.getBooks();
  }

  @Get("books/:name")
  async getBookName(@Param() name: string): Promise<any> {
    return this.bookService.getBookName(name);
  }

  @Post("books")
  async createBook(@Param() book: any): Promise<any> {
    return this.bookService.createBook(book);
  }
}
