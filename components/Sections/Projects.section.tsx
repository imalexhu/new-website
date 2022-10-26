import type { NextComponentType } from "next";

import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { Icon } from "../Misc/Icon.component";

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://rsp-surprise-pog.vercel.app/" passHref>
          <a
            className="h-[11rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">RSP</p>
              <p>System for managing Leetcode and Mock Interviews</p>
              <div className="mt-2"></div>
              <Icon
                icon={<AiOutlineGithub />}
                url="https://github.com/imalexhu/rsp-surprise"
              />
            </div>
          </a>
        </Link>

        <Link href="" passHref>
          <a
            className="h-[11rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Tallest Streamer</p>
              <p>An online survey that polls for the tallest streamer</p>
              <div className="mt-2"></div>

              <Icon
                icon={<AiOutlineGithub />}
                url="https://github.com/imalexhu"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
