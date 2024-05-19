import ProductInfo from "../../productInfo/ProductInfo"
import ProductCard from "../../components/ProductCard/ProductCard"

const Products = () => {
  return (
    <div className="pt-[72px] w-full h-screen" >
      <div className="w-full flex">
        {
          ProductInfo.map((item)=> {
            return(
              <ProductCard title={item.title} partImg={item.partImg} desc={item.desc} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
