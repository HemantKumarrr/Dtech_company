import { IoCloseSharp } from "react-icons/io5";
import QueryForm from "../components/QueryForm/QueryForm";

const GetQuoteForm = ({ setIsForm }) => {
  return (
    <div className='fixed inset-0 w-full h-screen flex flex-col justify-center items-center bg-black/30 backdrop-blur-lg' >
      <div className="w-[80vw] sm:w-[50vw] h-full flex flex-col gap-2 items-center justify-center ">
        <div className="w-full flex items-center justify-end ">
          <button onClick={()=> setIsForm((prev)=> !prev)} >
            <IoCloseSharp className="text-3xl" />
          </button>
        </div>
        {/* <div className="w-[80vw] sm:w-[50vw] h-[50%] sm:h-[60%] bg-white rounded-lg">
          <div className="h-[5rem] py-8 px-8">
            <QueryForm />
          </div>
        </div> */}
        <div className="bg-white py-4 px-8 w-full h-[70%] rounded-lg">
          <QueryForm />
        </div>
      </div>
    </div>
  )
}

export default GetQuoteForm
