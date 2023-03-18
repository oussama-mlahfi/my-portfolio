import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          commodi ex non quis id at obcaecati vel magni nulla, rerum error
          expedita incidunt nesciunt doloribus nemo inventore dolore esse
          dolorum!
        </p>
      </div>
    </main>
  );
}
