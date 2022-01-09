import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogServerController } from './blog-server/blog-server.controller';
import { BlogServerService } from './blog-server/blog-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { tblBlogList } from './entity/tblBlogList';
import { BlogServerModule } from './blog-server/blog-server.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-174-129-37-144.compute-1.amazonaws.com',
      port: 5432,
      username: 'eishtkfjrtbqil',
      password: '5f71429858344ba285f1b64e5e8c10cacc8957322b0aabfe9a710f46f36a60bf',
      database: 'd88njs9vjrt953',
      entities: [User,tblBlogList],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BlogServerModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
