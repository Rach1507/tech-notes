import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import Link from "next/link";

export default function TwitterWobbleCard() {

    return (
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="py-5">
          <h2 className=" text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tweet Tweet .. ki ki ki .. rrrhha.. ayye .. Tweet
          </h2>
          <p className="mt-4  text-neutral-200">
            I knoww , everybody lovess Danny Ricc .
            <span className="w-full font-bold text-m ">PS : If u dont see the
            tweets , please log in to X . Im sorry , but it is what is... WHY u ask ?
            check     <Link
              href="https://stackoverflow.com/a/78186868"
              className="font-bold "
            >
              this
            </Link> </span> 
       
          </p>
        </div>

        <div className="py-5 grid  gap-5 
        grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1
        
        ">
          <div className="row-span-2">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                &quot;Ability to balance creativity &amp; precision - mix of
                technical skill &amp; artistic intuition- thrive in envs that
                allow you to express both analytical thinking &amp; creative
                passion- unique edge in problem-solving &amp; innovation&quot;{" "}
                <br />
                <br />
                Hmmm..So that&#39;s why I love the frontend &amp; so hooked
                onit?{" "}
                <a href="https://t.co/Ze6ctASRCL">
                  https://t.co/Ze6ctASRCL
                </a>{" "}
                <a href="https://t.co/U7ldK2vnoZ">pic.twitter.com/U7ldK2vnoZ</a>
              </p>
              &mdash; Rachitha Br (@RachithaBr){" "}
              <a href="https://twitter.com/RachithaBr/status/1845497714911384056?ref_src=twsrc%5Etfw">
                October 13, 2024
              </a>
            </blockquote>{" "}
          </div>

          <div className="flex flex-col gap-5">
          <blockquote className="twitter-tweet ">
            <p lang="en" dir="ltr">
              1/4 Curious: What are the potential risks of making platforms like{" "}
              <a href="https://twitter.com/hashtag/IRCTC?src=hash&amp;ref_src=twsrc%5Etfw">
                #IRCTC
              </a>{" "}
              open source? Why hasn’t this been considered?Or if it was,why was
              it discarded? Given my limited knowledge of backend sys &amp;
              security,I’m curious to know thoughts on whether it would work or
              not.
              <a href="https://twitter.com/hashtag/OpenSource?src=hash&amp;ref_src=twsrc%5Etfw">
                #OpenSource
              </a>
            </p>
            &mdash; Rachitha Br (@RachithaBr){" "}
            <a href="https://twitter.com/RachithaBr/status/1841414926247907709?ref_src=twsrc%5Etfw">
              October 2, 2024
            </a>
          </blockquote>
          <blockquote className="twitter-tweet" data-media-max-width="560">
            <p lang="en" dir="ltr">
              2/4 Why I ask: Being a country with so many engineers , if IRCTC
              were open-source, I feel many would gladly pitch in to help . If
              the login flow crashes, for example, I&#39;d feel responsible to
              check and maybe even fix it!{" "}
              <a href="https://twitter.com/hashtag/OpenSource?src=hash&amp;ref_src=twsrc%5Etfw">
                #OpenSource
              </a>{" "}
              <a href="https://twitter.com/hashtag/IRCTC?src=hash&amp;ref_src=twsrc%5Etfw">
                #IRCTC
              </a>{" "}
              <a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">
                #webdev
              </a>
            </p>
            &mdash; Rachitha Br (@RachithaBr){" "}
            <a href="https://twitter.com/RachithaBr/status/1841414928068174291?ref_src=twsrc%5Etfw">
              October 2, 2024
            </a>
          </blockquote>
          </div>

<div>
<blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              4/4 It adds to my sense of contribution—making life easier for
              people of the country. Imagine the collective impact of engineers
              improving public services like IRCTC. That’s how we shape the
              future! 💻🇮🇳{" "}
              <a href="https://twitter.com/hashtag/OpenSource?src=hash&amp;ref_src=twsrc%5Etfw">
                #OpenSource
              </a>{" "}
              <a href="https://twitter.com/hashtag/IRCTC?src=hash&amp;ref_src=twsrc%5Etfw">
                #IRCTC
              </a>{" "}
              <a href="https://twitter.com/hashtag/TechForGood?src=hash&amp;ref_src=twsrc%5Etfw">
                #TechForGood
              </a>
            </p>
            &mdash; Rachitha Br (@RachithaBr){" "}
            <a href="https://twitter.com/RachithaBr/status/1841414934791643184?ref_src=twsrc%5Etfw">
              October 2, 2024
            </a>
          </blockquote>
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Just got my ticket for <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a> Conf — claim yours!<a href="https://t.co/HqzNNpEvui">https://t.co/HqzNNpEvui</a></p>&mdash; Rachitha Br (@RachithaBr) <a href="https://twitter.com/RachithaBr/status/1833892623280439805?ref_src=twsrc%5Etfw">September 11, 2024</a></blockquote> 
        </div>
</div>
 
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </WobbleCard>
    );
    
}