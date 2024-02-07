import React, { useEffect, useRef, useState } from 'react';

function Project({ mouseE, mouseO }) {
    const data = [
        {
            idx: 0,
            img: 'happypub.png',
            title: 'Happy Pub',
            contants: '첫번째 Team Project 주류판매 사이트입니다. \n\n 기존 술마켓 각각의 온라인 판매 사이트를 참고하여 \n\n 디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다.',
            b_contants: '1번프로젝트 이미지 뒤에 넣을 내용'
        },
        {
            idx: 1,
            img: 'img2.png',
            title: '프로젝트 2번',
            contants: '두번째  Project 내용이 어쩌구 저쩌구 이러쿵 \n\n 저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contants: '2번프로젝트 이미지 뒤에 넣을 내용'
        },
        {
            idx: 2,
            img: 'img3.png',
            title: '프로젝트 3번',
            contants: '세번째  Project 내용이 어쩌구 저쩌구 이러쿵\n\n 저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contants: '3번프로젝트 이미지 뒤에 넣을 내용'
        },
        {
            idx: 3,
            img: 'img1.png',
            title: '프로젝트 4번',
            contants: '세번째  Project 내용이 어쩌구 저쩌구 이러쿵\n\n 저러쿵 가나다라마바사 아자차카타파하 가나다라마바사\n\n 아자차카타파하 가나다라마바사 아자차카타파하 ',
            b_contants: '3번프로젝트 이미지 뒤에 넣을 내용'
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
                            <p>{obj.b_contants}</p>
                        </div>
                        <p><span>{obj.title}</span><br /><br />
                            {obj.contants}
                        </p>

                    </div>
                ))
            }
        </>
    );
}

export default Project;