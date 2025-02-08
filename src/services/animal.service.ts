import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Animal } from "../entities/animal.entity";
import { PigService } from "./pig.service";
import { PigStatus } from "../entities/pig.entity";

@Injectable()
export class AnimalService {
    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>,
        private pigService: PigService
    ) {}

    getAllAnimals(): Promise<Animal[]> {
        return this.animalRepository.find()
    }

    async updateArkipo(id: number) {
          await this.animalRepository.increment({id: id}, 'arkipoCounter', 1);
          const animal = await this.animalRepository.findOneBy({id});
          const pig = await this.pigService.updateStatus(PigStatus.HAPPY);

          return {animal: animal, pig: pig}
    }
}
