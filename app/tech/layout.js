import Image from "next/image";

export default function DashboardLayout({ children }) {
    return (
        <div className="grid grid-rows-[20px_3fr_20px] min-h-screen w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-bl
      from-slate-900 via-black  to-blue-950 leading-relaxed text-slate-300 select-none">
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className="w-full grid grid-cols-[1fr_4fr_1fr] font-texturina text-xl">

                <div className="flex flex-start">  <Image
                    aria-hidden
                    src="https://nextjs.org/icons/file.svg"
                    alt="File icon"
                    width={26}
                    height={26}
                /></div>
                <div className="flex flex-row gap-16 items-center justify-center">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        What I read / built today !?
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Home
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Weekly Code Report
                    </a>
                </div>
                <div className="flex flex-row-reverse items-end gap-3"> <Image
                    aria-hidden
                    src="https://nextjs.org/icons/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                </div>
            </nav>


            {children}
        </div>
    )
}