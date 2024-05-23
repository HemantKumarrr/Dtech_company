import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="pt-[72px] px-4 md:px-[10rem] py-12 w-full h-full font-Popins">
      <h1 className="text-5xl font-Popins font-semibold pt-12 pb-4 text-start">
        About Us
      </h1>
      <div className="flex shadow-lg md:flex-row flex-col items-start justify-center border bg-zinc-200">
      <div className="px-4 w-full md:px-12 md:w-[80%] flex flex-col py-12 gap-10">
        <div className="flex flex-col gap-5" >
          <p>
            Established in 1990, in Ghaziabad (Uttar Pradesh), India, <b>DTech
            Engineering</b> has carved a niche for itself in the global markets. The
            company generates a huge annual turnover under the able guidance of
           <b> Mr. Deepak Kumar</b> (CEO), who has rich experience of 35 years in the
            domain.
          </p>
          <p>
            <b className="block text-xl py-2">Quality Assurance</b>
            We have in-house tool room to design, engineer and manufacture all
            types of compound, progressive, draw and prototype tools to meet the
            clients requirements. We have production facilities of producing 6
            lakh units per month. We also possess well-developed testing
            facilities and R&D facilities like CAD, CAM etc.
          </p>
          <p>
            <b className="block text-xl py-2">Infrastructure</b>
            Our manufacturing unit is spread across the area of 300 yards and
            consists of advance machinery like conventional tool room machinery,
            CNC, VMC, wire cut, power press, tapping machines etc. The high
            grade raw materials used in manufacturing our products are die
            steel, CRCA, AL, MS, CRC and EDD. We offer customized production
            facility like tapping, assembly, welding and fabrication.
          </p>
          <p>
            <b className="block text-xl py-2">Our Team</b>
            We are supported by an adroit team of professionals, which is
            devoted towards providing top-class products and services to the
            clients. Our team comprises of the following members :
          </p>
        </div>
        <ul className="list-disc px-12">
          <li>Management supervisors</li>
          <li>Marketing and sales executive</li>
          <li>Quality auditors</li>
          <li>Warehousing representatives</li>
          <li>Consignment agents</li>
        </ul>
      </div>
      <div className="py-12 md:w-[40%] w-[100%] px-4 flex flex-col gap-5">
        <div className="border-2 w-full bg-white py-4 px-5">
          <h1 className="font-semibold text-xl underline p-1 mb-2" >Products</h1>
          <Link className="py-1 bg-zinc-200 px-2 block mb-3">Precision Machined Components</Link>
          <Link className="py-1 bg-zinc-100 px-2 block mb-3">Press Tools</Link>
          <Link className="py-1 bg-zinc-200 px-2 block mb-3">Industrial Stampings</Link>
          <Link className="py-1 bg-zinc-100 px-2 block mb-3">Deep Drawn Parts</Link>
          <Link className="py-1 bg-zinc-200 px-2 block mb-3">Jigs & Fixtures</Link>
          <Link className="py-1 bg-zinc-100 px-2 block mb-3">Sheet Metal Automotive Parts</Link>
          <Link className="py-1 bg-zinc-200 px-2 block mb-3">Sheet Metal Electronic Parts</Link>
          <Link className="py-1 bg-zinc-100 px-2 block mb-3">Sheet Metal Components</Link>
        </div>
        <div className="border-2 bg-white py-4 px-5">
          <h1 className="font-semibold text-xl underline p-1 mb-2">Contact Us</h1>
          <p className="text-xl bg-zinc-200 px-2 text-center mb-2" >DTech Engineering</p>
          <p className="mb-2">Mr. Deepak Kumar <b>+91 8802056194</b></p>
          <p>Khasra No. 1143, Major Asharan Tyagi Marg, Ghaziabad, Uttar Pradesh</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
