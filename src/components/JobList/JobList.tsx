import { job } from "../../types/types"
import JobCard from "../JobCard/JobCard"

const JobList = ({jobData}:{jobData:job[]}) => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-around bg-[#D8D8D8] pt-10">
        {jobData.map((item:job)=>{
            return(
                <JobCard data={item}/>
            )
        })}
    </div>
  )
}

export default JobList