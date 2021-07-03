import './badge-tech.css';

function BadgeTech({ tags }) {
  return (
    <div className="techTags">
      {tags.map((tag, i) => (
        <span key={i}>{tag}</span>
      ))}
    </div>
  );
}

export default BadgeTech;
