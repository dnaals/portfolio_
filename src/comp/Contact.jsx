import React, { useState } from 'react';

function Contact() {


    let [click, setClick] = useState(false);
    const imgClick = ()=>{
        setClick(true);
    }
    const closeClick = ()=>{
        setClick(false);
    }

    return (
    <div className='contact'>
        <div className='card'>
            <div>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            </div>
            <div>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
                <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            </div>
        </div>
        <div className='card'>
        <div>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
        </div>
        <div>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
        </div>
        </div>
        <div className='card'>
        <div>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
        </div>
        <div>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
            <figure onClick={imgClick}><img src="/images/my.png" alt="오류" /></figure>
        </div>
        </div>
        <div className={click? 'card_detail active' :'card_detail'}>
            <div>
                <p onClick={closeClick}>닫기</p>
                <a href="https://github.com/dnaals" target='_blink'><img src="/images/my.png" alt="aaa" /></a>
            </div>
        </div>
    </div>
    );
}

export default Contact;