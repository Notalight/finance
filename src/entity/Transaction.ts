import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text")
    name!: string;

    @Column("text")
    accountName!: string;

    @Column("text")
    accountNumber!: string;

    @Column("text")
    iban!: string;

    @Column("text")
    currency!: string;

    @Column("double")
    balance!: number;
  
    @Column("date")
    lastUpdate!: Date;
}
