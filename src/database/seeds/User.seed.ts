import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '@src/user/entities/user.entity';
import { nanoid } from 'nanoid';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          uId: nanoid(),
          firstName: 'user',
          lastName: 'one',
          email: 'user@one.com',
          password: 'password',
        },
        {
          uId: nanoid(),
          firstName: 'user',
          lastName: 'two',
          email: 'user@two.com',
          password: 'password',
        },
        {
          uId: nanoid(),
          firstName: 'user',
          lastName: 'three',
          email: 'user@three.com',
          password: 'password',
        },
        {
          uId: nanoid(),
          firstName: 'user',
          lastName: 'four',
          email: 'user@four.com',
          password: 'password',
        },
        {
          uId: nanoid(),
          firstName: 'user',
          lastName: 'five',
          email: 'user@five.com',
          password: 'password',
        },
      ])
      .execute();
  }
}
