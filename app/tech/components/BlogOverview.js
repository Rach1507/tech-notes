import Link from "next/link";




export default function BlogOverview() {

    const categories = ["ReactJS","NextJS","CSS / Tailwind","Design","DX / Learning / Productivity","Performance / Optimization","Stories / Inspiration"," Problem Solving"]
    return (
        <div className="p-5 row-start-2 row-span-2 h-[200vh] w-full  gap-0 antialiased  font-light outline-dotted rounded-xl outline-slate-800 leading-relaxed text-slate-300 select-none ">

            <div id="header" className=" h-1/4 w-full flex flex-col justify-between md:flex-row">
                <div className=" p-8">
                    <h2 className="text-7xl tracking-wide col-span-2 font-sketch font-bold">Tech-notes</h2>
                    <div className="text-pretty text-sm p-3">My digital note book - A collection of my learnings / readings as .mds on my github are getting out of hand </div>
                </div>

                <div className="text-xl  tracking-wide  font-texturina  md:pt-8
                flex flex-wrap gap-5 md:flex-col 
    
                md:grid md:grid-cols-2 md:gap-x-5 
                
                 divide-x divide-dashed divide-slate-500 md:divide-x-0 md:divide-y items-center content-baseline">


                    {categories.map((category)=> <Link className="p-2" href="/categories${category}"> {category} </Link>)}

                </div>
            </div>

        </div>
    );

}

//             col-start-1 cols-span-3 md:col-start-3 md:col-span-1 grid grid-cols-8 md:gap-x-8 md:grid-cols-2 
