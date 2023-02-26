import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatDto } from 'libs/model/cat/cat.interface';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Post()
    create(@Body() body: CatDto) {
        return this.requestService.create(body)
    }

    @Get()
    getCats() {
        return this.requestService.getCatList()
    }
}
