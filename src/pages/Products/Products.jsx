import ProductInfo from "../../productInfo/ProductInfo"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Link } from "react-router-dom"
import { animate, delay, motion } from "framer-motion"


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index)=> ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    }
  })
}

const Products = () => {
  const linksData = [ ]
  return (
    <div className="pt-[72px] w-full h-full py-8" >
      <div className="text-5xl font-Popins font-semibold pt-12 pb-12 text-start sm:pl-[10rem]">
        <h1>Our Products</h1>
      </div>
      <div className="px-20">
      <div className="w-full flex flex-wrap items-center justify-center gap-5">
        {
          ProductInfo.map((item,index)=> {
            return(
              <motion.li 
              className="list-none"
              key={item.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              custom={index}
              >
              <Link to={`/products/${item.title.split(' ').join('-').toLowerCase()}/${index}`} key={item.title} >
              <ProductCard title={item.title} partImg={item.partImg} desc={item.desc.slice(0,40) + "..."} />
              </Link>
              </motion.li>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Products
