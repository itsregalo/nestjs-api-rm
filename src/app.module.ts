import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, BookmarkModule, AuthModule, PrismaModule],
})
export class AppModule {}
