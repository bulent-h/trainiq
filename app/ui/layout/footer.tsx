/* eslint-disable @next/next/no-img-element */
// import { Link } from 'react-router-dom'

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        className="relative -z-20 bg-white dark:bg-gray-800"
        // style={{backgroundImage: "url('/image/footer.png)"}}
      >
        <div className="z-10 max-w-5xl py-12 mx-auto">
          <div className="grid grid-cols-1 w-full gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-gray-700 dark:text-white">
            <div className="pl-4">
              <Link href="/" className=" ">
                Home
              </Link>
            </div>

            <div className="pl-4 flex flex-col space-y-2">
              <Link href="/products" className=" ">
                Blog
              </Link>
            </div>
          </div>
        </div>
 
      </footer>
    </>
  );
}
