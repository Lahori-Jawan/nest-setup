import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmConfig } from './app/config/ormConfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(OrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
