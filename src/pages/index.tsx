import Navbar from "../components/Navbar";
import Main from "../components/Showcase/Main";
export default function Home() {
  return (
    <div className='font:sans w-full bg-gray-900 h-screen px-12 relative'>
      <div className='absolute right-0 top-0 w-full px-12'>
        <Navbar />
      </div>
      <div className='h-screen px-12'>
        <Main />
      </div>
    </div>
  );
}
