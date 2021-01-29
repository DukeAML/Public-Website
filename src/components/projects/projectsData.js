import { getProjects } from '../../api/api';

export const getProjectsData = async () => {
	const projects = await getProjects();
};
export default { getProjectsData };
