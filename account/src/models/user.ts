import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity({ tableName: "users" })
export class User {
  constructor(attrs: Partial<User>) {
    Object.assign(this, attrs);
  }

  @PrimaryKey()
  id: number;

  @Property({ columnType: "varchar(50)" })
  email: string;

  @Property({ columnType: "varchar(50)", nullable: true })
  name: string;

  @Property({ columnType: "timestamp" })
  createdAt = new Date();

  @Property({ columnType: "timestamp", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ columnType: "timestamp", nullable: true })
  deletedAt: Date;
}
