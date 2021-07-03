import './App.css';
import Header from './components/header/Header';
import JobList from './components/jobs/job-list/JobList';
import Wrapper from './components/wrapper/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <JobList />
      </Wrapper>
    </>
  );
}

export default App;
