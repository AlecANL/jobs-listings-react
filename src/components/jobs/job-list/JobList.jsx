import { useContext, useEffect } from 'react';
import JobItem from '../job-item/JobItem';
import ListJobsContext from 'context/ListJobs/ListJobsContext';
import './job-list.css';

function JobList() {
  const {
    customListJobs: listJobs,
    setCustomListJobs,
    currentData,
  } = useContext(ListJobsContext);

  useEffect(() => {
    setCustomListJobs(currentData);
  }, [currentData, setCustomListJobs]);

  // function searchedByTag(arr) {
  //   const searched = listJobs.filter(job => {
  //     return job.tech_tags.includes(arr[arr.length - 1]);
  //   });
  // }

  return (
    <main className="list-jobs">
      {listJobs.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
}

export default JobList;
