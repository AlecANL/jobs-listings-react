import DemoPicture from '../../../assets/images/photosnap.svg';

import './job-item.css';

function JobItem() {
  return (
    <article className="jobItem">
      <div className="jobItem-cover">
        <img src={DemoPicture} alt=" demo" width={48} height={48} />
      </div>
      <div className="jobItem-Detail">
        <div className="detail-heading">
          <span className="title">Photosnap</span>
          <span className="tag is-tag-green">new</span>
          <span className="tag is-tag-black">Featured</span>
        </div>
        <div className="job-title">Senior Frontend Developer</div>
        <div className="detail-place">
          <span>1d ago</span>
          <span>Full Time</span>
          <span>USA only</span>
        </div>
      </div>
      <hr />
      <div className="jobItem-techTags">
        <span>Frontend</span>
        <span>Senior</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </article>
  );
}

export default JobItem;
