import { Spacer } from "@chakra-ui/react";
import { Space } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Chanpaisit</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row">
        <Sidebar />
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
          <h1 className="text-5xl font-extrabold leading-normal text-black md:text-[4rem]">
            <span className="text-red-400">Chan</span>paisit Nattapol
          </h1>
          <h2 className="text-2xl font-bold text-black md:text-[2rem] pb-8">
            I'm Chan, Math & ML enthusiast. <br/> Ex-Full time Physics tutor.
          </h2>
          <h3 className="text-base text-black md:text-[1.2rem] pb-8 max-w-3xl">
            I'm a Freshman Undergraduate in <span className="font-bold">Electrical and Electronics Engineering</span> at 
            <span className="font-bold"> Nanyang Technological University, Singapore</span>. I studied at Kamnoetvidya Science Academy, Thailand, 
            for High School.
          </h3>
          <h3 className="text-base text-black md:text-[1.2rem] pb-8 max-w-3xl">
            I'm interested in Computer Vision, specifically in Self-Supervised & Unsupervised Learning. 
            My first experience in CV was when I conducted research <span className="font-bold">
            "Parallel-curve detection method based on Hough Transform".</span> I've also explored Attention Mechanism 
            and its implementation in image segmentation in <span className="font-bold">
              "Deeply-Supervised CNN with Attention Mechanism Integration for Image Segmentation."</span>
          </h3>
          <h3 className="text-base text-black md:text-[1.2rem] pb-8 max-w-3xl">
            Aside from CV, I also won <span className="font-bold">Silver medal</span> in <span className="font-bold">52nd International Physics Olympid </span>
              in 2022 at Switzerland. I am also a Physics Tutor for Physics Olympiad Preparation, with my students obtaining 
             2 Gold medals, 2 Silver medals & a Bronze medal in Thailand Physics Olympiad. Throughout my journey in Physics Olympiad, 
             Physics has equipped me with strong 
             numerical method, data analytics & calculus background.
          </h3>
          <h3 className="text-base text-black md:text-[1.2rem] pb-8 max-w-3xl">
            I also spent some of my leisure time on software engineering & game development. I have built a web app 
            for guitar tab transcription & an interactive learning platform, SARAtree. 
          </h3>

          {/* <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2">
            <TechnologyCard
              name="NextJS"
              description="The React framework for production"
              documentation="https://nextjs.org/"
            />
            <TechnologyCard
              name="TypeScript"
              description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
              documentation="https://www.typescriptlang.org/"
            />
          </div> */}
        </main>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  description,
  documentation,
}) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-red-200 
      p-6 shadow-xl duration-200 motion-safe:hover:scale-105 hover:border-red-500">
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
