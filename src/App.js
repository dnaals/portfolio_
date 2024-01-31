import { useEffect, useRef, useState } from 'react';
import './pofol.scss'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const menuRef = useRef([]);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  const menuclick = (menu) => {
    menu.scrollIntoView({ behavior: "smooth" });

  }

  const scrollBack = () => {
    if (scrollPosition >= 0 && scrollPosition < 847) {
      return 0;
    } else if (scrollPosition > 847 && scrollPosition < 2197) {
      return 1;
    } else if (scrollPosition > 2197 && scrollPosition < 3503) {
      return 2;
    } else if (scrollPosition > 3503 && scrollPosition < 4753) {
      return 1;
    } else if (scrollPosition > 4753) {
      return 0;
    }
  }
  const a = () => {
    console.log(window.scrollY)
  }

  const headColor = [
    { backgroundColor: '#0049F8', color: '#FFFFFF' },
    { backgroundColor: '#FFFFFF', color: '#0049F8' },
    { backgroundColor: '#ECF2FF', color: '#0049F8' }
  ]
  return (
    <div id='root'>
      <header style={headColor[scrollBack()]}>
        <p onClick={() => { menuclick(menuRef.current[0]) }} className='h_name'>Songwoomin</p>
        <nav>
          <p onClick={() => menuclick(menuRef.current[0])} style={(scrollPosition >= 0 && scrollPosition < 847) ? { borderBottom: '1px solid #FFFFFF', opacity: 1 } : {}} >HOME</p>
          <p onClick={() => menuclick(menuRef.current[1])} style={(scrollPosition >= 847 && scrollPosition < 2197) ? { borderBottom: '1px solid #0049F8', opacity: 1 } : {}}>ABOUT</p>
          <p onClick={() => menuclick(menuRef.current[2])} style={(scrollPosition >= 2197 && scrollPosition < 3503) ? { borderBottom: '1px solid #FFFFFF', opacity: 1 } : {}}> SKILL</p>
          <p onClick={() => menuclick(menuRef.current[3])} style={(scrollPosition >= 3503 && scrollPosition < 4753) ? { borderBottom: '1px solid #0049F8', opacity: 1 } : {}} >PROJECT</p>
          <p onClick={() => menuclick(menuRef.current[4])} style={(scrollPosition >= 4753) ? { borderBottom: '1px solid #FFFFFF', opacity: 1 } : {}}>CONTACT</p>
        </nav>
      </header>

      <section ref={(el) => { menuRef.current[0] = el }} className='S_home'>
        <main>
          <p>분석과 개발을<br />
            좋아하는<br />
            <span>송우민</span>입니다.</p>
          <div className='line' />
          <p>프론트엔드 개발자를 희망하고 있습니다. <br />
            팀원들과의 호흡,소통을 중요시 하며 바른 인성을 갖추도록 노력하고 있습니다. <br />
            제가 가진 최고의 강점인 성실함을 바탕으로 앞으로 나아가겠습니다. </p>
        </main>
        <img onClick={() => menuclick(menuRef.current[1])} className='arrow' src='./images/downWhite.png' />
      </section>

      <section ref={(el) => { menuRef.current[1] = el }} className='S_about'>
        <main>
          <h1>ABOUT</h1>
          <p>새로운 일에 거부감없이 적응하며, 바른 인성을 갖추기 위해 노력하고,<br />
            BackEnd에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.<br /><br />
            <span>" 포기하지 않으면 어떤일이든 해낼수있다. "</span><br /><br />
            항상 되새기고 또 되새기는 문장입니다.<br />
            계속 다양하게 변하는 웹개발 트랜드 속에서, 어떤 어려움 속에서도 포기하지않으며<br />
            다양한 시도와 함께 사용자 입장을 고려하며, 성실하게 발전하는 개발자가 되겠습니다.</p>
          <div className='introduce'>
            <img src='/images/img1.PNG' />
            <ul>
              <li>송우민</li>
              <li>1996.01.05</li>
              <li>경기 양주시 옥정동</li>
              <li>swm8793@naver.com</li>
              <li>지능로봇과 졸업</li>
            </ul>
          </div>
        </main>
        <img onClick={() => menuclick(menuRef.current[2])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[2] = el }} className='S_skill'>
        <main>
          <h1>SKILL</h1>
          <div className='familiar'>
            <p>Familiar</p>
            <div className='familiar_img'>
              <img src='./images/html.png' />
              <img src='./images/css3.png' />
              <img src='./images/sass.png' />
              <img src='./images/javascript.png' />
              <img src='./images/react.png' />
            </div>
          </div>
          <div className='tried'>
            <p>Tried</p>
            <div className='tried_img'>
              <img src='./images/next.png' />
              <img src='./images/mong.png' />
              <img src='./images/jquery.png' />
              <img src='./images/figma.png' />
              <img src='./images/typescript.png' />
              <img src='./images/github.png' />
            </div>
          </div>
        </main>
        <img onClick={() => menuclick(menuRef.current[3])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[3] = el }} className='S_project'>
        <main>
          <h1>PROJECT</h1>
          <div className='my_project_lt'>
            <img src='./images/happypub.png' />
            <p><span>Happy Pub</span><br /><br />
              첫번째 Team Project 주류판매 사이트입니다.<br /><br />
              기존 술마켓 각각의 온라인 판매 사이트를 참고하여<br /><br />
              디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다.
            </p>
          </div>
          <div className='my_project_rt'>
            <p><span>Happy Pub</span><br /><br />
              첫번째 Team Project 주류판매 사이트입니다.<br /><br />
              기존 술마켓 각각의 온라인 판매 사이트를 참고하여<br /><br />
              디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다.
            </p>
            <img src='./images/happypub.png' />
          </div>
        </main>
        <img onClick={() => menuclick(menuRef.current[4])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[4] = el }} className='S_contact'>
        <main>
          <h1 onClick={() => { a() }}>CONTACT US</h1>
          <p>"열정, 성실, 올바른 인성"을 중심으로 포기하지않고 노력하는 개발자가 되겠습니다.</p>
          <a href='https://naver.com'>이력서 다운로드 <img src='./images/rightarrow.png' />  </a>

        </main>
      </section>

    </div>
  );
}

export default App;
