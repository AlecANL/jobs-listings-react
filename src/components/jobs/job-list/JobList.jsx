import customData from '../../../assets/data.json';

function JobList() {
  function filteringByTechTag(tag) {
    return customData.filter(x => x.languages.includes(tag));
  }
  console.log(filteringByTechTag('HTML'));
  console.log(customData);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default JobList;
