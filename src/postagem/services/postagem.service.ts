import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}
    
    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find();

        //SELECT * FROM tb_postagens
    }

    async findById(id: number): Promise<Postagem> {

        let postagem = await this.postagemRepository.findOne({
            where:{
                id
            }
        });
        //Checar se a postagem não foi encontrada
        if(!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
        
        //Retorna a postagem, caso ela exista
        return postagem;

        //Seria o equivalente a fazer um Select * From tb_postagens Where id = ? no mysql.
    }

    async findByTitulo(titulo: string): Promise<Postagem[]>{
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem>{
        return await this.postagemRepository.save(postagem);
    }

    //Insert into tb_postagens (titulo, texto, data) Values(?, ?, ?)

    async update(postagem: Postagem): Promise<Postagem>{

        let buscaPostagem: Postagem = await this.findById(postagem.id);

        if(!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não foi encontrada!', HttpStatus.NOT_FOUND)

        return await this.postagemRepository.save(postagem);

        //Update tb_postagens SET titulo=?, texto=?, data= server Where id=?;
    }

    async delete(id: number): Promise<DeleteResult>{

        let buscaPostagem: Postagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException('Postagem não foi encontrada!', HttpStatus.NOT_FOUND)

        return await this.postagemRepository.delete(id);


    }
}