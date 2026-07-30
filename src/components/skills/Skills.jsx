import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiPhp, SiCanva, SiCodeigniter, SiCpanel, SiObsstudio, SiLinux, SiCloudflare,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaRobot } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex md:flex-col">
          <div className="left flex-1 w-full">
            <p data-aos="fade-up" className="text-gray-700 font-medium w-[100%]">
              Here are my skills.
            </p>
            <div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
              <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                <ProgressBar logo={<FaNetworkWired />} name={"MikroTik"} value={90} />
                <ProgressBar logo={<FaServer />} name={"Network"} value={85} />
                <ProgressBar logo={<FaRobot />} name={"n8n"} value={80} />
                <ProgressBar logo={<SiPhp />} name={"PHP"} value={70} />
                <ProgressBar logo={<AiFillCloud />} name={"Proxmox"} value={70} />
              </div>
            </div>
          </div>
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox logo={<SiCanva />} black={"white"} white={"black"} skill={"Canva"} />
              <SkillBox logo={<SiCodeigniter />} black={"white"} white={"black"} skill={"CodeIgniter"} />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox logo={<SiLinux />} black={"black"} white={"white"} skill={"Linux"} />
              <SkillBox logo={<FaNetworkWired />} black={"black"} white={"white"} skill={"MikroTik"} />
              <SkillBox logo={<SiCloudflare />} black={"black"} white={"white"} skill={"Cloudflare"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;