import React from 'react'
import { DiMysql } from 'react-icons/di';
import { FaDocker, FaNodeJs } from 'react-icons/fa';
import { RiAngularjsLine, RiNextjsLine, RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';



const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",

    }
  }
})
const Technologies = () => {
  return (
    <div className="bordder-b border-neutral-800 pb-24">
      <motion.h2  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql className="text-7xl text-#00758f" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiAngularjsLine className="text-7xl text-red-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDocker className="text-7xl text-#2563eb" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies