import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const {_id ,title, location, salaryRange, description, company, requirements, company_logo } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:translate-y-[-10px] scale-105 transition-transform duration-300 my-2">
            <div className='flex items-center gap-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className='text-lg font-semibold'>{company}</h4>
                    <p className='flex items-center gap-1'> <MdOutlineLocationOn></MdOutlineLocationOn> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-accent">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex  gap-1 flex-wrap my-2'>
                    {
                        requirements.map((skill, index) => <p className='btn' key={index}>{skill}</p>)
                    }
                </div>
                <div className="card-actions items-center justify-end">
                    <p>{salaryRange.min} - {salaryRange.min} {salaryRange.currency}</p>
                    <Link to={_id}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;