"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[1200px] scroll-mt-28 sm:mb-40 px-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Left: Profile image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=600&q=100"
            alt="Ricardo portrait"
            width={300}
            height={300}
            quality={95}
            className="rounded-full w-[300px] h-[300px] object-cover border-[5px] border-[#f0f0f0] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
          />
        </motion.div>

        {/* Right: Bio + Skills */}
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-[1.1rem] leading-[1.7] text-[#444] dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
          </motion.p>

          <motion.p
            className="text-[1.1rem] leading-[1.7] text-[#444] dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my dog. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">history and philosophy</span>. I'm also
            learning how to play the guitar.
          </motion.p>

          {/* Skills subsection */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[1.3rem] font-semibold mb-4 dark:text-gray-100">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill, index) => (
                <motion.span
                  className="bg-[#f0f0f0] dark:bg-white/10 dark:text-white/80 px-4 py-2 rounded-[20px] text-[0.9rem] font-medium"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
