import RemoveIcon from 'assets/images/icon-remove.svg';
import ListContext from 'context/ListBadges/ListContext';
import ListJobsContext from 'context/ListJobs/ListJobsContext';
import { useContext, useEffect } from 'react';
import './filter-job.css';

function FilterJob() {
  const badgeStore = useContext(ListContext);
  const jobsStore = useContext(ListJobsContext);
  const isVisible = badgeStore.listBadges.length > 0 ? 'visible' : 'hidden';

  useEffect(() => {
    if (badgeStore.listBadges.length <= 0) {
      jobsStore.setListJobs(jobsStore.currentData);
    }
  }, [badgeStore.listBadges.length]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleReset() {
    badgeStore.setListBadges([]);
    jobsStore.setListJobs(jobsStore.currentData);
  }
  return (
    <section className={`filterJob ${isVisible}`}>
      <div className="badges-section">
        {badgeStore.listBadges.map((badge, i) => (
          <BadgeSearched key={i} title={badge} />
        ))}
      </div>
      <div className="clear-section">
        <button className="btn-clear" onClick={handleReset}>
          Clear
        </button>
      </div>
    </section>
  );
}

function BadgeSearched({ title }) {
  const badgeStore = useContext(ListContext);
  // const jobsStore = useContext(ListJobsContext);

  function handleDeleteBadge() {
    const newArr = badgeStore.listBadges.filter(badge => badge !== title);
    badgeStore.setListBadges(newArr);
  }
  return (
    <button className="badge-searched" onClick={handleDeleteBadge}>
      <span>{title}</span>
      <img src={RemoveIcon} alt="remove icon" />
    </button>
  );
}

export default FilterJob;
