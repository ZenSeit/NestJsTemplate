import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DomainModule } from "src/domain/domain.module";
import { BookEntity } from "./repository/entities/bookEntity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "test",
      database: "test",
      entities: [BookEntity],
      synchronize: true,
    }),
    DomainModule,
    TypeOrmModule.forFeature([BookEntity]),
  ],
})
export class InfrastructureModule {}
