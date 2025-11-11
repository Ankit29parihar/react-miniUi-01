import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-amber-300 px-4">
      <div id="left" className="bg-pink-100 w-1/3 h-screen flex flex-col justify-between">
        <div>
          <h1 className=" text-4xl font-bold my-4">
            Prospective <br /> Customer <br />
            Segmentation
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. pariatur
            similique qui maxime dolore reiciendis ullam veniam natus deserunt
            libero dignissimos.
          </p>
        </div>
       
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>

      </div>
    </div>
  );
};

export default Hero;
