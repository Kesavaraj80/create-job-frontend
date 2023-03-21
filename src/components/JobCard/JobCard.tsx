import Icon from '../assets/Icon.svg'
import Button from '../Buttons/Button'
import Heading from '../Heading/Heading'

const JobCard = () => {
    return (
        <div className="w-[830px] h-[320px] rounded-2xl p-6 bg-secondary border border-[#E6E6E6]">
            <div className="h-full w-full flex">
                <div className='h-full w-auto'>
                    <img src={Icon} alt="icon" />
                </div>
                <div className='h-full ml-2 w-auto'>
                    <div className='h-auto w-auto flex flex-col'>
                        <Heading className='' fontSize='text-[24px]' fontWeight='font-[400]' width='w-[172px]' height='h-[32px]' >UX UI Designer</Heading>
                        <Heading className='' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[301px]' height='h-[24px]' >Great Vibes - Information Technology</Heading>
                        <Heading className='text-[#4D4D4D]' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[295px]' height='h-[24px]' >Chennai, Tamilnadu, India (In-office)</Heading>
                    </div>
                    <div className='h-auto w-auto flex flex-col mt-6'>
                        <Heading className='' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[273px]' height='h-[24px]' >Part-Time (9.00 am - 5.00 pm IST)</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[186px]' height='h-[24px]' >Experience (1 - 2 years)</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[249px]' height='h-[24px]' >INR (₹) 30,000 - 50,000 / Month</Heading>
                        <Heading className='mt-2' fontSize='text-[16px]' fontWeight='font-[400]' width='w-[147px]' height='h-[24px]' >51-200 employees</Heading>
                    </div>
                    <div className='h-auto w-auto mt-6'>
                        <Button className='' variant='primary' disabled={false} height='h-[40px]' width='w-[118px]' fontSize='text-[16px]' fontWeight='font-[500]'>Apply Now</Button>
                        <Button className='ml-6' variant='secondary' disabled={false} height='h-[40px]' width='w-[147px]' fontSize='text-[16px]' fontWeight='font-[500]'>External Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard