import {Controller, Get} from "@nestjs/common";
import {AnimalService} from "../services/animal.service";
import {Animal} from "../entities/animal.entity";

@Controller('animal')
export class AnimalController {
    constructor(private animalService: AnimalService) {
    }

    @Get()
    getAllAnimals(): Promise<Animal[]> {
        return this.animalService.getAllAnimals()
    }
}
