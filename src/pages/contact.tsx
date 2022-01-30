import type { NextPage } from "next";
import Head from 'next/head'
import Link from 'next/link'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Get in touch with me</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full">
        <Link href='/'>
          <a className="p-2 text-center tet-xl">Go back</a>
        </Link>
        <ul className="flex mt-12 space-x-8">
          <li>
            <a href="https://www.linkedin.com/in/alejandro-mayol-carrion" target='_blank'>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/AlexMayol" target='_blank'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
