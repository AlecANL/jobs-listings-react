import ListContext from 'context/ListBadges/ListContext';
import ListJobsContext from 'context/ListJobs/ListJobsContext';
import { useContext } from 'react';
import './badge-tech.css';

function BadgeTech({ tags }) {
  const badgeStore = useContext(ListContext);
  const jobsStore = useContext(ListJobsContext);

  function handleAddBadge(tag) {
    badgeStore.setListBadges(
      Array.from(new Set([...badgeStore.listBadges, tag]))
    );
    searchTagJob(tag);
  }

  function searchTagJob(tag) {
    jobsStore.searchedByTag(tag);
  }

  return (
    <div className="techTags">
      {tags.map((tag, i) => (
        <button key={i} onClick={() => handleAddBadge(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
}

export default BadgeTech;
