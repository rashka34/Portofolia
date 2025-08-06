import img from "./images/cabaas.jpg"

function Definition(){
    return <>
    <div className="justify-around gap-10 mt-20 sm:flex hidden">
        <div className="mt-6 space-y-2">
            <h1 className="text-4xl font-semibold">Welcome to my Web <br />Development <br />Portofolio!</h1>
            <p className="text-xl">I'm Abaaz Smith, a passionate web developer <br />based in Somalia. Here, you'll get a glimpse of my <br />journey in the world of web development, where <br />creativity meets functionality.</p>
            <button className="bg-black  hover:bg-gray-800 px-10 py-2 rounded-lg text-white">sends</button>
        </div>
        <div>
            <img className="w-80 rounded-lg" src={img} alt="" />
        </div>
        </div>
       <div className="flex flex-col sm:justify-around flex-wrap items-center justify-center  h-auto w-auto  sm:mt-0   gap-10 mt-44 sm:hidden">
        <div>
            <img className="w-80 rounded-lg" src={img} alt="" />
        </div>
         <div className="mt-6 space-y-2 ml-8">
            <h1 className="text-4xl   font-semibold">Welcome to my Web <br />Development <br />Portofolio!</h1>
            <p className="text-xl">I'm Abaaz Smith, a passionate web developer <br />based in Somalia. Here, you'll get a glimpse of my <br />journey in the world of web development, where <br />creativity meets functionality.</p>
            <button className="bg-black  hover:bg-gray-800 px-10 py-2 rounded-lg text-white">sends</button>
        </div>
        </div>
    
    </>
}
export default Definition