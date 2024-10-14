import Link from "next/link";

export default function BlogOverview() {
  const categories1 = [
    "ReactJS",
    "CSS / Tailwind",
    "DX / Learning / Productivity",
    "Stories / Inspiration",
  ];
  const categories2 = [
    "NextJS",
    "Design",
    "Performance / Optimization",
    " Problem Solving",
  ];

  return (
    <div className="p-5 row-start-2 row-span-2 h-[200vh] w-full  gap-0 antialiased  font-light outline-dotted rounded-xl outline-slate-800 leading-relaxed text-slate-300 select-none ">
      <div
        id="header"
        className=" h-1/4 w-full flex flex-col justify-between md:flex-row"
      >
        <div className=" px-8 p-8">
          <h2 className="text-7xl tracking-wide col-span-2 font-sketch font-bold">
            Tech-notes
          </h2>
          <div className="text-pretty text-sm p-3">
            My digital note book - A collection of my learnings / readings as
            .mds on my github are getting out of hand{" "}
          </div>
        </div>

        <div className="px-8 text-xl  tracking-wide  font-texturina  md:pt-8 flex flex-wrap gap-5 md:flex-col md:grid md:grid-cols-2 md:gap-14 items-center content-baseline">
          <ul className="list-none divide-x divide-dashed divide-slate-500 md:divide-x-0 md:divide-y ">
            {categories1.map((category) => (
              <li className=" p-5 ">
                <Link
                  className=""
                  href="/categories${category}"
                >
                  {" "}
                  {category}{" "}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list-none divide-x divide-dashed divide-slate-500 md:divide-x-0 md:divide-y ">
            {categories2.map((category) => (
              <li className=" p-5 ">
                <Link  href="/categories${category}">
                  {" "}
                  {category}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

//             col-start-1 cols-span-3 md:col-start-3 md:col-span-1 grid grid-cols-8 md:gap-x-8 md:grid-cols-2
