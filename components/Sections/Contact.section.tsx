import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";
import Link from "next/link";

const Contact: NextComponentType = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/imalexhu" />

        <Link href="mailto:imalexhu@gmail.com" passHref>
          <a
            rel="noopener noreferrer"
            aria-label="contact icon"
            className="rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2"
          >
            <MdEmail />
          </a>
        </Link>

        <Icon
          icon={<AiFillLinkedin />}
          url="https://www.linkedin.com/in/alex-hu-20026b20a/"
        />
      </div>
    </div>
  );
};

export default Contact;
