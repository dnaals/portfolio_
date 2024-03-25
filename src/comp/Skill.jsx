import React, { useState } from 'react';

function Skill(props) {

    const familiarSkill = [
        {
            idx: 0,
            name: "HTML",
            contants: 'html에 대한 설명입니다.',
            src: 'html.png'
        },
        {
            idx: 1,
            name: "CSS3",
            contants: 'css3에 대한 설명입니다.',
            src: 'css3.png'
        },
        {
            idx: 2,
            name: "SCSS",
            contants: 'scss에 대한 설명입니다.',
            src: 'sass.png'
        },
        {
            idx: 3,
            name: "JavaScript",
            contants: 'js에 대한 설명입니다.',
            src: 'javascript.png'
        },
        {
            idx: 4,
            name: "React",
            contants: 'react에 대한 설명입니다.',
            src: 'react.png'
        }
    ];
    const triedSkill = [
        {
            idx: 0,
            name: "Next.JS",
            contants: 'next에 대한 설명입니다.',
            src: 'next.png'
        },
        {
            idx: 1,
            name: "MongoDB",
            contants: 'MongoDB에 대한 설명입니다.',
            src: 'mong.png'
        },
        // {
        //     idx: 2,
        //     name: "Jquery",
        //     contants: 'jquery에 대한 설명입니다.',
        //     src: 'jquery.png'
        // },
        {
            idx: 3,
            name: "Figma",
            contants: 'Figma에 대한 설명입니다.',
            src: 'figma.png'
        },
        {
            idx: 4,
            name: "TypeScript",
            contants: 'TypeScript에 대한 설명입니다.',
            src: 'typescript.png'
        },
        {
            idx: 5,
            name: "GitHub",
            contants: 'GitHub에 대한 설명입니다.',
            src: 'github.png'
        }
    ]

    const [fnum, setFnum] = useState(null);
    const fimgClick = (key) => {
        if (fnum == null) {
            setFnum(key);
        } else if (fnum != key) {
            setFnum(key);
        } else if (fnum == key) {
            setFnum(null);
        }
    }

    const [tnum, setTnum] = useState(null);
    const timgClick = (key) => {
        if (tnum == null) {
            setTnum(key);
        } else if (tnum != key) {
            setTnum(key);
        } else if (tnum == key) {
            setTnum(null);
        }
    }
    return (
        <>
            <div className='familiar'>
                <p>Familiar</p>
                <div className='familiar_img'>
                    {
                        familiarSkill.map((obj, k) => (
                            <div key={k}>
                                <img src={`./images/${obj.src}`} style={fnum == k ? { opacity: 1 } : {}} onClick={() => { fimgClick(k) }} />
                                <div className={`familiar_text ${fnum == k ? 'active' : ''}`}>
                                    <p>{obj.contants}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='tried'>
                <p>Tried</p>
                <div className='tried_img'>
                    {
                        triedSkill.map((obj, k) => (
                            <div key={k}>
                                <img src={`./images/${obj.src}`} style={tnum == k ? { opacity: 1 } : {}} onClick={() => { timgClick(k) }} />
                                <div className={`tried_text ${tnum == k ? 'active' : ''}`}>
                                    <p>{obj.contants}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>


    );
}

export default Skill;