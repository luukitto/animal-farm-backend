import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pig } from "./entities/pig.entity";
import { databaseConfig } from "./config/database.config";
import { PigController } from "./controllers/pig.controller";
import { PigService } from "./services/pig.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Pig])
  ],
  controllers: [PigController],
  providers: [PigService],
})
export class AppModule {}
