import { Injectable } from '@nestjs/common';
import { tournaments } from './mocks/tournaments.mock';    

@Injectable()
export class TournamentsService {
  findAll() {
    return tournaments;
  }
}
