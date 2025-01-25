import Styles from "./pub.module.css";
import Image from "next/image";
import imgbook from "../../../public/book.png";
import Link from "next/link";

export default function Publications() {
  return (
    <div className="container">
      <div className={Styles.pubmain}>
        <div className={Styles.pubhead}>
          <h2>Publications</h2>
          <h5>Our featured Publications</h5>
        </div>
        <div className={Styles.pubsub}>
          <div className="row">
            <div className={`col-lg-3 col-12 ${Styles.pubm}`}>
               <Link href="./zhodhabook1.pdf" target="_blank">
              <div className={Styles.pubcardmain}>
                <Image height={250} src={imgbook} alt=""></Image>
                <h4>December 2024 Edition</h4>
              </div>
              </Link>
            </div>
           
        
          </div>
        </div>
      </div>
    </div>
  );
}
