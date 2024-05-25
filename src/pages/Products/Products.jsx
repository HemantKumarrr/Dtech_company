import ProductInfo from "../../productInfo/ProductInfo"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Link } from "react-router-dom"

const Products = () => {
  const linksData = [ ]
  return (
    <div className="pt-[72px] w-full h-full py-8" >
      <div className="text-5xl font-Popins font-semibold pt-12 pb-12 text-start pl-20">
        <h1>Products</h1>
      </div>
      <div className="px-20">
      <div className="w-full flex flex-wrap items-center justify-center gap-5">
        {
          ProductInfo.map((item,index)=> {
            return(
              <Link to={`/products/${index}`} key={item.title} >
              <ProductCard title={item.title} partImg={item.partImg} desc={item.desc.slice(0,40) + "..."} />
              </Link>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Products
