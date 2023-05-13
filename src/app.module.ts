import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, EmailService],
})
export class AppModule {}
