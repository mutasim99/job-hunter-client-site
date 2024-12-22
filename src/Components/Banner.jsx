import React from 'react';
import { motion } from "motion/react"
import team1 from '../assets/TeamImage/team1.jpg'
import team2 from '../assets/TeamImage/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100 min-h-96 max-w-5xl mx-auto mt-14">
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                <div>
                    <motion.img
                        animate={{y:[20, 70, 20]}}
                        transition={{duration:10, repeat:Infinity}}
                        src={team1}
                        className="w-64 rounded-[35px] border-b-[6px] border-l-[6px] border-blue-500 shadow-2xl" />
                    <motion.img
                        animate={{x:[100, 150, 100]}}
                        transition={{duration:10, repeat:Infinity}}
                        src={team2}
                        className="w-64 rounded-[35px] border-b-[6px] border-l-[6px] border-blue-500 shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <motion.h3 animate={{x:[0, 50, 0]}} transition={{ duration:5, repeat:Infinity}} className="text-4xl font-bold">Find your <motion.span animate={{color:['#7E57C2', '#EC407A', '#FFEB3B']}} transition={{duration:5, repeat:Infinity}}>job</motion.span> and good luck!!</motion.h3>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;