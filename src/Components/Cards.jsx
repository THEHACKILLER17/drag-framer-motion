import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1,
        boxShadow: "0px 10px 20px rgba(0,0,0,0)"
       }}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 30}}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-700 text-white px-8 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm  mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer">
            {data.close ? (
              <IoMdClose />
            ) : (
              <MdFileDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center cursor-crosshair`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
