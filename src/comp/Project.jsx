import data from "../data/project.json"
import { motion } from 'framer-motion';
function Project({ mouseE, mouseO }) {

    // {obj.b_contents.split('\n').map((line, index) => (
    //     <span key={index}>{line}<br /></span>
    // ))}

    return (
        <>
            {
                data.map((obj, k) => (
                    <motion.div
                    initial={{ opacity: 0, x: k%2==0? -200 : 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        y: { duration: 1 },
                    }} className='my_project_lt' key={k}>
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
                    </motion.div>
                ))
            }
        </>
    );
}

export default Project;