import skill from "../data/skill.json"
function Skill(props) {
    
    return (
        <>
        <div className="skills">
            {
                skill.map((obj,key)=>(
                    <div className="skill_box" key={key}>
                        <p><img src={`/images/${obj.src}`} alt="오류" /></p>
                    </div>
                ))
            }
        </div>
        <div className="skill_explain">
            <h2>What I can do with</h2>
            <p>웹 표준을 준수하며 누구에게나 만족스러운 사용자 경험을 제공하는 
            마크업을 구현하고 SASS를 활용하여 유지보수 가능한 반응형 웹사이트를 제작합니다.
            React, Next.JS 등의 프레임 워크를 이해하고 프로젝트에 활용할 수 있으며 MongoDB를 사용해 데이터 관리를 해본 경험이 있습니다.
            </p>
        </div>
        </>


    );
}

export default Skill;