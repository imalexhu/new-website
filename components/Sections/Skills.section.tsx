import Link from "next/link";
import { BsArrowRightShort, VscTools } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <div className="flex">
        <VscTools size="30" />
        <p className="ml-4 text-3xl font-bold text-white">
          Skills in my Tool Box{" "}
        </p>
      </div>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-xl  text-slate-300 duration-100 hover:ml-2 hover:cursor-pointer">
          <Link href="https://github.com/t3-oss/create-t3-app" passHref>
            <span className=" bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] bg-clip-text font-extrabold text-transparent">
              T3
            </span>
          </Link>
          &nbsp;as my perfered stack for personal projects
        </p>
        <div className="ml-4">
          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">NextJS</span>
            &nbsp;as my Frontend Framework
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Typescript </span>
            &nbsp;as my main language
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Tailwind CSS </span>
            &nbsp;as my CSS framework
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Chakra UI </span>
            &nbsp;if I need a components library
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white"> tRPC </span>
            &nbsp;as my API layer
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white"> Prisma </span>
            &nbsp;as my ORM for my database
          </p>
        </div>
      </div>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-xl  text-slate-300 duration-100 hover:ml-2 hover:cursor-pointer">
          <Link href="https://github.com/t3-oss/create-t3-app" passHref>
            <span className=" bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] bg-clip-text font-extrabold text-transparent">
              Tools I have used
            </span>
          </Link>
          &nbsp;in a proffessional context
        </p>
        <div className="ml-4">
          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Laravel </span>
            &nbsp;@PAC Digital
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">
              Node & Express & Websockets & Jest
            </span>
            &nbsp;@PAC Digital
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">JIRA & Bitbucket</span>
            &nbsp;@PAC Digital
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Highly Performant C++</span>
            &nbsp;@Akuna Capital
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">Docker & Gitlab</span>
            &nbsp;@Akuna Capital
          </p>
        </div>
      </div>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-xl  text-slate-300 duration-100 hover:ml-2 hover:cursor-pointer">
          <Link href="https://github.com/t3-oss/create-t3-app" passHref>
            <span className=" bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] bg-clip-text font-extrabold text-transparent">
              Other Technical Skills
            </span>
          </Link>
          &nbsp;I am confident in
        </p>
        <div className="ml-4">
          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">C++</span>
            &nbsp;as my compeditive programming language
          </p>

          <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 duration-100 hover:ml-2 ">
            <BsArrowRightShort size="30" />
            <span className="text-white">MongoDB & Mongoose</span>
            &nbsp;from previous Projects
          </p>
        </div>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">reactjs</span>,{" "}
        <span className="text-white">being really good at cooking </span>{" "}
      </p>
    </div>
  );
};

export default Skills;
