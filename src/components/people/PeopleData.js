import { getMembers } from "../../api/api";

export const getMemberData = async () => {
  const members = await getMembers();

  let CRM = [];
  let DS = [];
  let PS = [];

  members.forEach(member => {
    if (member.team == "CRM") {
      CRM.push(member);
    } else if (member.team == "DS") {
      DS.push(member);
    } else if (member.team == "PS") {
      PS.push(member);
    }
  });

  return { CRM, DS, PS };
};

export default { getMemberData };
