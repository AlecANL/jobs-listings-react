import FilterJob from 'components/filter-job/FilterJob';
import Header from './components/header/Header';
import JobList from './components/jobs/job-list/JobList';
import Wrapper from './components/wrapper/Wrapper';
import ContextStore from 'context/ListBadges/ContextStore';
import ListJobsStore from 'context/ListJobs/ListJobsStore';
import './App.css';

function App() {
  return (
    <>
      <ContextStore>
        <ListJobsStore>
          <Wrapper>
            <Header />
            <FilterJob />
            <JobList />
          </Wrapper>
        </ListJobsStore>
      </ContextStore>
    </>
  );
}

export default App;
