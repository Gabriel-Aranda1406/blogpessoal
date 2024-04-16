import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'db_blogpessoalnew',
      entities: [Postagem],
      synchronize: true,
    }), //Pode ser que eu precise remover essa vírgula depois.
    PostagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
