import { useContext } from 'react';
import JobItem from '../job-item/JobItem';
import ListJobsContext from 'context/ListJobs/ListJobsContext';
import './job-list.css';

function JobList() {
  const listJobsStore = useContext(ListJobsContext);

  return (
    <main className="list-jobs">
      {listJobsStore.listJobs.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
}

export default JobList;
