import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Technical Writer ✍🏾',
              2000,
              'Building Developer Experiences ✍🏾',
              2000,
              'Creating API Documentation ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
            Hello, World! 👋 I'm  Judith⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300">
          I am a Technical Writer with a strong interest in creating user-friendly technical documentation. <br /> <br />
           My expertise lies in crafting 
           user guides, technical blog posts, manuals, FAQs, and developer resources, including API references, and tutorials that empower users to utilize software products effectively.
           <br />
           <br />
            I am adept at collaborating with Subject Matter Experts (SMEs) to translate complex concepts into clear, concise, and engaging content.
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
