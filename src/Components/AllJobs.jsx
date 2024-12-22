import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto'>
            {
                jobs.map(job => <JobCard 
                    key={job._id}
                    job={job}
                    ></JobCard>)
            }
        </div>
    );
};

export default AllJobs;