import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CatDto } from 'libs/model/cat/cat.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService,

    ) { }

    @Post()
    create(@Body() body: CatDto) {
        return this.requestService.create(body)
    }

    @Get()
    getCats() {
        return this.requestService.getCats()
    }

    @Get(':id')
    getCat(@Param('id') id: number) {
        return this.requestService.getCat(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: CatDto) {
        return this.requestService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.requestService.delete(id)
    }
}
