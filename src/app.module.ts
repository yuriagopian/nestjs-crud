import { UserSchema, User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dev:8zmeMI1Rj1UfmWWQ@cluster0.mnc4s.mongodb.net/test',
    ),
    UsersModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
