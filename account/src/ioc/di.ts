import { EntityManager, MikroORM, EntityRepository } from "@mikro-orm/core";
import { User } from "../models/user";

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  userRepo: EntityRepository<User>;
};

export class AppDi {
  static init(orm: MikroORM) {
    DI.em = orm.em;
    DI.orm = orm;
    DI.userRepo = DI.em.getRepository(User);
  }
}
