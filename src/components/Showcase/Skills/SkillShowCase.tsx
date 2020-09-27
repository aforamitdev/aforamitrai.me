interface SkillDetail {
  icon: String;
  text: String;
}

function SkillShowCase<SkillDetail>(props) {
  return (
    <div className='text-center'>
      <div>{props.icons[0]}</div>
    </div>
  );
}

export default SkillShowCase;
