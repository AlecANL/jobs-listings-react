import './badge-tag.css';

function BadgeTag({ tags }) {
  return (
    <div className="detail-place">
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default BadgeTag;
