import { useState } from "react"

function SectionOne(){

    const [Hidden, setHidden] = useState(false)

    const handleHidden =()=>{
        setHidden(!Hidden)
    }
 
    return <>
    <div className="mt-28 space-y-2 px-4 text-center">
        <h1 className="text-2xl font-semibold">My Skills</h1>
        <h1 className="text-4xl sm:text-5xl font-semibold">What I do</h1>
        <p className="font-medium text-lg text-gray-400">
          I'm not just a developer; I'm a digital dreamweaver.
          <br className="hidden sm:block" />
          Crafting immersive online experiences is not just a job but my calling.
          <br className="hidden sm:block" />
          Discover below how I can help you.
        </p>
      </div>
    <div className="mt-16 space-y-14 mb-10">
       <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-10 md:gap-x-10">
          {/* Box 1 */}
          <div className="space-y-3 text-center flex-1">
            <i className="fa-solid fa-user text-4xl text-blue-600"></i>
            <h1 className="text-2xl font-semibold">Frontend Web Development</h1>
            <ul className="text-gray-500">
              <li>Creating beautiful and functional web experiences.</li>
              <li>Using latest frameworks and tools.</li>
              <li>Ensuring cross-platform performance.</li>
              <li>Peace of mind through secure code.</li>
              <li>Pixel-perfect user interfaces.</li>
              <li>That captivate and convert.</li>
            </ul>
          </div>
        <div className="space-y-3 text-center flex-1">
            <i className="fa-solid fa-fingerprint text-4xl text-green-600"></i>
            <h1 className="text-2xl font-semibold">Mobile App Development</h1>
            <ul className="text-gray-500">
              <li>Building intuitive mobile apps for iOS & Android.</li>
              <li>Performance-focused applications.</li>
              <li>Bug-free and tested releases.</li>
              <li>User-first thinking from start to finish.</li>
              <li>End-to-end mobile architecture.</li>
              <li>Focused development process.</li>
            </ul>
          </div>
          <div className="space-y-3 text-center flex-1">
            <i className="fa-solid fa-file text-4xl text-purple-600"></i>
            <h1 className="text-2xl font-semibold">Testing & QA</h1>
            <ul className="text-gray-500">
              <li>Rigorously test and debug software.</li>
              <li>Guarantee bug-free experiences.</li>
              <li>Secure environment for users.</li>
              <li>Peace of mind is priority.</li>
              <li>Performance audits and checks.</li>
              <li>Flawless project delivery.</li>
            </ul>
          </div>
        </div>
        <div>
            <div style={{display: Hidden=== false ? "none" : ""}} className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-10 md:gap-x-10">
        <div className="space-y-3 text-center flex-1">
              <i className="fa-solid fa-hashtag text-4xl text-pink-500"></i>
              <h1 className="text-2xl font-semibold">Web Optimization</h1>
              <ul className="text-gray-500">
                <li>Speed and performance optimization.</li>
                <li>SEO-friendly practices.</li>
                <li>Fast user experience.</li>
                <li>Secure, scalable delivery.</li>
                <li>Better search engine rankings.</li>
              </ul>
            </div>
        <div className="space-y-3 text-center flex-1">
              <i className="fa-solid fa-eye text-4xl text-orange-500"></i>
              <h1 className="text-2xl font-semibold">User-Centric Design</h1>
              <ul className="text-gray-500">
                <li>Design-first development process.</li>
                <li>Clean and engaging UI.</li>
                <li>Functional + Aesthetic balance.</li>
                <li>Seamless experiences.</li>
                <li>Happy user journey.</li>
              </ul>
            </div>

       <div className="space-y-3 text-center flex-1">
              <i className="fa-solid fa-file-lines text-4xl text-indigo-500"></i>
              <h1 className="text-2xl font-semibold">More QA & Testing</h1>
              <ul className="text-gray-500">
                <li>Advanced test coverage.</li>
                <li>Cross-browser testing.</li>
                <li>Stress & performance tests.</li>
                <li>Security hardening.</li>
                <li>Full delivery support.</li>
              </ul>
            </div>
        </div>
        </div>
        <button onClick={handleHidden} className="bg-black px-12 py-2 rounded-lg text-white hover:bg-gray-800 transition sm:ml-[40%] ml-20">View All</button>
    </div>

    </>
}

export default SectionOne