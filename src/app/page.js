import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "./components/navbar/page";
import BoxBasic from "./components/banner/page";
import Main from "./components/main/page";
import SimplePaper from "./components/footer/page";


export default function Home() {
  return (
    <div>
   
      {/* <ResponsiveAppBar />     */}
      <BoxBasic />
      <Main />
      {/* <SimplePaper /> */}
    </div>
  );
}
