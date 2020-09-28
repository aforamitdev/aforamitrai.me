import Contacts from "./Contacts";
import Skills from "./Skills";
const Main = () => {
  return (
    <div className='flex flex- w-full h-full '>
      <div className='absolute text-offwhite bottom-0 left-0'>
        Under active Devlopment{" "}
      </div>
      <Contacts />
      <Skills />
    </div>
  );
};

export default Main;
