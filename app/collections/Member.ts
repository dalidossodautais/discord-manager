import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

class Member extends Model<
  InferAttributes<Member>,
  InferCreationAttributes<Member>
> {
  declare id: CreationOptional<number>;
  declare discordId: string;
  declare isMuted: boolean;
}

Member.sync();

export default Member;
