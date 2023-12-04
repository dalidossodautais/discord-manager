import Member from "../collections/Member";

const getMemberId = async (discordId: string): Promise<number> => {
  const [member] = await Member.findOrCreate({ where: { discordId } });
  return member.id;
};

export default getMemberId;
