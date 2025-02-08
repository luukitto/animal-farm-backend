import {Pig, PigStatus} from "../entities/pig.entity";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {PigService} from "../services/pig.service";

@Controller('pig')
export class PigController {
    constructor(private readonly pigService: PigService) {}

    @Get()
    getCurrentPig(): Promise<Pig> {
        return this.pigService.getPig();
    }

    @Post('status')
    updateStatus(@Body('status') status: PigStatus): Promise<Pig> {
        return this.pigService.updateStatus(status);
    }
}