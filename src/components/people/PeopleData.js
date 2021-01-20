import { getMembers } from "../../api/api";

export const getMemberData = async () => {
  const members = await getMembers();

  let EXEC = [];
  let PM = [];
  let DS = [];
  let SWE = [];
  let HRD = [];

  console.log(members);
  members.forEach((member) => {
    if (member.status === "Current Member") {
      const team = member.Role;
      if (member.Exec) {
        EXEC.push(member);
      } else if (team === "Product Manager") {
        PM.push(member);
      } else if (team === "Data Science Engineer") {
        DS.push(member);
      } else if (team === "Software Engineer") {
        SWE.push(member);
      } else if (team === "Hardware Engineer") {
        HRD.push(member);
      }
    }
  });

  return { EXEC, PM, DS, SWE, HRD };
};

// Removing old CMS integration
/*
export const getMemberData = async () => {
  const members = await getMembers();

  let EXEC = [];
  let CRM = [];
  let DS = [];
  let PS = [];

  members.forEach(member => {
    if (member.team == "EXEC") {
      CRM.push(member);
    }
    else if (member.team == "CRM") {
      CRM.push(member);
    } else if (member.team == "DS") {
      DS.push(member);
    } else if (member.team == "PS") {
      PS.push(member);
    }
  });

  return { EXEC, CRM, DS, PS };
};
 */
export default { getMemberData };
