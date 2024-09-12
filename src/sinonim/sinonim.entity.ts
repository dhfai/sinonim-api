import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('sinonim_kata')
export class Sinonim {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kata: string;

    @Column()
    tag: string;

    @Column('text')
    sinonim: string;
}