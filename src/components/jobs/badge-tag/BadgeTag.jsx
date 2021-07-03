import './badge-tag.css';

function BadgeTag({ tags }) {
  return (
    <div className="detail-place">
      {tags.map((tag, i) => (
        <span key={i}>{tag}</span>
      ))}
    </div>
  );
}

export default BadgeTag;
