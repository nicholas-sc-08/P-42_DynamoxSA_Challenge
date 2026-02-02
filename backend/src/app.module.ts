import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MachineModule } from './machine/machine.module';
import { PrismaService } from './prisma/client';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    MachineModule,
  ],
  providers: [PrismaService]
})
export class AppModule { }
