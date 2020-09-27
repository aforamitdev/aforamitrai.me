import SkillShowCase from "./Skills/SkillShowCase";
import icons from "../icons";
const Skills = () => {
  return (
    <div className='w-1/2 flex justify-center items-center '>
      <div>
        <div className='space-y-1'>
          <div className='text-2xl text-offwhite'>
            {"<"} Full Stack Developer {"/>"}
          </div>
          <div className='text-offwhite'>
            {"<!--"} I Write Web And mobile Apps {"-->"}
          </div>
        </div>

        <SkillShowCase icons={[icons.javascript]} text='ProgramingLanguage' />
      </div>
    </div>
  );
};

export default Skills;
