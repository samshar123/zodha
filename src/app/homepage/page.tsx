"use client";

// Import useState from 'react' library
import "bootstrap/dist/css/bootstrap.css";
import styles from "../homepage/home.module.css";
import Image from "next/image";
import img2 from "../../../public/img2.png";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Sparkles from "react-sparkle";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CForm, CCol, CFormInput, CButton, CFormTextarea } from "@coreui/react";
import "../../app/globals.css";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { IoIosPaper } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { PiMedal } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import team2 from "../../../public/suhail.jpg";
import team3 from "../../../public/niyas.jpg";
import team4 from "../../../public/isra.jpg";
import team5 from "../../../public/amila.jpg";
import team6 from "../../../public/mubarak.jpg";
import team7 from "../../../public/yusaf.jpg";
import team8 from "../../../public/irshad.jpg";
import team9 from "../../../public/ali.jpg";
import team10 from "../../../public/team10.jpg";
import team11 from "../../../public/team11.jpg";
import team12 from "../../../public/team12.jpg";
import team13 from "../../../public/team13.jpg";
import gal1 from "../../../public/gal1.jpg";
import gal2 from "../../../public/gal2.jpg";
import gal3 from "../../../public/gal7.jpg";
import gal4 from "../../../public/gal4.jpg";
import gal5 from "../../../public/gal5.jpg";
import gal6 from "../../../public/gal8.jpg";
import gal10 from "../../../public/gal10.jpg"

function scrollFunction(): void {
  const scrollUpLink = document.getElementById("scrollUpLink");
  if (scrollUpLink !== null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      scrollUpLink.style.display = "block";
    } else {
      scrollUpLink.style.display = "none";
    }
  }
}

const images = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
];

