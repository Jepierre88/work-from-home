import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Target } from './entities/Target.entity';
import { Admin } from './entities/Admin.entity';
import { CreateTargetDto, UpdateTargetDto } from './DTO/target.dto';
import { CreateAdminDto, UpdateAdminDto } from './DTO/admin.dto';
import { Information } from './entities/Information.entity';
import { CreateInformationDto, UpdateInformationDto } from './DTO/information.dto';

@Injectable()
export class DataJepierreService {
  constructor(@InjectRepository(Target) private readonly targetRepository: Repository<Target>, @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Information) private readonly informationRepository: Repository<Information>) { }

  async createTarget(target: CreateTargetDto): Promise<Target> {
    const targetSaved = await this.targetRepository.save(target);
    return targetSaved;
  }

  async findAllTargets(): Promise<Target[]> {
    const targets = await this.targetRepository.find();
    console.log(targets)
    return targets;

  }

  async findOneTargetById(id: number): Promise<Target> {
    const target = await this.targetRepository.findOne({
      where: { id: id },
    });
    return target;
  }

  async updateTarget(id: number, target: UpdateTargetDto): Promise<any> {
    const targetUpdated = await this.targetRepository.update(id, target);
    return targetUpdated
  }

  async deleteTargetById(id: number): Promise<void> {
    await this.targetRepository.delete({ id: id });
  }

  async createAdmin(admin: CreateAdminDto): Promise<Admin> {
    const adminSaved = await this.adminRepository.save(admin);
    return adminSaved;
  }

  async findAllAdmins(): Promise<Admin[]> {
    const admins = await this.adminRepository.find();
    return admins;

  }

  async findOneAdminById(id: number): Promise<Admin> {
    const admin = await this.adminRepository.findOneBy({ id: id });
    return admin;
  }

  async updateAdmin(id: number, admin: UpdateAdminDto): Promise<any> {
    const adminUpdated = await this.adminRepository.update(id, admin);
    return adminUpdated
  }

  async deleteAdminById(id: number): Promise<void> {
    await this.adminRepository.delete({ id: id });
  }
  async createInformation(createInformationDto: CreateInformationDto): Promise<Information> {
    const admin = await this.adminRepository.findOneBy({ id: createInformationDto.idAdmin });
    const target = await this.targetRepository.findOneBy({ id: createInformationDto.idTarget });

    if (!admin) {
      throw new Error(`Admin with ID ${createInformationDto.idAdmin} not found`);
    }

    if (!target) {
      throw new Error(`Target with ID ${createInformationDto.idTarget} not found`);
    }

    const newInformation = await this.informationRepository.create(createInformationDto)

    return newInformation
  }

  async findAllInformation(): Promise<Information[]> {
    const informations = await this.informationRepository.find({
      relations: ["admin", "target"]
    });
    return informations;
  }

  async findInformationById(id: number): Promise<Information> {
    const information = await this.informationRepository.findOneBy({ id: id });
    if (!information) {
      throw new Error(`Information with ID ${id} not found`);
    }
    return information;
  }

  async updateInformationById(id: number, updateInformationDto: UpdateInformationDto): Promise<any> {
    const informationUpdated = await this.informationRepository.update({ id: id }, updateInformationDto)
    // const information = await this.findInformationById(id);  // Ensure the record exists before updating
    // const informationUpdated = await this.informationRepository.save(information);
    return informationUpdated;
  }

  async deleteInformationById(id: number): Promise<void> {
    const result = await this.informationRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new Error(`Information with ID ${id} not found`);
    }
  }

}
