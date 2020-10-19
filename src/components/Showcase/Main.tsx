import Contacts from "./Contacts";
import Skills from "./Skills";
const Main = () => {
  return (
    <div className='min-h-screen min-w-full mx-auto flex flex-col  lg:flex lg:justify-center '>
      <div className="mx-auto pb-10 pt-10 space-y-12 lg:flex  lg:space-x-32 ">

      <Contacts />
      <Skills />
      </div>
      <div className='absolute text-offwhite bottom-0 left-0'>
        Under active Devlopment{" "}
      </div>
    </div>
  );
};

export default Main;
