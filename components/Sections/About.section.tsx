import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import { AlexHu } from "./AnimateSVG";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="text-3xl font-bold text-white">Alex Hu</p>
        <p className="mt-1 text-lg text-gray-300">
          Full Stack Developer, Compeditive Programmer, and a Student
        </p>

        <p className="mt-4 text-gray-400">
          Passionate about new technologies, building exciting products,
          <br />
          compeditive programming, fitness and communities. <br />
        </p>

        <Link href="/assests/Alex_Hu_Resume_2022.pdf" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            rel="noopener noreferrer"
            download
          >
            See My Resume
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <AlexHu />
        <Image
          src="/assests/Friendly Ones - Alex.png"
          width="300"
          height="350"
          className="mr-8 rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
