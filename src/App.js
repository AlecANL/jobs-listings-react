import './App.css';
import Header from './components/header/Header';
import JobItem from './components/jobs/job-item/JobItem';
import JobList from './components/jobs/job-list/JobList';
import Wrapper from './components/wrapper/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="App">
          <JobItem />
          <JobItem />
          <JobItem />
          <JobList />
          <h1>Hello world</h1>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
