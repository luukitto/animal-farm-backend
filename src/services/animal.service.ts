import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Animal } from "../entities/animal.entity";
import { PaginationDto } from "../Dto/pagination.dto";
import { PaginatedResponse } from "../Dto/paginated-response.dto";

@Injectable()
export class AnimalService {
    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>
    ) {}

    async getAllAnimals(paginationDto: PaginationDto): Promise<PaginatedResponse<Animal>> {
        const { page = 1, limit = 10, search } = paginationDto;
        const skip = (page - 1) * limit;

        const whereClause = search ? [
            { name: ILike(`%${search}%`) },
            { type: ILike(`%${search}%`) }
        ] : {};

        const [items, total] = await this.animalRepository.findAndCount({
            where: whereClause,
            order: { id: 'ASC' },
            skip,
            take: limit,
        });

        return {
            items,
            meta: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
            }
        };
    }

    async feedAnimal(id: number) {
          await this.animalRepository.increment({id: id}, 'arkipoCounter', 1);

          return await this.animalRepository.findOneBy({id});
    }
}
