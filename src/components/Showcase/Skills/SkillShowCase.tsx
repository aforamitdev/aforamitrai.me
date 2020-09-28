import { useRef } from "react";
import { TweenMax } from "gsap";
interface SkillDetail {
  icon: String;
  text: String;
}

function SkillShowCase<SkillDetail>(props) {
  const { text, icons } = props;

  return (
    <div className='text-center'>
      <div className='flex items-center content-center '>
        <div className='text-xl text-offwhite space-x-1 text-center '>
          {"<"}
          {text}
        </div>
        {icons.map((icon, index) => {
          return (
            <span
              key={index}
              id={icon.id}
              className='mx-1'
              dangerouslySetInnerHTML={{ __html: icon.icon }}
            />
          );
        })}
        <span className='text-offwhite'>{"/>"}</span>
      </div>
    </div>
  );
}

export default SkillShowCase;
