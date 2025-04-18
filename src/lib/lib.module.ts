import { Module } from '@nestjs/common';
import { PaystackModule } from './paystack/paystack.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { WebPushModule } from './web-push/web-push.module';
import { PrismaModule } from './prisma/prisma.module';
import { SendMailsModule } from './email/sendMail.module';
import { RedisModule } from './redis/redis.module';
@Module({
  imports: [
    PaystackModule,
    CloudinaryModule,
    WebPushModule,
    PrismaModule,
    SendMailsModule,
    RedisModule,
  ],
})
export class LibModule {}
