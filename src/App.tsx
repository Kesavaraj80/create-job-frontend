import { useState } from 'react';
import './App.css';
import Button from './components/Buttons/Button';
import JobCard from './components/JobCard/JobCard';
import CreateJobModal from './components/Modal/CreateJobModal';

function App() {

  const [show, setShow] = useState(false)
  return (
    <div className="h-auto">
      <div className='mt-1'>
        <Button className='test' variant='primary' disabled={false} onClick={() => setShow(true)} height='h-[72px]' width='w-[40px]' fontSize='text-[16px]' fontWeight='font-[500]'>Create job</Button>
      </div>
      <div className='h-auto w-full'>
        <div className='flex flex-wrap justify-center'>
          <JobCard />
        </div>
      </div>
      {show && <CreateJobModal show={show} setShow={setShow} />}
    </div>
  );
}

export default App;
