const About = () => {
  return (
    <div className="pt-[72px] px-12 py-12 w-full h-full font-Popins">
      <h1 className="text-5xl font-Popins font-semibold pt-12 pb-4 text-center">
        About Us
      </h1>
      <div className="flex items-start justify-center border">
      <div className="px-12 flex flex-col py-12 gap-10">
        <div className="flex flex-col gap-5" >
          <p>
            Established in 1990, in Ghaziabad (Uttar Pradesh), India, Monika
            Tools has carved a niche for itself in the global markets. The
            company generates a huge annual turnover under the able guidance of
            Mr. N.K Sharma (CEO), who has rich experience of 35 years in the
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
      <div className="py-12 w-[50%]">
        <div className="">
          <h1>Products</h1>

        </div>
        <div className="">
          <h1>Contact Us</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
