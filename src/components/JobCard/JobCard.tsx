import { job } from '../../types/types'
import Icon from '../assets/Icon.svg'
import Button from '../Buttons/Button'
import Heading from '../Heading/Heading'

const JobCard = ({ data }: { data: job }) => {
    return (
        <div className="w-[830px] h-[320px] rounded-2xl p-6 bg-secondary border border-[#E6E6E6]">
            <div className="h-full w-full flex">
                <div className='h-full w-auto'>
                    <img src={Icon} alt="icon" />
                </div>
                <div className='h-full ml-2 w-auto'>
                    <div className='h-auto w-auto flex flex-col'>
                        <Heading className='' fontSize='text-[24px]' fontWeight='font-[400]' width='w-auto' height='h-[32px]' >{data['job-title']}</Heading>
                        <Heading className='' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >{data.company} - {data.industry}</Heading>
                        <Heading className='text-[#4D4D4D]' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >{data.location} ({data['remote-type']})</Heading>
                    </div>
                    <div className='h-auto w-auto flex flex-col mt-6'>
                        <Heading className='' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >Part-Time (9.00 am - 5.00 pm IST)</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >Experience ({data['min-exp']} - {data['max-exp']} years)</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >INR (₹) {data['min-salary']} - {data['max-salary']} / Month</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-auto' height='h-[24px]' >{data['total-employees']} employees</Heading>
                    </div>
                    <div className='h-auto w-auto mt-4'>
                        <Button className='' variant='primary' disabled={false} height='h-[40px]' width='w-auto' fontSize='text-[16px]' fontWeight='font-[500]'>Apply Now</Button>
                        <Button className='ml-6' variant='secondary' disabled={false} height='h-[40px]' width='w-auto' fontSize='text-[16px]' fontWeight='font-[500]'>External Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard