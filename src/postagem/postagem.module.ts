import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaModule } from "../tema/tema.module";
import { TemaService } from "../tema/services/tema.service";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }