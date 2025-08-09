import  { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import MarkdownMessage from '../components/MarkdownMessage'
import { AxiosClient } from '../utils/Axios'
import { IoPauseSharp } from 'react-icons/io5'

const CodePage = () => {

  const [prompt,setPrompt] = useState('')
  const [data,setData]  = useState({
    ai_input:'',
    ai_output:''
  })

  const [loading,setLoading] = useState(false)

  const onSubmitHandler = async(e:any)=>{
    
    setLoading(true)
    e.preventDefault()
    try {

        const req = await AxiosClient.post("/generate",{input:prompt});
        const data = await req.data;
            console.log("form submit",{prompt});
            setPrompt('')
            setData({
              ai_input:data.ai_input,
              ai_output:data.ai_output
            })
            
    } catch (error:any  ) {
        console.log(error.message);
        
    }finally{}
    setLoading(false)
  }

  return (
    <>
          <form  onSubmit={onSubmitHandler} className="mb-4 relative">
            <textarea onChange={(e)=>setPrompt(e.target.value)} placeholder='Write prompt....' name="" id="" value={prompt} className="w-full py-4 px-4 bg-transparant border outline-none rounded-md" rows={5}></textarea>
            <button disabled={loading} className='absolute bottom-4 shadow-lg right-4 p-3 bg-black rounded-full disabled:bg-gray-700   text-white'>
              {loading?
            <IoPauseSharp className='text-3xl' />:<FaTelegramPlane className='text-3xl'/>}
            </button>
          </form>

          <MarkdownMessage {...data} isLoading={loading} />


    </>
  )
}

export default CodePage