import type { NextPage } from "next";
import Head from 'next/head'
import Link from 'next/link'


const Portfolio: NextPage = () => {
  return (
    <>
    <Head>
        <title>My portfolio</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full">
         <Link href='/'>
          <a className="p-2 text-center tet-xl">Go back</a>
        </Link>
        <div className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-5xl ">My porfolio</h1>
          <p>Here are some of the projects I've developed during my career:</p>
          <ul className="space-y-4 list-disc">
              <li>
                   <a href="https://www.npmjs.com/package/localit" target='_blank'>
              Localit: a Open Source Software project that provides a better API for the Browser Storage.
            </a>
              </li>
              <li>
                  <a href="https://github.com/AlexMayol/nextjs-tailwind-typescript-boilerplate" target='_blank'>
                      A NextJS, TypeScript and Tailwind boilerplate, ready to use in any new project.
                  </a>
              </li>
              <li>
                  <a href="https://github.com/AlexMayol/Telegram-Bots" target='_blank'>
                      Telegram Bots
                  </a>
              </li>
              <li>
                  <a href="https://github.com/AlexMayol/Integratur-blog" target='_blank' >
                      Vue.JS SPA blog
                  </a>
              </li>
              <li>
                  <a href="https://github.com/AlexMayol/AccesTitan" target='_blank'>
                      AccesTitan: an A11y checker based on PhantomJS
                  </a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
