import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { DatabaseService } from 'libs/database/database.service';
import { CatDto } from 'libs/model/cat/cat.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
    private dbInstance: Knex;
    constructor(
        private db: DatabaseService,
    ) { this.dbInstance = this.db.getInstance(); }

    async create(cat: CatDto): Promise<CatDto> {
        const rows = await this.db
            .connection('cat-info')
            .insert(cat)
            .returning('*');
        return rows[0];
    }

    getCats() {
        return this.db
            .connection('cat-info')
            .select()
            .orderBy('id', 'asc')
    }

    getCat(id: number) {
        return this.db
            .connection('cat-info')
            .select()
            .where({ id })
            .then((rows) => rows[0])

    }

    update(id: number, cat: CatDto) {
        return this.db
            .connection('cat-info')
            .update(cat)
            .where({ id })
            .returning('*')
            .then((rows) => rows[0])
    }

    delete(id: number) {
        return this.db
            .connection('cat-info')
            .delete()
            .where({ id })
            .returning('id')
    }
}