export default function home() {
  // window.onscroll = function () {
  //   scrollFunction();
  // };
  return (
    <section id={styles.homemain}>
      <Sparkles
        color="green"
        count={20}
        minSize={4}
        maxSize={12}
        overflowPx={0}
        fadeOutSpeed={5}
        flicker={false}
      />

      <Link href={"https://wa.me/8136950619"}>
        <FaSquareWhatsapp className={styles.whatslogo} />{" "}
      </Link>
      <Link href={"#home"} id="scrollUpLink" style={{ display: "none" }}>
        <BsArrowUpSquareFill className={styles.upicon} />
      </Link>

      <section id="home" className={styles.home}>
        <TbBulb className={styles.icon1} />
        <IoIosPaper className={styles.icon2} />
        <IoSearchSharp className={styles.icon3} />
        <TbTargetArrow className={styles.icon4} />
        <GiProgression className={styles.icon5} />
        <PiMedal className={styles.icon6} />

        <div className={styles.mainlogodiv}>
          <Image className={styles.mainlogo} src={img2} alt="" />
          <h5>
            Empowers organizations and individuals with innovative,
            research-driven solutions tailored to address complex challenges.
            Discover actionable insights and achieve sustainable growth with our
            precision and expertise.
          </h5>

          <a href="https://www.google.com">
            {" "}
            <a href="#about">
              {" "}
              <button className={styles.aboutbnt}>
                About us
                <FaLongArrowAltRight />
              </button>
            </a>
          </a>
          <br />

          <button className={styles.btnnews}>
            <a href="https://forms.gle/NKU6EqgTzhnuZdYJA" target="_blank">
              Event Registration : BASICS OF ACADEMIC RESEARCH
              </a>
              </button>



          
        </div>
      </section>
      <section id="about">
        <div id={styles.abouthome}>
          <div className={styles.aboutcont}>
            <div className="container">
              <h2>WELCOME TO</h2>
              <h1>ZODHA RESEARCH</h1>
              <p>
                Zodha Research specializes in crafting customized solutions for
                a variety of entities like businesses, schools, NGOs, and
                others. We pay close attention to psychological factors when
                tackling research challenges. Our experienced team is adept at
                problem-solving and uses creative methods to achieve measurable
                outcomes. We prioritize accuracy and creativity to provide
                practical insights that foster growth and long-term success.
                Committed to high standards and honesty, we work closely with
                clients to develop effective strategies together.
              </p>
              <a href="#service">
                {" "}
                <div>
                  <h6>
                    Our Services{" "}
                    <FaLongArrowAltRight className={styles.arrow2} />{" "}
                  </h6>
                </div>
              </a>
            </div>
            <GiProgression className={styles.roboimg2} />
          </div>
        </div>
      </section>

      <section id="service">
        <div id={styles.coursehome}>
          <div className={styles.aboutcont}>
            <div className="container">
              <h2>Services</h2>
              <h5 className={styles.coursesub}>Our featured Services</h5>
              <br />
              <br />
              <div className="row">
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1 style={{ marginBottom: "10px" }}>
                      Academic/Research sessions
                    </h1>
                    <ul>
                      <li>Research methodology & Data analysis</li>
                      <li>Article writing & Publishing</li>
                      <li>Primary & Secondary data analysis</li>
                      <li>
                        Referencing style management & Writing tools workshops
                      </li>
                      <li>Higher education and PhD orientation programs</li>
                      <li>Academic project writing for UG & PG students</li>
                    </ul>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Assistance Services</h1>
                    <ul>
                      <li>
                        Primary data analysis for projects and Dissertations
                      </li>
                      <li>
                        Secondary data analysis for projects and dissertations{" "}
                      </li>
                      <li>Econometric analysis for finance</li>
                      <li>Article writing and publishing</li>
                    </ul>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1 style={{ marginBottom: "12px" }}>
                      Action research programs
                    </h1>
                    <p>
                      Conducting Action research based on the problems faced by
                      the organizations, education institutions, Non-Government
                      Organizations (NGOs), Government local bodies etc., to
                      solve specific problems or improve practices through
                      collaborative inquiry and action.
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <ul>
                      <h1>Training programs</h1>
                      <li>
                        Training on stock market trading & investment practices
                      </li>
                      <li>Training and development program for employees</li>
                    </ul>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Hands on workshops</h1>
                    <p>
                      workshops on Data analysis using IBM SPSS, Stata, R etc.
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Psychological Assessments</h1>
                    <p>
                      Gain insights into individual and group dynamics to
                      identify strengths and areas for improvement.
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Customized Training and Workshops</h1>
                    <p>
                      Develop skills and foster growth through tailored programs
                      designed for your organization's unique requirements.{" "}
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Organizational Development </h1>
                    <p>
                      Cultivate a positive work or learning environment with
                      guidance on leadership, culture, team dynamics, and
                      motivation.{" "}
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Policy Development </h1>
                    <p>
                      Create inclusive policies to support all members of your
                      organization.{" "}
                    </p>
                  </div>
                </div>
                <div className={`col-lg-4 col-12 ${styles.coursecard}`}>
                  <div className={styles.cardcont}>
                    <h1>Consultation Services </h1>
                    <p>
                      Address specific challenges in mental health, employee
                      relations, or organizational development through expert
                      guidance.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <TbTargetArrow className={styles.roboimg3} />
          </div>
        </div>
      </section>

      < section id = "gallery1" >
      <div id={ styles.galleryhome }>
        <div className="container" >
          <div className={ styles.galleryhead }>
            <h2>Gallery </h2>
            < h5 className = { styles.coursesub } > Our Valuable moments </h5>
              </div>
              < div className = "row" >
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" >
                  <div className={ styles.imgcard }>
                    <Image
                    src={gal1}
alt = "Boat on Calm Water"
width = { 600}
height = { 400}
  />
  </div>

  < div className = {styles.imgcard} >
    <Image  src={gal2}
alt = "Wintry Mountain Landscape"
width = { 600}
height = { 400}
  />
  </div>
  </div>

  < div className = "col-lg-4 mb-4 mb-lg-0" >
    <div className={ styles.imgcard }>
      <Image
                    src={gal3}
alt = "Mountains in the Clouds"
width = { 600}
height = { 400}
  />
  </div>

  < div className = { styles.imgcard } >
    <Image
                    src={gal4}
alt = "Boat on Calm Water"
width = { 600}
height = { 400}
  />
  </div>
  </div>

  <div className= "col-lg-4 mb-4 mb-lg-0" >
    <div className={ styles.imgcard }>
      <Image
                    src={gal5}
alt = "Waves at Sea"
width = { 600}
height = { 400}
  />
  </div>

  < div className = { styles.imgcard } >
    <Image
                    className={ styles.imggal }
src = {gal10}
alt = "Yosemite National Park"
width = { 600}
height = { 400}
  />
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
      <section id="team">
        <div id={styles.teamhome}>
          <div className={styles.teamhead}>
            <h2>Team</h2>
            <h5 className={styles.coursesub}>Our Backend</h5>
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team12} className={styles.teamimg} alt="" />
                  <h3>Dr.SUHAIL PULPARAMBIL</h3>
                  <h5>Director of Research</h5>
                  <p>
                    Assistant Professor on contract,Sullamussalam Science
                    College
                  </p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team3} className={styles.teamimg} alt="" />
                  <h3>NIYAS N</h3>
                  <h5>Director of Research</h5>
                  <p>Senior Research Fellow, Pondichery University </p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team13} className={styles.teamimg} alt="" />
                  <h3>FATHIMA ISRA</h3>
                  <h5>Head, Behavioral Research</h5>
                  <p>CEO,Kindled Psychology Services </p>

                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team5} className={styles.teamimg} alt="" />
                  <h3>AMILA ANJUM</h3>
                  <h5>Chief Psychologist, Research and Development</h5>
                  <p>HR Operations Manager, RISE-TBI</p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team11} className={styles.teamimg} alt="" />
                  <h3>ABIDA ABDULLA</h3>
                  <h5>Project Manager</h5>
                  <p>
                    {" "}
                    Assistant Professor on contract,Sullamussalam Science
                    College
                  </p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team6} className={styles.teamimg} alt="" />
                  <h3>Dr.MUBARAK RAHMAN</h3>
                  <h5>Research Executive</h5>
                  <p>Assistant Professor,LEAD College Palakkad</p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team7} className={styles.teamimg} alt="" />
                  <h3>YUSAF HARUN K</h3>
                  <h5>Research Executive</h5>
                  <p>Assistant Professor,Kalasalingam University</p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team8} className={styles.teamimg} alt="" />
                  <h3>Dr.MUHAMMED IRSHAD VK</h3>
                  <h5>Research Executive</h5>
                  <p>Assistant Professor,LEAD College Palakkad</p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team9} className={styles.teamimg} alt="" />
                  <h3>MOHAMED ALI KUNIPARAMBIL</h3>
                  <h5>Research Executive</h5>
                  <p>Senior Research Fellow, Pondichery University </p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
                <div className={styles.team1}>
                  <Image src={team10} className={styles.teamimg} alt="" />
                  <h3>NAMSHAD P</h3>
                  <h5>Research Executive</h5>
                  <p>Senior Research Fellow, Pondichery University </p>
                  <div className={styles.teamicon}>
                    <FaSquareFacebook className={styles.iconteam} />
                    <BiLogoLinkedinSquare className={styles.iconteam} />
                    <FaSquareInstagram className={styles.iconteam} />
                  </div>
                </div>
              </div>

              {/* <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.team1}>
                <Image src={team5} className={styles.teamimg} alt="" />
                <h3>Full Name</h3>
                <h5>Designation</h5>
                <div className={styles.teamicon}>
                  <FaSquareFacebook className={styles.iconteam} />
                  <BiLogoLinkedinSquare className={styles.iconteam} />
                  <FaSquareInstagram className={styles.iconteam} />
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.team1}>
                <Image src={team5} className={styles.teamimg} alt="" />
                <h3>Full Name</h3>
                <h5>Designation</h5>
                <div className={styles.teamicon}>
                  <FaSquareFacebook className={styles.iconteam} />
                  <BiLogoLinkedinSquare className={styles.iconteam} />
                  <FaSquareInstagram className={styles.iconteam} />
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.team1}>
                <Image src={team5} className={styles.teamimg} alt="" />
                <h3>Full Name</h3>
                <h5>Designation</h5>
                <div className={styles.teamicon}>
                  <FaSquareFacebook className={styles.iconteam} />
                  <BiLogoLinkedinSquare className={styles.iconteam} />
                  <FaSquareInstagram className={styles.iconteam} />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div id={styles.contact}>
          <div className={styles.teamhead}>
            <h2>Contact Us</h2>
            <h5 className={styles.coursesub}>Reach us</h5>
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-lg-4 col-12 ${styles.conticon}`}>
                <div className={styles.conticon1}>
                  <div className={styles.iconcont}>
                    <h1>
                      <MdEmail className={styles.icon} />
                    </h1>
                  </div>
                  <div className={styles.continfo}>
                    <h2>Email</h2>
                    <p>mail@zodharesearch.com</p>
                  </div>
                </div>
                <div className={styles.conticon1}>
                  <div className={styles.iconcont}>
                    <h1>
                      <FaPhoneAlt className={styles.icon} />
                    </h1>
                  </div>
                  <div className={styles.continfo}>
                    <h2>Call</h2>
                    <p>+91 9074305205</p>
                  </div>
                </div>
                <div className={styles.conticon1}>
                  <div className={styles.iconcont}>
                    <h1>
                      <IoLocationSharp className={styles.icon} />
                    </h1>
                  </div>
                  <div className={styles.continfo}>
                    <h2>Location</h2>
                    <p>Areekode , Malappuram</p>
                  </div>
                </div>
              </div>
              <div className={`col-lg-8 col-12 ${styles.contform}`}>
                <CForm
                  action="https://formspree.io/f/mnqewyvz"
                  method="POST"
                  className="row g-3"
                >
                  <CCol md={6}>
                    <CFormInput
                      className={styles.label}
                      name="name"
                      label="Name"
                      type="text"
                      id="inputEmail4"
                      placeholder="Your Name"
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      name="email"
                      label="Email"
                      type="email"
                      id="inputEmail4"
                      placeholder="Your Email"
                    />
                  </CCol>
                  <CCol xs={12}>
                    <CFormInput
                      name="subject"
                      label="Subject"
                      type="text"
                      id="inputMessage"
                      placeholder="your subject here"
                    />
                  </CCol>
                  <CCol xs={12}>
                    <CFormTextarea
                      name="message"
                      id="floatingTextarea"
                      label="Message"
                      placeholder="Your message"
                    ></CFormTextarea>
                  </CCol>

                  <CCol
                    xs={12}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <CButton
                      style={{
                        backgroundColor: "transparent",
                        color: "#71b244",
                      }}
                      type="submit"
                    >
                      Send <FaLongArrowAltRight className={styles.arrow2} />{" "}
                    </CButton>
                  </CCol>
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
