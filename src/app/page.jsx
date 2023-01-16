import { Inter } from "@next/font/google";
import { All_products } from "components/All_products";
import Navbar from "components/Navbar";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <All_products />
    </div>
  );
}
