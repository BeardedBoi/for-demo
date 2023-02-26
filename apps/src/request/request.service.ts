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

    getCatList() {
        const catList = ["Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal", "Birman", "Bombay", "British Shorthair", "Burmese", "Chartreux", "Cornish Rex", "Devon Rex", "Egyptian Mau", "Exotic Shorthair", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Korat", "LaPerm", "Maine Coon", "Manx", "Norwegian Forest", "Ocicat", "Oriental", "Persian", "Pixiebob", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Somali", "Sphynx", "Tonkinese", "Turkish Angora", "Turkish Van"]
        return catList
    }
}
