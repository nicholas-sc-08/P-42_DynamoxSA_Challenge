import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { PrismaService } from 'src/prisma/client';
import { PrismaMachineRepo } from './repository/prismaMachine.repository';
import { PrismaUserRepo } from 'src/user/repository/prismaUser.repository';

@Module({
  controllers: [MachineController],
  providers: [MachineService, PrismaService, { provide: 'MachineRepo', useClass: PrismaMachineRepo }, { provide: "UserRepo", useClass: PrismaUserRepo }],
})
export class MachineModule { }
