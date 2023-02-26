import { Body, Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Get('get-cats')
    getCats(@Body() body: any) {
        return this.requestService.getCatList(body.catType)
    }
}
