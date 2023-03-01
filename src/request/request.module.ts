import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { DatabaseModule } from 'libs/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule { }
