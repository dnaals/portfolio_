import { useEffect, useRef, useState } from 'react';
import './pofol.scss'
import { motion } from 'framer-motion';
import Project from './comp/Project';
import Skill from './comp/Skill';
import Contact from './comp/Contact';
function App() {

  const menuRef = useRef([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  }

  const [menuScroll, setMenuScroll] = useState([]);


  function imageLoad() {
    let menuBound = [
      menuRef.current[0].offsetTop,
      menuRef.current[1].offsetTop,
      menuRef.current[2].offsetTop,
      menuRef.current[3].offsetTop-1,
      menuRef.current[4].offsetTop -1
    ];

    setMenuScroll(menuBound);

    window.addEventListener("scroll", updateScroll);
  }
  console.log(menuScroll);
console.log(scrollPosition,"asd");

  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img, idx) => {
      img.onload = () => {
        if (idx == imgs.length - 1) imageLoad();
      }
    })
    window.onresize = imageLoad;
  }, [])


  const scrollBack = () => {
    if (scrollPosition >= menuScroll[0] && scrollPosition < menuScroll[1]) {
      return 0;
    } else if (scrollPosition >= menuScroll[1] && scrollPosition < menuScroll[2]) {
      return 1;
    } else if (scrollPosition >= menuScroll[2] && scrollPosition < menuScroll[3]) {
      return 2;
    } else if (scrollPosition >= menuScroll[3] && scrollPosition < menuScroll[4]) {
      return 1;
    } else if (scrollPosition >= menuScroll[4]) {
      return 0;
    }
  }
  const menuclick = (menu) => {
    menu.scrollIntoView({behavior:"smooth"  });
  }

  const [burgerOn,setBurgerOn] = useState(false);
  const burgerClick = ()=>{
    setBurgerOn(!burgerOn);
  }
  

  const headColor = [
    { backgroundColor: '#0049F8', color: '#FFFFFF' },
    { backgroundColor: '#FFFFFF', color: '#0049F8' },
    { backgroundColor: '#ECF2FF', color: '#0049F8' }
  ];

  const [xmouse, setXmouse] = useState();
  const [ymouse, setYmouse] = useState();

  const mouseE = (e) => {
    setXmouse(e.pageX);
    setYmouse(e.pageY);
  }
  const mouseO = () => {
    setXmouse(-100)
    setYmouse(-100)
  }

  const [contactImg,setContactImg] = useState(true);

  return (
    <>
      <header style={{ ...headColor[scrollBack()], display: contactImg? "flex":"none" }}>
        <p onClick={() => { menuclick(menuRef.current[0]) }} className='h_name'>Songwoomin</p>
        <div className={burgerOn? 'burger_menu active' :'burger_menu'} onClick={burgerClick}>
          <p>ㅡ</p>
          <p>ㅡ</p>
          <p>ㅡ</p>
            <div className={burgerOn? 'burger_list active':'burger_list'}>
              <p onClick={() => menuclick(menuRef.current[0])} style={(scrollPosition >= menuScroll[0] && scrollPosition < menuScroll[1]) ? { opacity: 1 } : {}} >HOME</p>
              <p onClick={() => menuclick(menuRef.current[1])} style={(scrollPosition >= menuScroll[1] && scrollPosition < menuScroll[2]) ? {opacity: 1 } : {}}>ABOUT</p>
              <p onClick={() => menuclick(menuRef.current[2])} style={(scrollPosition >= menuScroll[2] && scrollPosition < menuScroll[3]) ? { opacity: 1 } : {}}> SKILL</p>
              <p onClick={() => menuclick(menuRef.current[3])} style={(scrollPosition >= menuScroll[3] && scrollPosition < menuScroll[4]) ? { opacity: 1 } : {}} >PROJECT</p>
              <p onClick={() => menuclick(menuRef.current[4])} style={(scrollPosition >= menuScroll[4]) ? {  opacity: 1 } : {}}>CONTACT</p>
            </div>
          
        </div>
        
        <nav>
          <p onClick={() => menuclick(menuRef.current[0])} style={(scrollPosition >= menuScroll[0] && scrollPosition < menuScroll[1]) ? { borderBottom: '1px solid #FFFFFF', opacity: 1 } : {}} >HOME</p>
          <p onClick={() => menuclick(menuRef.current[1])} style={(scrollPosition >= menuScroll[1] && scrollPosition < menuScroll[2]) ? { borderBottom: '1px solid #0049F8', opacity: 1 } : {}}>ABOUT</p>
          <p onClick={() => menuclick(menuRef.current[2])} style={(scrollPosition >= menuScroll[2] && scrollPosition < menuScroll[3]) ? { borderBottom: '1px solid #0049F8', opacity: 1 } : {}}> SKILL</p>
          <p onClick={() => menuclick(menuRef.current[3])} style={(scrollPosition >= menuScroll[3] && scrollPosition < menuScroll[4]) ? { borderBottom: '1px solid #0049F8', opacity: 1 } : {}} >PROJECT</p>
          <p onClick={() => menuclick(menuRef.current[4])} style={(scrollPosition >= menuScroll[4]) ? { borderBottom: '1px solid #FFFFFF', opacity: 1 } : {}}>CONTACT</p>
        </nav>
      </header>
      <div className='circle' style={{ top: ymouse, left: xmouse }} >Link</div>

      <section ref={(el) => { menuRef.current[0] = el }} className='S_home'>
        <div className='S_home_main'>
          <motion.p
          initial={{ opacity: 0, x:-200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
              ease: "easeInOut",
              duration: 1,
              y: { duration: 1 },
          }}>분석과 개발을<br />
            좋아하는<br />
            <span>송우민</span>입니다.</motion.p>
          <div className='line' />
          <motion.p
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
              ease: "easeInOut",
              duration: 1,
              y: { duration: 1 },
          }}>프론트엔드 개발자를 희망하고 있습니다. <br />
            팀원들과의 호흡,소통을 중요시 하며 바른 인성을 갖추도록 노력하고 있습니다. <br />
            제가 가진 최고의 강점인 성실함을 바탕으로 앞으로 나아가겠습니다. </motion.p>
        </div>
        <img onClick={() => menuclick(menuRef.current[1])} className='arrow' src='./images/downWhite.png' />
      </section>

      <section ref={(el) => { menuRef.current[1] = el }} className='S_about'>
        <motion.div initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
        className='S_about_main'>
          <h1>ABOUT</h1>
          <p>새로운 일에 거부감없이 적응하며, 바른 인성을 갖추기 위해 노력하고,<br />
            BackEnd에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.<br /><br />
            <span>" 포기하지 않으면 어떤일이든 해낼수있다. "</span><br /><br />
            항상 되새기고 또 되새기는 문장입니다.<br />
            계속 다양하게 변하는 웹개발 트랜드 속에서, 어떤 어려움 속에서도 포기하지않으며<br />
            다양한 시도와 함께 사용자 입장을 고려하며, 성실하게 발전하는 개발자가 되겠습니다.</p>
          <div className='introduce'>
            <p><img src='/images/aboutme.png' /></p>
            <ul>
              <li>송우민</li>
              <li>1996.01.05</li>
              <li>경기 양주시 옥정동</li>
              <li>swm8793@naver.com</li>
              <li>지능로봇과 졸업</li>
            </ul>
          </div>
        </motion.div>
        <img onClick={() => menuclick(menuRef.current[2])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[2] = el }} className='S_skill'>
        <motion.div initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
        className='S_skill_main'>
          <h1>SKILL</h1>
          <Skill />

        </motion.div>
        <img onClick={() => menuclick(menuRef.current[3])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[3] = el }} className='S_project'>
        <div className='S_project_main'>
          <h1>PROJECT</h1>
          <Project mouseE={mouseE} mouseO={mouseO} />
        </div>
        <img onClick={() => menuclick(menuRef.current[4])} className='arrow' src='./images/downBlue.png' />
      </section>

      <section ref={(el) => { menuRef.current[4] = el }} className='S_contact'>
        <div className='S_contact_main'>
          <h1>CONTACT US</h1>
          <p>"열정, 성실, 올바른 인성"을 중심으로 포기하지않고 노력하는 개발자가 되겠습니다.</p>
          <a href='./file/이력서.pdf' download>이력서 다운로드 <img src='./images/rightarrow.png' /> </a>
        </div>
        <Contact setContactImg={setContactImg} />
      </section>

    </>
  );
}

export default App;
