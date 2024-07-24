import { Author } from "src/domain/entities/author.entity";
import { IAuthorService } from "../interfaces/services/Iauthor.service.interface";
import { Injectable } from "@nestjs/common";
import { IAuthorRepository } from "../interfaces/repository/author.repository.abstract";

@Injectable()
export class AuthorService extends IAuthorService{

    constructor(private readonly authorRepository: IAuthorRepository) {
        super();
    }

    async getAuthors(): Promise<Author[]> {
        return this.authorRepository.findAll();
    }
    async getAuthorByName(name: string): Promise<Author> {
        return this.authorRepository.findByName(name);
    }
    async createAuthor(book: Author): Promise<Author> {
        throw new Error("Method not implemented.");
    }

}