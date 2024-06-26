import { useParams } from "react-router-dom"
import ProductInfo from "../../productInfo/ProductInfo"

const ProductPage = () => {
  const params = useParams()
  const data = ProductInfo[params.id]

  return (
    <>
      <div className="w-full h-screen pt-[7rem] px-[5rem]">
        <div className="shadow-lg w-full rounded-md font-Popins" >
          <div className="w-full flex py-8 justify-center">
            <div className="w-full ">
              <img className="" src={data.partImg} alt="product-image" />
            </div>
            <div className="px-5 w-full ">
              <h1 className="text-2xl pb-4 font-bold" >{data.title}</h1>
              <div className="p-4 border-2 rounded-sm shadow-sm">
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-4 items-center">
                    <h1 className="text-xl">Size : </h1>
                    <p className="" >{data.Size}</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <h1 className="text-xl">Thickness : </h1>
                    <p className="" >{data.Thickness}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
