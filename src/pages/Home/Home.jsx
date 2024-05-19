import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductInfo from "../../productInfo/ProductInfo";
import GetQuoteForm from '../GetQuoteForm'

const Home = () => {
  const [isForm, setIsForm] = useState(false);

  const homeImage =
    "https://etherealmachines.com/wp-content/uploads/2023/10/Test_impeller3.png";

  return (
    <>
    <div >
      <div className="w-full h-screen py-[10rem] font-Popins px-12 bg-black flex items-center justify-center">
        <div className="w-full h-full container flex md:flex-row flex-col items-center justify-center gap-10">
          <div className="image w-[50%] sm:pr-8 flex justify-center sm:justify-end items-center">
            <img
              className="w-[25rem] min-w-[15rem] contrast-[1.2] saturate-[1.2]"
              src="./images/HomeImg2.png"
              alt="part_image"
            />
          </div>
          <div className="sm:w-[50%] text-white px-4 md:px-1 flex flex-col items-start justify-center">
            <h1 className="text-8xl inline font-semibold">DTech</h1>
            <h1 className="text-2xl inline">
              All Type of Precision Machine Components
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-8 font-Popins">
        <div>
          <div className="py-8 px-12">
            <h1 className="text-5xl text-center uppercase font-semibold">
              WELCOME TO OUR WEBSITE
            </h1>
          </div>
          <div className=" w-full flex justify-center items-center px-12 py-4">
            <p className="w-full sm:w-[80%] text-center text-[1rem]">
              DTech Engineering works is a distinguished Manufacturer, Exporter
              and Supplier of Precision Machined Components, Press Tools,
              Industrial Stampings, Deep Drawn Parts, Jigs & Fixtures, Sheet
              Metal Automotive Parts, Sheet Metal Electronic Parts and Sheet
              Metal Components. We are an ISO 9001:2008 certified company and we
              offer high quality cost effective tooling to keep production and
              operation costs down. Our expertise in the business of sheet metal
              components and our focus on maintenance of high quality has
              allowed us to grow with our customers and remain their reliable
              vendor and partner for all times. Our focus and consultative
              approach combined with our consistent quality always result in
              long-terms benefits to our clients. Established in 1990, in
              Ghaziabad (Uttar Pradesh), India, DTech Engineering works has
              carved a niche for itself in the global markets. The company
              generates a huge annual turnover under the able guidance of Mr.
              Deepak Kumar (CEO), who has rich experience of 35 years in the
              domain.
            </p>
          </div>
        </div>
      </div>
      <div className="text-white font-Popins bg-zinc-900">
        <div className="w-full px-12 pt-20">
          <h1 className="text-5xl font-semibold text-center tracking-wider">
            Latest Products
          </h1>
        </div>
        <div className="product-box relative w-full sm:w-[90%] mx-auto flex gap-5 items-center justify-center sm:justify-between flex-wrap px-12 py-12">
          <ProductCard
            title={ProductInfo[0].title}
            partImg={ProductInfo[0].partImg}
            desc={ProductInfo[0].desc.slice(0,0)}
          />
          <ProductCard
            title={ProductInfo[1].title}
            partImg={ProductInfo[1].partImg}
            desc={ProductInfo[1].desc.slice(0,0)}
          />
          <ProductCard
            title={ProductInfo[2].title}
            partImg={ProductInfo[2].partImg}
            desc={ProductInfo[2].desc}
          />
          <ProductCard
            title={ProductInfo[3].title}
            partImg={ProductInfo[3].partImg}
            desc={ProductInfo[3].desc}
          />
        </div>
        <div className="pb-8 text-center">
          <p className="py-4 text-2xl capitalize tracking-wide">We will send you the Best Price Possible</p>
          <button onClick={()=> setIsForm((prev)=> !prev)} className="relative py-2 px-4 text-black text-xl font-bold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-700 before:to-blue-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
            Get Quote Now
          </button>
        </div>
      </div>
      {
          isForm && <div className="absolute">
<GetQuoteForm /> 
          </div>
      }
      
      </div>
    </>
  );
};

export default Home;
