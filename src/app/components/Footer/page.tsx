import styles from "../Footer/footer.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import zdlogo from "../../../../public/img2.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
export default function footer() {
  return (
    <section id={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 ${styles.footerlogo}`}>
            <Image className={styles.pilogo} src={zdlogo} alt="" />
          </div>
          <div className={`col-lg-4 ${styles.iconsfooter}`}>
            <h1>Social media</h1>
            <div className={styles.footericons}>
              <a href="https://www.instagram.com/zodha_research?igsh=MWM5NGRyNHE5eGpxcQ%3D%3D&utm_source=qr">
                <FaSquareInstagram className={styles.footericon} />
              </a>{" "}
              <FaFacebookSquare className={styles.footericon} />{" "}
              <FaLinkedin className={styles.footericon} />
            </div>
          </div>
          <div className={`col-lg-4 ${styles.iconsfooter}`}>
            <h1>Head office</h1>
            <div className={styles.footericons}>
              <h5>
                RISE TBI, Sullamussalam Science College, Areekode.
                <br /> Kerala 673639
              </h5>
            </div>
          </div>

          <div className={`col-lg-12 ${styles.copyright}`}>
            <div className={styles.piright}>
              <h5>© Copyright ZODHA RESEARCH SOLUTIONS. All Rights Reserved</h5>
            </div>
            <div className={styles.dotright}>
              <a href="https://www.teamdotco.com/">
                <h5>
                  Developed by <span> team dotco</span>
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
