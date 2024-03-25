import React, { useState } from 'react';

function Project({ mouseE, mouseO }) {
    const data = [
        {
            idx: 0,
            img: 'happypub.png',
            title: 'Happy Pub',
            contents: '첫번째 Team Project 주류판매 사이트입니다. \n 기존 술마켓 각각의 온라인 판매 사이트를 참고하여\n 디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다.',
            b_contents: '처음으로 진행한 Team project 입니다. 5명의 구성원으로 각자 Page를 맡아서 디자인(반응형작업),기능구현을 진행하였습니다. \n 그 중에서 저는 간단한 장바구니 기능과 결제정보 page를 맡아서 진행했습니다. \n\n\n 사용 기술 : HTML, SCSS, JavaScript \n 개발기간 : 2023.12.15 ~ 2024.01.03 \n ',
            gitlink : 'https://github.com/dnaals/project_happypub',
            projectlink : 'https://dnaals.github.io/project_happypub/'
        },
        {
            idx: 1,
            img: 'img2.png',
            title: '프로젝트 2번',
            contents: '두번째  Project 내용이 어쩌구 저쩌구 이러쿵  저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contents: '2번프로젝트 이미지 뒤에 넣을 내용',
            gitlink : 'https://naver.com',
            projectlink : 'https://naver.com'
        },
        {
            idx: 2,
            img: 'img3.png',
            title: '프로젝트 3번',
            contents: '세번째  Project 내용이 어쩌구 저쩌구 이러쿵 저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contents: '3번프로젝트 이미지 뒤에 넣을 내용',
            gitlink : 'https://naver.com',
            projectlink : 'https://naver.com'
        },
        {
            idx: 3,
            img: 'img1.png',
            title: '프로젝트 4번',
            contents: '세번째  Project 내용이 어쩌구 저쩌구 이러쿵 저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contents: '3번프로젝트 이미지 뒤에 넣을 내용',
            gitlink : 'https://naver.com',
            projectlink : 'https://naver.com'
        }
    ]   // 프로젝트 추가할때 여기에 하면됨

    // const [xmouse, setXmouse] = useState();
    // const [ymouse, setYmouse] = useState();

    // const mouseE = (e) => {
    //     console.log(e)
    //     setXmouse(e.nativeEvent.offsetX);
    //     setYmouse(e.nativeEvent.offsetY);
    // }



    const [check, setCheck] = useState(null);
    const p_click = (k) => {
        if (check == null) {
            setCheck(k);
        } else if (check !== k) {
            setCheck(k)
        } else if (check == k) {
            setCheck(null)
        }
    }

    return (
        <>
            {
                data.map((obj, k) => (
                    <div className='my_project_lt' key={k}>
                        <div className={`rotate ${check == k ? 'active' : ''}`} onClick={() => { p_click(k) }}>
                            <p><img src={`./images/${obj.img}`} onMouseMove={(e) => { mouseE(e) }} onMouseOut={() => { mouseO() }} />
                                {/* <sapn className='circle' style={{ top: ymouse, left: xmouse }} >click</sapn> */}
                            </p>
                            <p id='contents_back'>{obj.b_contents.split('\n').map((line, index) => (
                                <span key={index}>{line}<br /></span>
                            ))}</p>
                        </div>
                        <div><span>{obj.title}</span><br /><br />
                            {obj.contents.split('\n').map((line, index) => (
                                <div key={index}>{line}<br /></div>
                            ))}
                            <div className='page_link'>
                                <a href={obj.gitlink} target="_blank"><p><img src="/images/github.png" alt="오류" /></p></a>
                                <a href={obj.projectlink} target="_blank"><p><img src="/images/project.png" alt="오류" /></p></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Project;