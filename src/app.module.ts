import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ApplicationModule } from "./application/application.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { ProviderModule } from "./provider/provider.module";

@Module({
  imports: [ApplicationModule, InfrastructureModule, ProviderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
