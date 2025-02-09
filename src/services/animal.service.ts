import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Animal } from "../entities/animal.entity";

@Injectable()
export class AnimalService {
    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>
    ) {}

    getAllAnimals(): Promise<Animal[]> {
        return this.animalRepository.find({
            order: {
                id: 'ASC'
            }
        })
    }

    async feedAnimal(id: number) {
          await this.animalRepository.increment({id: id}, 'arkipoCounter', 1);

          return await this.animalRepository.findOneBy({id});
    }
}
