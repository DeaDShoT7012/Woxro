import React ,{useState ,useEffect}from 'react'
import './Admin.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Admin() {

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

    const handlesubmit = async(e)=>{
    localStorage.setItem('location',location)
    localStorage.setItem('number',number)
    localStorage.setItem('title',title) 
    }

    

    useEffect(() => {
      fetchlocation()
      fetchnumber()
      fetchtitle()

    }, [])


  return (
    <div>
        <div>
            <h1>Admin page</h1>
        </div>
        <div className='text'>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div>
                    <label>Location</label>&nbsp;&nbsp;
                    <input type='text' value={location}  onChange={(e)=>setlocation(e.target.value)} placeholder='enter location'/>
                </div>
                <br/>
                <div>
                    <label>Number</label>&nbsp;&nbsp;
                    <input type='text' value={number} onChange={(e)=>setnumber(e.target.value)} placeholder='enter Number'/>
                </div>
                <br/>
                <div>
                    <label>Title</label>&nbsp;&nbsp;
                    <input type='text' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='enter title'/>
                </div>
                <br/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Admin