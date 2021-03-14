import { getProjects } from '../../api/api';

export const getProjectsData = async () => {
	const projects = await getProjects();
	console.log(projects);
};
export default { getProjectsData };
