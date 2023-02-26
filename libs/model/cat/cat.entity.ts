import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cat-info')
export class CatEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column()
    name: string

    @Column()
    breed: string


}