import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from 'libs/model/cat/cat.entity';
import { CatDto } from 'libs/model/cat/cat.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
    constructor(
        @InjectRepository(CatEntity)
        private readonly catRepository: Repository<CatEntity>
    ) { }

    create(cat: CatDto) {
        return this.catRepository.save(cat)
    }

    getCats() {
        return this.catRepository.find()
    }

    getCat(id: number) {
        return this.catRepository.findOneBy({ id })
    }

    update(id: number, cat: CatDto) {
        return this.catRepository.update(id, cat)
    }

    delete(id: number) {
        return this.catRepository.delete({ id })
    }
}
