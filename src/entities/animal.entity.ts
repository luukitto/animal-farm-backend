import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {PigStatus} from "./pig.entity";

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: PigStatus,
        default: PigStatus.DEFAULT
    })
    status: PigStatus;

    @UpdateDateColumn()
    updatedAt: Date;
}