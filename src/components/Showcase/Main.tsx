import Contacts from "./Contacts";
import Skills from "./Skills";
const Main = () => {
  return (
    <div className='md:flex md:flex-1 md:w-full md:h-full sm:inline-block  '>
      <div className='absolute text-offwhite bottom-0 left-0'>
        Under active Devlopment{" "}
      </div>
      <Contacts />
      <Skills />
    </div>
  );
};

export default Main;
