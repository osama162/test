export default function Hero() {
  return (
    <div className="bg-[#1A35AB] p-4 py-10">
      <div className="max-w-[1000px] mx-auto mt-[80px]">
        <div className="hero-text max-w-[500px]">
          <h1 className="text-white font-bold uppercase text-[40px] font-sans">
            Meet your future goals with mutual funds
          </h1>
          <p className="text-gray-100 py-10 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <button className=" bg-[#02C39B] uppercase rounded-full text-center mr-5 text-white px-10 py-2">
            login
          </button>
          <button className=" bg-[#02C39B] uppercase rounded-full text-center text-white px-10 py-2">
            sign up
          </button>
        </div>
        <div className="hero-img max-w-[500px]"></div>
      </div>
    </div>
  );
}
