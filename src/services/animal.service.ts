import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Animal} from "../entities/animal.entity";

@Injectable()
export class AnimalService {
    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>,
    ) {}

    async getAllAnimals(): Promise<Animal[]> {
        return this.animalRepository.find()
    }
}