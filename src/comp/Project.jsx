import data from "../data/project.json"
function Project({ mouseE, mouseO }) {

    // {obj.b_contents.split('\n').map((line, index) => (
    //     <span key={index}>{line}<br /></span>
    // ))}

    return (
        <>
            {
                data.map((obj, k) => (
                    <div className='my_project_lt' key={k}>
                        <div className='rotate'>
                            <p>
                                <a href={obj.projectlink} target="_blank"><img src={`./images/${obj.img}`} onMouseMove={(e) => { mouseE(e) }} onMouseOut={() => { mouseO() }} />
                                </a>
                            </p>
                        </div>
                        <div><h2>{obj.title}</h2>
                            {obj.contents.split('\n').map((line, index) => (
                                <div key={index}>
                                    <p> {line} </p>
                                    <p>개발 기간 : {obj.period}</p>
                                    <p>사용 기술 : {obj.skill}</p>
                                    <p><a href={obj.gitlink} target="_blank"><img src="/images/github.png" alt="오류" /></a></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Project;