
export default function BlogOverview() {
    return (
        <div className="p-5 row-start-2 row-span-2 h-[200vh] w-full  gap-0 antialiased  font-light outline-dotted rounded-xl outline-slate-800 leading-relaxed text-slate-300 select-none ">

            <div id="header" className=" h-1/6 w-full flex flex-col justify-between md:flex-row">
                <h2 className="text-6xl tracking-wide col-span-2 font-black p-8 font-texturina">Tech-notes</h2>
                <div className=" md:p-5 
                flex flex-wrap gap-5 md:flex-col
    
                
                 divide-x divide-dashed divide-slate-500 md:divide-x-0 md:divide-y items-baseline content-baseline">
                    <div className="p-2">ReactJS</div>
                    <div className="p-2">NextJS</div>
                    <div className="p-2">CSS / Tailwind</div>
                    <div className="p-2">Design</div>
                    <div className="p-2">DX / Learning / Productivity</div>
                    <div className="p-2">Performance / Optimization</div>
                    <div className="p-2">Stories / Inspiration</div>
                    <div className="p-2">Problem Solving</div>
                </div>
            </div>

        </div>
    );

}

//             col-start-1 cols-span-3 md:col-start-3 md:col-span-1 grid grid-cols-8 md:gap-x-8 md:grid-cols-2 
