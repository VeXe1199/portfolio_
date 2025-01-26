import data from './profiles.json';

export const getProfiles = () => {
  return data;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
