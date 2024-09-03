import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataJepierreModule } from './data-jepierre/data-jepierre.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Target } from './data-jepierre/entities/Target.entity';
import { Admin } from './data-jepierre/entities/Admin.entity';
import { Information } from './data-jepierre/entities/Information.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: "mysql",
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [Target, Admin, Information],
    synchronize: true,
    autoLoadEntities: true
  }), DataJepierreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
