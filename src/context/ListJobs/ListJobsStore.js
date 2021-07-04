import { useState } from 'react';
import data from 'assets/data.json';
import ListJobsContext from './ListJobsContext';

const customData = data.map(job => {
  return {
    ...job,
    tech_tags: [...job?.tools, job?.level, job?.role, ...job?.languages],
  };
});

function ListJobsStore({ children }) {
  const [customListJobs, setCustomListJobs] = useState([]);

  function searchedByTag(tag, list = customData) {
    const newData = list.filter(job => {
      return job.tech_tags.includes(tag);
    });
    setCustomListJobs(newData);
  }
  const values = {
    searchedByTag,
    customListJobs,
    setCustomListJobs,
    currentData: customData,
  };
  return (
    <ListJobsContext.Provider value={values}>
      {children}
    </ListJobsContext.Provider>
  );
}
export default ListJobsStore;
