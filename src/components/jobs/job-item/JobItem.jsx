import BadgeHeading from '../badge-heading/BadgeHeading';
import BadgeTag from '../badge-tag/BadgeTag';
import BadgeTech from '../badge-tech/BadgeTech';
import './job-item.css';

function JobItem(props) {
  return (
    <article className="jobItem">
      <div className="jobItem-cover">
        <img
          src={props.logo}
          alt={`${props.company} logo`}
          width={48}
          height={48}
        />
      </div>
      <div className="jobItem-Detail">
        <BadgeHeading
          new={props.new}
          featured={props.featured}
          company={props.company}
        />
        <div className="job-title">{props.position}</div>
        <BadgeTag tags={[props.contract, props.postedAt, props.location]} />
      </div>
      <hr />
      <BadgeTech tags={props.tech_tags} />
    </article>
  );
}

export default JobItem;
