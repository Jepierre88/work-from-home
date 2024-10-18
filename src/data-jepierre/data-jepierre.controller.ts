import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { DataJepierreService } from './data-jepierre.service';
import { Target } from './entities/Target.entity';
import { CreateTargetDto, UpdateTargetDto } from './DTO/target.dto';
import { CreateAdminDto, UpdateAdminDto } from './DTO/admin.dto';
import { CreateInformationDto, UpdateInformationDto } from './DTO/information.dto';

@Controller('data-jepierre')
export class DataJepierreController {

  constructor(private dataJepierreService: DataJepierreService) { }

  @Get("/target")
  async getAllTargets() {
    try {
      const targets = await this.dataJepierreService.findAllTargets()
      console.log("Error")
      return targets
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Get("/target/:id")
  async getTargetById(@Param("id") id: number) {
    try {
      const target = await this.dataJepierreService.findOneAdminById(id)
      return target
    } catch (error) {
      throw new Error(error.message)
    }
  }


  @Post("/target")
  async createTarget(@Body() createTargetDto: CreateTargetDto) {
    try {
      const targetCreated = await this.dataJepierreService.createTarget(createTargetDto)
      return targetCreated
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Patch("/target/:id")
  async updateTarget(@Body() updateTargetDto: UpdateTargetDto, @Param("id") id: number) {
    try {
      const updateTarget = await this.dataJepierreService.updateTarget(id, updateTargetDto)
      return updateTarget
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Delete("/target/:id")
  async deleteTarget(@Param("id") id: number) {
    try {
      await this.dataJepierreService.deleteTargetById(id)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Get("/admin")
  async getAllAdmins() {
    try {
      const admins = await this.dataJepierreService.findAllAdmins();
      return admins;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/admin/:id')
  async getAdminById(@Param('id') id: number) {
    try {
      const admin = await this.dataJepierreService.findOneAdminById(id);
      return admin;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post("/admin")
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    try {
      const adminCreated = await this.dataJepierreService.createAdmin(createAdminDto);
      return adminCreated;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch('/admin/:id')
  async updateAdmin(@Body() updateAdminDto: UpdateAdminDto, @Param('id') id: number) {
    try {
      const adminUpdated = await this.dataJepierreService.updateAdmin(id, updateAdminDto);
      return adminUpdated;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete('/admin/:id')
  async deleteAdmin(@Param('id') id: number) {
    try {
      await this.dataJepierreService.deleteAdminById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  @Post('/information')
  async create(@Body() createInformationDto: CreateInformationDto) {
    try {
      const createdInformation = await this.dataJepierreService.createInformation(createInformationDto);
      return createdInformation;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/information')
  async findAll() {
    try {
      const informations = await this.dataJepierreService.findAllInformation();
      return informations;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/information/:id')
  async findOneById(@Param('id') id: number) {
    try {
      const information = await this.dataJepierreService.findInformationById(id);
      return information;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch('/information/:id')
  async update(@Param('id') id: number, @Body() updateInformationDto: UpdateInformationDto) {
    try {
      const updatedInformation = await this.dataJepierreService.updateInformationById(id, updateInformationDto);
      return updatedInformation;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete('/information/:id')
  async delete(@Param('id') id: number) {
    try {
      await this.dataJepierreService.deleteInformationById(id);
      return { message: `Information with ID ${id} has been deleted` };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
