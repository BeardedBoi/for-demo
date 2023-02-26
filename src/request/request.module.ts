import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from 'libs/model/cat/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule { }
