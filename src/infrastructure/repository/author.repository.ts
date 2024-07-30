import { InjectRepository } from "@nestjs/typeorm";
import { IAuthorRepository } from "src/application/interfaces/repository/author.repository.abstract";
import { Author } from "src/domain/entities/author.entity";
import { In, Repository } from "typeorm";
import { AuthorEntity } from "./entities/authorEntity";

export class AuthorRepositoryImpl extends IAuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {
    super();
  }
  
  async findByIds(ids: number[]): Promise<Author[]> {
    return await this.authorRepository.findBy({ id: In(ids) })
  }
  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }
  async findByName(name: string): Promise<Author> {
    return await this.authorRepository.findOne({ where: { name } });
  }
  create(author: Author): Promise<Author> {
    throw new Error("Method not implemented.");
  }
}
