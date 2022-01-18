import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text")
    type!: string;

    @Column("text")
    name!: string;

    @Column("text")
    currency!: string;

    @Column("double")
    credit!: number;

    @Column("double")
    debit!: number;
  
    @Column("date")
    operationDate!: Date;

    @Column("date")
    valueDate!: Date;
}
