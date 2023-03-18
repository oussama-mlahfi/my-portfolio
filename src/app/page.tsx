import TypingAnimation from "@/component/shared/TypingAnimation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="text-black">
        <span className=" font-tags ">{"<body>"}</span>
        <div className="py-10">
          <span className=" font-tags ">{"<h1>"}</span>
          <div className="flex flex-col items-start text-5xl h-36 font-black ">
            <TypingAnimation delay={0} text="Hi," loop={false} />
            <TypingAnimation
              delay={500}
              text="I'm Oussama Mlahfi,"
              loop={false}
            />
            <TypingAnimation
              delay={3200}
              text="A FullStack Developer"
              loop={false}
            />
          </div>
          <span className=" font-tags ">{"<h1>"}</span>
        </div>
        <div className="flex flex-row items-center py-6">
          <span className=" font-tags ">{"<span>"}</span>
          <span className="text-2xl font-bold">
            Web Developer / Mobile Application Developer
          </span>
          <span className=" font-tags ">{"</span>"}</span>
        </div>
        <div>
          <span>Contact Me!</span>
        </div>
        <span className=" font-tags ">{"</body>"}</span>
      </div>
    </main>
  );
}

const categories = [{ name: "cat" }, { name: "cat" }, { name: "cat" }];
