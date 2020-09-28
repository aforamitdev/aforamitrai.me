import SkillShowCase from "./Skills/SkillShowCase";
import icons from "../icons";
const Skills = () => {
  return (
    <div className='w-1/2 flex justify-center items-center '>
      <div>
        <div className='space-y-1'>
          <div className='text-3xl text-offwhite'>
            {"<"} Full Stack Developer {"/>"}
          </div>
          <div className='text-offwhite text-xl '>
            {"<!--"} I Write Web And mobile Apps {"-->"}
          </div>
        </div>
        <div className='my-4 space-y-1'>
          <SkillShowCase
            icons={[
              { icon: icons.programing.javascript, id: "js" },
              { icon: icons.programing.nodejs, id: "node" },
              { icon: icons.programing.python, id: "python" },
              { icon: icons.programing.golang, id: "go" },
              { icon: icons.programing.typescript, id: "ts" },
            ]}
            text='ProgramingLanguage'
          />
          <SkillShowCase
            icons={[
              { icon: icons.intools.docker, id: "docker" },
              { icon: icons.intools.nginx, id: "nginx" },
              { icon: icons.intools.git, id: "git" },
              { icon: icons.intools.github, id: "github" },
            ]}
            text='Integrate-SVN '
          />
          <SkillShowCase
            icons={[
              { icon: icons.database.postgres, id: "postgres" },
              { icon: icons.database.mongo, id: "mongo" },
            ]}
            text='Databases'
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
