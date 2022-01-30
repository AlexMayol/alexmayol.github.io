import type { NextPage } from "next";
import Link from 'next/link'


const Home: NextPage = () => {


  return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl text-white">Alejandro Mayol<span className="sr-only">, software engineer and frontend developer</span></h1>
        <ul className="flex mt-12 space-x-8">
          <li>
            <Link href='/portfolio'>
              <a className="p-2">My portfolio</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className="p-2">My projects</a>
            </Link>
          </li>
          <li>
             <Link href='/contact'>
              <a className="p-2">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
  
  );
};

export default Home;
