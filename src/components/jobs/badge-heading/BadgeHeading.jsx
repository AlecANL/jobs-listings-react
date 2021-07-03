import './badge-heading.css';

function BadgeHeading({ featured, new: isNewJob, company }) {
  return (
    <div className="detail-heading">
      <span className="title">{company}</span>
      {isNewJob && <span className="tag is-tag-green">new</span>}
      {featured && <span className="tag is-tag-black">Featured</span>}
    </div>
  );
}

export default BadgeHeading;
