import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse items-center">
        {/* Left Content */}
        <div className=" md:w-2/3">
          {/*TODO: Change title */}
          {/* <TypeAnimation
            sequence={[
              'Technical Writer',
              2000,
              'Building Developer Experiences',
              2000,
              'Creating API Documentation',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          /> */}
          <p className="text-2xl text-gray-200">
          Hi, my name is
          </p>
          <h1 className='text-5xl text-[#a1b49a] font-extrabold mb-4'>Judith Etugbo.</h1>
          <h1 className='text-5xl text-[#a1b49a] font-extrabold capitalize opacity-[0.7]'>Technical Writer, Building Developer Experiences</h1>
          <br />
          <br />
          <p className="text-xl text-gray-300">
          I create user-friendly technical documentation. My expertise lies in crafting 
           user guides/manuals, technical blog posts, FAQs, and developer resources, including API references, and tutorials that empower users to use software products effectively.
           <br />
           <br />
          
           </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0 mb-10">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/assets/pfp.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
