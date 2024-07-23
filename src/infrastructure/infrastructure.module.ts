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
      autoLoadEntities: true,
      synchronize: true,
    }),
    DomainModule,
  ],
})
export class InfrastructureModule {}
