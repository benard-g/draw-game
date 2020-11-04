import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Toto {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;
}
