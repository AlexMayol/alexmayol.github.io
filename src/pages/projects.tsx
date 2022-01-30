import type { NextPage } from "next";
import Head from 'next/head'
import Link from 'next/link'


const Projects: NextPage = () => {
  return (
    <>
    <Head>
        <title>What I've been working on</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full">
         <Link href='/'>
          <a className="p-2 text-center tet-xl">Go back</a>
        </Link>
          <h1 className="mb-12 text-5xl">My projects (so far!)</h1>
          <p>
            During my career I've had the chance to work on a wide variety of
            projects: intranets, email builders, ecommerce websites, startup products...
          </p>
      </div>
    </>
  );
};

export default Projects;
