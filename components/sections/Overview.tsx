import { BackpackIcon, EnvelopeClosedIcon, FileTextIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import gbcc from "@/public/logos/profile-pic (2).png";

export const Overview = () => {
  return (
    <section
      id="overview"
      className="container h-full min-h-[666px] flex flex-col text-center justify-center items-center pt-8 md:pt-16 space-y-8 md:space-y-12"
    >
      <Image
        src={gbcc}
        alt="Profile Picture"
        priority={true}
        className="rounded-xl shadow-lg h-[220px] w-[210px] mt-12 md:mt-0 md:h-[300px] md:min-w-[300px]"
      />
      <p className="flex flex-col md:flex-row flex-wrap gap-3">
        <span className="text-4xl md:text-6xl">Hi, I&#39;m</span>
        <strong className="whitespace-nowrap text-6xl">Deep.</strong>
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7">
        <Link href="#contact">
          <Button className="text-lg h-14 flex w-72 md:w-48 gap-2">
            <EnvelopeClosedIcon className="h-5 w-5" />
            Contact Me
          </Button>
        </Link>
        <Link href="#experience">
          <Button className="text-lg h-14 flex w-72 md:w-48 gap-2">
            <BackpackIcon className="h-5 w-5" />
            Experience
          </Button>
        </Link>
        <Link
          href="https://drive.google.com/file/d/12F8wl0iiS79SqY9zG3Jkn1-RHoh6dmL2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-lg h-14 flex w-72 md:w-48 gap-2">
            <FileTextIcon className="h-5 w-5" />
            Resume
          </Button>
        </Link>
      </div>
    </section>
  );
};
