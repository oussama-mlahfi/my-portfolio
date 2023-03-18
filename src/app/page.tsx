import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
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
