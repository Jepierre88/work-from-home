import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/Target.entity';
import { DataJepierreController } from './data-jepierre.controller';
import { DataJepierreService } from './data-jepierre.service';
import { Admin } from './entities/Admin.entity';
import { Information } from './entities/Information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Target, Information])],
  controllers: [DataJepierreController],
  providers: [DataJepierreService]
})
export class DataJepierreModule { }
