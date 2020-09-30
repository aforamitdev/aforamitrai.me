import Navbar from "../components/Navbar";
import Main from "../components/Showcase/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amitkumar Rai</title>
      </Head>

      <div className='font:sans w-full bg-gray-900 md:h-screen px-12 relative  '>
        <div className=' hidden sm:hidden md:block  absolute right-0 top-0 w-full px-12 '>
          <Navbar />
        </div>
        <div className=' md:h-screen px-12 sm:space-y-64'>
          <Main />
        </div>
      </div>
    </>
  );
}
