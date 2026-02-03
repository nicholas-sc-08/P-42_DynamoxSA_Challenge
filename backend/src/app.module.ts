import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MachineModule } from './machine/machine.module';
import { PrismaService } from './prisma/client';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    MachineModule,
    UserModule
  ],
  providers: [PrismaService]
})
export class AppModule { }
