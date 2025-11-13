import React, { useRef } from 'react'
import Cards from './Cards'
import { motion } from "motion/react"


const Foreground = () => {

  const ref = useRef(null)

    const data = [
      {
        desc: "Project documentation in FRONT-END",
        filesize: "9 MB",
        close: false,
        tag: {isOpen: true, tagtitle: "Download Now", tagColor: "green"}
      },
      {
        desc: "Image assets folder and many more",
        filesize: "3 MB",
        close: false,
        tag: {isOpen: true, tagtitle: "Upload Now", tagColor: "blue"}
      },
      {
        desc: "Source code files and directory",
        filesize: "7 MB",
        close: true,
        tag: {isOpen: false, tagtitle: "Download Now", tagColor: "green"}
      }
    ];


  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap'>
      {data.map((item, index)=>(
        <Cards data={item} reference={ref}/>
      ))}
        
    </div>
  )
}

export default Foreground