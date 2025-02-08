import { Controller, Get, Param, Post } from "@nestjs/common";
import { AnimalService } from "../services/animal.service";
import { Animal } from "../entities/animal.entity";

@Controller('animals')
export class AnimalController {
    constructor(private animalService: AnimalService) {
    }

    @Get()
    getAllAnimals(): Promise<Animal[]> {
        return this.animalService.getAllAnimals()
    }

    // Should be Get
    @Post(':id/feed')
    updateAnimal(@Param('id') id: number) {
        return this.animalService.updateArkipo(id);
    }
}
