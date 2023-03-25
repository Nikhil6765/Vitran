import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { GiDigitalTrace } from "react-icons/gi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  desc: string;
}

const FeatureCard = ({ title, desc,  }: FeatureCardProps) => {
  
  return (
    <div className="relative backdrop-blur-sm bg-white/40 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30 p-5 rounded-lg">
      <dt className="flex flex-col items-center md:items-start">
        <p className="pt-5 text-lg leading-6 font-medium font-semibold text-[#732fff] dark:text-[#e99aff]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-600 text-center md:text-left dark:text-white">
        {desc}
      </dd>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
     <main className="px-4 md:px-0 mx-auto max-w-[1080px] bg-black">
     <div className="flex flex-col   items-center">
      <div className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">
        <p className="text-white md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

        <h1 id="writer-text" className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to track n supply!!</h1>
              <div>
                <Link
                  href="/explore"
                  className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-full text-black bg-gradient-to-r from-white to-gray-300 hover:drop-shadow-[0_3px_5px_#7d7d7d] dark:hover:drop-shadow-[0_3px_5px_#8ce1ff] md:py-2 md:text-lg md:px-8"
                >
                  Explore
                </Link>
              </div>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 mb-10 gap-8 md:gap-12 xl:gap-16">
    <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Traceability</h3>
          <p className="text-white mb-2">Trace your supplies from origin to destination in real-time tracking system with transparency.</p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Security</h3>
          <p className="text-white mb-2">Ensure safe and secure transactions with blockchain technology.</p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Decentralised</h3>
          <p className="text-white mb-2">Empower your supply chain with decentralised solutions so that there isn&apos;t a single point of failure. </p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>

      

      
      </div>
      <div className="max-w-screen-xl  py-10 px-4 md:px-8 mx-auto">
    
    <div className="mb-10 md:mb-16">
      <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>

      <p className="max-w-screen-md text-white md:text-lg text-center mx-auto">Meet our exceptional team of professionals driving innovation in supply chain management by making such products.</p>
    </div>
    <div className="">
      
     
          <div className="flex flex-col items-center border bg-black rounded-lg p-4 lg:p-8">
        <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div className="text-white md:text-lg font-bold text-center">Nikhil Sondhiya</div>
          <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Founder / CEO</p>

          </div>
          <div className="flex justify-center">
            <div className="flex gap-4">
              <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          </div>
         
          </div>
          
    </div>
    <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

    <div className="grid m-10 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 sm:gap-y-12 lg:divide-x">
  
      <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-white text-center">“Really great to see such an innovative idea in supply chain managemnet.”</div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-white text-sm md:text-base font-bold text-center sm:text-left">Harsh Vishwakarma</div>
            <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">Founder ConnectUp</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-white text-center">“Always loved the team building on blockchain with such enthusiasm and persistence.”</div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-white text-sm md:text-base font-bold text-center sm:text-left">Sneha Gupta</div>
            <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">GDSC Lead UIT-RGPV</p>
          </div>
        </div>
      </div>

   
    </div>
  </div>
      </main>

    </>
  );
};

export default Home;
