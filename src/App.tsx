import { useEffect, useState } from 'react';
import { getJobsApi } from './api';
import './App.css';
import Button from './components/Buttons/Button';
import JobList from './components/JobList/JobList';
import CreateJobModal from './components/Modal/CreateJobModal';
import { job } from './types/types';

function App() {

  const [show, setShow] = useState(false)
  const [jobData, setJobData] = useState<job[]>([])

  useEffect(() => {
    getJobsApi().then((res) => setJobData(res)).catch((err) => console.error(err))
  }, [show])
  return (
    <div className="h-screen ">
      <div className='h-[5vh]'>
        <Button className='test' variant='primary' disabled={false} onClick={() => setShow(true)} height='h-[72px]' width='w-[40px]' fontSize='text-[16px]' fontWeight='font-[500]'>Create job</Button>
      </div>
      <div className='h-[95vh] w-full '>
        <JobList jobData={jobData} />
      </div>
      {show && <CreateJobModal show={show} setShow={setShow} />}
    </div>
  );
}

export default App;
