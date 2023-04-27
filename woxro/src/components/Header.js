import React,{useState,useEffect} from 'react'
import './Header.css'
function Header() { 
  
  const [location,setlocation] = useState('')
    const [number,setnumber] = useState('')
    const [title,settitle] = useState('')

    const fetchlocation=async()=>{
      const result= await localStorage.getItem('location')
      console.log(result);
      setlocation(result);
  }
  const fetchnumber=async()=>{
      const result= await localStorage.getItem('number')
      console.log(result);
      setnumber(result);
  }
  const fetchtitle=async()=>{
      const result= await localStorage.getItem('title')
      console.log(result);
      settitle(result);
  }

  useEffect(() => {
    fetchlocation()
    fetchnumber()
    fetchtitle()
  }, [])


    return (
      <div>
        <section className='firstNav'>
              <ul className='hiring'>
                  <li>&nbsp;&nbsp;<b>+{number}</b></li>&nbsp;&nbsp;
                  <li>&nbsp;&nbsp; {location}</li>&nbsp;&nbsp;
              </ul>
          </section>
          <section className='secondNav'>
              <img src='https://woxro.com/public/assets/png/woxrologo.png'/>
              <i  class="fa-solid fa-bars"></i>
          </section>
          <section className='thirdNav'>
              <div className='subThird'>
                  <a>HOME</a>
                  <a>ABOUT US</a>
                  <a>SERVICES</a>
                  <a>TECHNOLOGY</a>
                  <a>CAREERS</a>
                  <a>BLOGS</a>
                  <a>OUR WORKS</a>
                  <a>CONTACT US</a>
                  <i class="fa-solid fa-xmark" id='icon'></i>
              </div>
          </section>
          <section className='fourthNav'>
             <div className='fourthNav-content'>
               <h1 className='content'>{title}</h1>
               <p className='paragraph'>Global Web Designing Company That Provides Full-cycle Software Development Services,E-commerce & Mobile App Development Services.</p>
             </div>
          </section>
      </div>
    )
  }

export default Header