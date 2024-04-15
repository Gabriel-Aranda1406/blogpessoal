import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn() //Define a chave primária e auto incremento
    id: number;

    @IsNotEmpty()//Sem espaços em branco
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) 
    texto: string;

    @UpdateDateColumn()
    data: Date;
}