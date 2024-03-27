import React, { useState } from 'react';

function Contact() {


    let [click, setClick] = useState(false);
    const imgClick = ()=>{
        setClick(true);
    }
    const closeClick = ()=>{
        setClick(false);
    }

    const data = new Array(0,1,2);

    return (
    <div className='contact'>

        {
            data.map((obj,k)=>(
                <div className='card' key={k}>
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
            ))
        }
        


        <div className={click? 'card_detail active' :'card_detail'} onClick={closeClick}>
            <div>
                <a href="https://github.com/dnaals" target='_blink'><img src="/images/my.png" alt="aaa" /></a>
            </div>
        </div>
    </div>
    );
}

export default Contact;