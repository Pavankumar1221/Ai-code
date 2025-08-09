import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AxiosClient } from '../utils/Axios'

const Dashboard = () => {


    type Data ={
      input:string
      _id:string
    }
  const [data,setData] = useState<Data[]>([])


  const fetchData = async()=>{
    const request = await AxiosClient.get("/history")
    const data = await request.data;
    setData(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <div className="prose">
            <h1 className=''>Welcome To AiCode 👋</h1>
    </div>
    <div className="py-4">

                <div className="flex flex-col gap-y-4 py-10">
                        {
                          data && data.length>0 && data.map((cur,i)=>{ 
                            return <Link to={`/code/${cur._id}`} key={i} className='px-5 border w-full justify-between py-4 rounded-md flex items-center '>
                                  <h1 className='text-lg font-bold '>{cur.input}</h1>
                                <button className='outline-none flex items-center  gap-x-2 text-blue-500 text-lg'>  Read <FaArrowRight/></button>
                                </Link>
                          })
                        }
                </div>
    </div>
    </>
  )
}

export default Dashboard