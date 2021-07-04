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
  const [listJobs, setListJobs] = useState(customData);

  function searchedByTag(tag) {
    const newData = listJobs.filter(job => {
      return job.tech_tags.includes(tag);
    });
    console.log(newData);
    setListJobs(newData);
  }
  const values = {
    listJobs,
    setListJobs,
    searchedByTag,
    currentData: customData,
  };
  return (
    <ListJobsContext.Provider value={values}>
      {children}
    </ListJobsContext.Provider>
  );
}
export default ListJobsStore;
