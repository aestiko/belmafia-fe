import { Resolver, Query, ObjectType, Field } from '@nestjs/graphql';
import { TournamentsService } from './tournaments.service';

@ObjectType()
export class Tournament {
  @Field()
  id: string;

  @Field()
  name: string;
}

@Resolver(() => Tournament)
export class TournamentsResolver {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Query(() => [Tournament])
  tournaments() {
    return this.tournamentsService.findAll();
  }
}
