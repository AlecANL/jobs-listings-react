import { useState } from 'react';
import data from 'assets/data.json';
import JobItem from '../job-item/JobItem';
import './job-list.css';

const customData = data.map(job => {
  return {
    ...job,
    tech_tags: [...job?.tools, job?.level, job?.role, ...job?.languages],
  };
});

function JobList() {
  const [listJobs] = useState(customData);
  function filteringByTechTag(tag) {
    return customData.filter(x => x.tech_tags.includes(tag));
  }
  console.log(filteringByTechTag('Senior'));
  console.log(listJobs);
  return (
    <main className="list-jobs">
      {listJobs.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
}

export default JobList;
