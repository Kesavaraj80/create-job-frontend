import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { createJobApi } from '../../api';
import { job } from '../../types/types';
import Button from '../Buttons/Button';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';

interface Props {
    show: boolean;
    setShow: (value: boolean) => void;
}

export default function CreateJobModal({ show, setShow }: Props) {
    const [next, setNext] = useState(false);
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [industry, setIndustry] = useState('')
    const [location, setLocation] = useState('');
    const [remoteType, setRemoteType] = useState('')
    const [minExp, setMinExp] = useState('')
    const [maxExp, setMaxExp] = useState('')
    const [minSal, setMinSal] = useState('');
    const [maxSal, setMaxSal] = useState('')
    const [totalEmp, setTotalEmp] = useState('')
    const [applyType, setApplyType] = useState('')


    const handleNext = () => {
        if (title && name && industry) {
            setNext(true);
        }
    }

    const handleSubmit = () => {
        const data: job = {
            "job-title": title,
            "company": name,
            "industry": industry,
            "location": location,
            "remote-type": remoteType,
            "total-employees": totalEmp,
            "apply-type": applyType,
            "min-exp": minExp,
            "max-exp": maxExp,
            "min-salary": minSal,
            "max-salary": maxSal,
        }

        createJobApi(data).then((res) => {
            if (res) {
                setShow(!show)
            }
        }).catch((e) => console.error(e))
    }

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setShow(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className=" h-[567px] w-[577px] transform overflow-hidden rounded-2xl bg-secondary p-8 border border-[#E6E6E6] transition-all">
                                <div className='h-full w-full'>
                                    <div className='flex justify-between'>
                                        <Heading className='text-left' fontSize='text-[20px]' fontWeight='font-[400]' width='w-[252.5px]' height='h-[28px]'>Create a job</Heading>
                                        <Heading className='text-right' fontSize='text-[16px]' fontWeight='font-[500]' width='w-[252.5px]' height='h-[24px]'>{next ? "Step 2" : "Step 1"}</Heading>
                                    </div>
                                    {next ?
                                        <>
                                            <div className='flex h-auto w-auto mt-6'>
                                                <div className='flex flex-col'>
                                                    <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[60px]' height='h-[20px]'>Experience</Heading>
                                                    <div className='flex'>
                                                        <Input className='border-[#E6E6E6]' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'Minimum'} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinExp(e.target.value)} />
                                                        <Input className='border-[#E6E6E6] ml-6' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'Maximum'} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxExp(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex h-auto w-auto mt-6'>
                                                <div className='flex flex-col'>
                                                    <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[45px]' height='h-[20px]'>Salary</Heading>
                                                    <div className='flex'>
                                                        <Input className='border-[#E6E6E6]' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'Minimum'} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinSal(e.target.value)} />
                                                        <Input className='border-[#E6E6E6] ml-6' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'Maximum'} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxSal(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col h-auto mt-6'>
                                                <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[110px]' height='h-[20px]'>Total employee</Heading>
                                                <Input className={'border-[#E6E6E6]'} fontSize='text-[14px]' fontWeight='font-[500]' width='w-[513px]' height='h-[36px]' holder={'ex. 100'} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTotalEmp(e.target.value)} />
                                            </div>
                                            <div className='flex flex-col h-auto mt-6'>
                                                <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[78px]' height='h-[20px]'>Apply type</Heading>
                                                <div className='flex mt-1'>
                                                    <div className='flex justify-center items-center'>
                                                        <Input className={''} height='h-[20px]' type='radio' width='w-[20px]' fontSize={''} fontWeight={''} holder={''} name="apply-type" value='quick-apply' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApplyType(e.target.value)} />
                                                        <Heading className='text-holder ml-1' fontSize='text-[14px]' fontWeight='font-[400]' width='w-[83px]' height='h-[20px]'>Quick Apply</Heading>
                                                    </div>
                                                    <div className='flex justify-center items-center ml-6'>
                                                        <Input className={''} height='h-[20px]' type='radio' width='w-[20px]' fontSize={''} fontWeight={''} holder={''} name="apply-type" value='external-apply' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApplyType(e.target.value)} />
                                                        <Heading className='text-holder ml-1' fontSize='text-[14px]' fontWeight='font-[400]' width='w-[99px]' height='h-[20px]'>External apply</Heading>
                                                    </div>
                                                </div>
                                            </div>
                                        </> :
                                        <div>
                                            <div className='flex flex-col h-auto mt-6'>
                                                <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[64px]' height='h-[20px]'>Job title<span className='text-[red]'>*</span></Heading>
                                                <Input className={title ? 'border-[#E6E6E6]' : "focus:border-[#D86161]"} fontSize='text-[14px]' fontWeight='font-[500]' width='w-[513px]' height='h-[36px]' holder={'ex. UX UI Designer'} required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} type={''} />
                                            </div>
                                            <div className='flex flex-col h-auto mt-6'>
                                                <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[123px]' height='h-[20px]'>Company name<span className='text-[red]'>*</span></Heading>
                                                <Input className={name ? 'border-[#E6E6E6]' : "focus:border-[#D86161]"} fontSize='text-[14px]' fontWeight='font-[500]' width='w-[513px]' height='h-[36px]' holder={'ex. Google'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type={''} />
                                            </div>
                                            <div className='flex flex-col h-auto mt-6'>
                                                <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[65px]' height='h-[20px]'>Industry<span className='text-[red]'>*</span></Heading>
                                                <Input className={industry ? 'border-[#E6E6E6]' : "focus:border-[#D86161]"} fontSize='text-[14px]' fontWeight='font-[500]' width='w-[513px]' height='h-[36px]' holder={'ex. Information Technology '} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIndustry(e.target.value)} type={''} />
                                            </div>
                                            <div className='flex h-auto w-auto mt-6'>
                                                <div className='flex flex-col'>
                                                    <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[60px]' height='h-[20px]'>Location</Heading>
                                                    <Input className='border-[#E6E6E6]' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'ex. Chennai'} type={''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} />
                                                </div>
                                                <div className='flex flex-col ml-6'>
                                                    <Heading className='' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[60px]' height='h-[20px]'>Remote type</Heading>
                                                    <Input className='border-[#E6E6E6]' fontSize='text-[14px]' fontWeight='font-[500]' width='w-[244.5px]' height='h-[36px]' holder={'ex. In-office'} type={''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRemoteType(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div className='h-auto mt-24 float-right'>
                                        <Button className={undefined} variant='primary' disabled={!title || !name || !industry || !location || !remoteType} height='h-[72px]' width='w-[40px]' fontSize='text-[16px]' fontWeight='font-[500]' onClick={next ? handleSubmit : handleNext}>{next ? 'Save' : 'Next'}</Button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
