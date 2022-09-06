import { getMembers } from '../../api/api';

export const getMemberData = async () => {
  const members = await getMembers();

  let EXEC = [];
  let PM = [];
  let DS = [];
  let SWE = [];
  let HRD = [];
  let ALUM = [];

  members.forEach((member) => {
    if (member['Member Status'] === 'Current Member') {
      const team = member.Role;
      if (member["Graduation Year"] < 2023){
        ALUM.push(member);
      } else if(member.Exec) {
        EXEC.push(member);
      } else if (team === 'Product Manager') {
        PM.push(member);
      } else if (team === 'Data Science Engineer') {
        DS.push(member);
      } else if (team === 'Software Engineer') {
        SWE.push(member);
      } else if (team === 'Hardware Engineer') {
        HRD.push(member);
      }
    } else if (member['Member Status'] === 'Alumni') {
      ALUM.push(member);
    }
  });

  return { EXEC, PM, DS, SWE, HRD, ALUM };
};

export default { getMemberData };
