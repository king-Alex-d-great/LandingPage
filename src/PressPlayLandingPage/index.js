import React from "react";
import girl from "./Girl 1.png";
import girl2 from "./image 2.png";
import girl3 from "./image 23.png";
import littlepic from "./image 29.png";
import littlepic1 from "./image 25.png";
import littlepic2 from "./image 28.png";
import littlepic3 from "./image 30.png";
import littlepic4 from "./image 31.png";
import littlepic5 from "./image 33.png";
import littlepic6 from "./image 34.png";
import littlepic7 from "./image 36.png";
import littlepic8 from "./image 38.png";
import "./LandingPage.css";
import { FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Footer from "../pressplayfooter";
import { NavbarP } from "./PressPlayNavBar";
function LandingPage() {
  return (
    <main className="LandingPage">
      <NavbarP />
      <section className="TopLayerLandingPage">
        <div className="TopLayerLandingPageTextArea">
          <h1>
            Just Press <br /> Play
          </h1>
          <p>
            upload and listen to your favourite podcast <br />
            in one place . join our amazing world and <br /> share
          </p>
          <button>Get Started</button>
        </div>

        <div>
          <img
            src={girl}
            alt="press play client listening to beautiful podcast episode"
          />
        </div>
      </section>

      <section className="secondLayerLandingPage">
        <img
          src={girl2}
          alt="press play client listening to beautiful podcast episode"
          className="secondLayerImage"
        />

        <p>
          PressPlay gives podcast creators the oppourtunity to
          <br />
          share their voice with listeners. <br />
          We're passionate about your expressive side and our <br />
          unique podcast <br />
          <br />
          <span style={{ color: "#E2514c" }}>Get Started</span>
          <FaArrowRight className="secondLayerArrowIcon" />
        </p>
      </section>
      <section className="thirdLayerLandingPage">
        <div>
          <svg
            width="101"
            height="51"
            viewBox="0 0 101 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.0104 13.4008C40.0104 12.2433 40.9478 11.3059 42.1053 11.3059C43.2628 11.3059 44.2001 12.2433 44.2001 13.4008V37.5286C44.2001 38.6861 43.2628 39.6235 42.1053 39.6235C40.9478 39.6235 40.0104 38.6861 40.0104 37.5286V13.4008ZM60.2093 13.4008C60.2093 12.2433 59.2719 11.3059 58.1144 11.3059C56.9569 11.3059 56.0195 12.2433 56.0195 13.4008V37.5286C56.0195 38.6861 56.9569 39.6235 58.1144 39.6235C59.2719 39.6235 60.2093 38.6861 60.2093 37.5286V13.4008ZM100.191 8.16766C100.191 7.01018 99.2621 6.08093 98.1291 6.08093C96.9879 6.08093 96.0668 7.01018 96.0668 8.16766V42.7536C96.0668 43.9111 96.996 44.8403 98.1291 44.8403C99.2702 44.8403 100.191 43.9111 100.191 42.7536V8.16766ZM92.2275 2.55142C92.2275 1.39394 91.2901 0.456543 90.1327 0.456543C88.9752 0.456543 88.0378 1.39394 88.0378 2.55142V48.3617C88.0378 49.5191 88.9752 50.4565 90.1327 50.4565C91.2901 50.4565 92.2275 49.5191 92.2275 48.3617V2.55142ZM68.2138 18.1122C68.2138 16.9548 67.2765 16.0174 66.119 16.0174C64.9615 16.0174 64.0241 16.9548 64.0241 18.1122V32.8009C64.0241 33.9583 64.9615 34.8957 66.119 34.8957C67.2765 34.8957 68.2138 33.9583 68.2138 32.8009V18.1122ZM76.2103 13.4008C76.2103 12.2433 75.2729 11.3059 74.1154 11.3059C72.9579 11.3059 72.0205 12.2433 72.0205 13.4008V37.5286C72.0205 38.6861 72.9579 39.6235 74.1154 39.6235C75.2729 39.6235 76.2103 38.6861 76.2103 37.5286V13.4008ZM84.1904 8.16766C84.1904 7.01018 83.2611 6.08093 82.1281 6.08093C80.9869 6.08093 80.0658 7.01018 80.0658 8.16766V42.7536C80.0658 43.9111 80.9951 44.8403 82.1281 44.8403C83.2693 44.8403 84.1904 43.9111 84.1904 42.7536V8.16766ZM0.0283203 8.16766C0.0283203 7.01833 0.957567 6.08093 2.0906 6.08093C3.23178 6.08093 4.15287 7.01018 4.15287 8.16766V42.7536C4.15287 43.9111 3.22363 44.8403 2.0906 44.8403C0.949416 44.8403 0.0283203 43.9029 0.0283203 42.7536V8.16766ZM8.00028 2.55142C8.00028 1.39394 8.93768 0.456543 10.0952 0.456543C11.2526 0.456543 12.19 1.39394 12.19 2.55142V48.3617C12.19 49.5191 11.2526 50.4565 10.0952 50.4565C8.93768 50.4565 8.00028 49.5191 8.00028 48.3617V2.55142ZM32.0058 18.1122C32.0058 16.9548 32.9432 16.0174 34.1007 16.0174C35.2582 16.0174 36.1956 16.9548 36.1956 18.1122V32.8009C36.1956 33.9583 35.2582 34.8957 34.1007 34.8957C32.9432 34.8957 32.0058 33.9583 32.0058 32.8009V18.1122ZM24.0094 13.4008C24.0094 12.2433 24.9468 11.3059 26.1043 11.3059C27.2618 11.3059 28.1992 12.2433 28.1992 13.4008V37.5286C28.1992 38.6861 27.2618 39.6235 26.1043 39.6235C24.9468 39.6235 24.0094 38.6861 24.0094 37.5286V13.4008ZM16.0293 8.16766C16.0293 7.01018 16.9585 6.08093 18.0916 6.08093C19.2328 6.08093 20.1539 7.01018 20.1539 8.16766V42.7536C20.1539 43.9111 19.2246 44.8403 18.0916 44.8403C16.9504 44.8403 16.0293 43.9111 16.0293 42.7536V8.16766ZM48.0394 8.16766C48.0394 7.01018 48.9687 6.08093 50.1017 6.08093C51.2429 6.08093 52.164 7.01018 52.164 8.16766V42.7536C52.164 43.9111 51.2347 44.8403 50.1017 44.8403C48.9605 44.8403 48.0394 43.9111 48.0394 42.7536V8.16766Z"
              fill="white"
            />
          </svg>

          <h2>
            Free hosting <br /> and <br /> Distribution
          </h2>
          <p>
            100% free hosting and distribution <br /> to a wide range of
            listener.
          </p>
        </div>
        <div>
          <svg
            width="52"
            height="51"
            viewBox="0 0 52 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.6692 29.4398V50.4558H22.4416V29.4398C20.3959 28.3361 19.0062 26.1781 19.0062 23.6958C19.0062 20.0912 21.9387 17.1683 25.5554 17.1683C29.1717 17.1683 32.1046 20.0912 32.1046 23.6958C32.1046 26.1781 30.7149 28.3361 28.6692 29.4398ZM16.3549 5.08535C17.5678 4.48915 18.0649 3.02517 17.4668 1.81742C16.8686 0.609249 15.4011 0.112964 14.1891 0.708755C9.23921 3.1425 5.38956 7.16875 2.95706 11.9098C1.16014 15.4111 0.13565 19.3072 0.0121123 23.2389C-0.112258 27.2038 0.67223 31.2089 2.4966 34.8952C4.74317 39.4364 8.55205 43.4755 14.1595 46.3351C15.3612 46.9474 16.8337 46.4719 17.4476 45.2741C18.062 44.0763 17.5853 42.609 16.3836 41.997C11.7927 39.6566 8.69431 36.3895 6.88616 32.7372C5.42783 29.7889 4.80057 26.5774 4.9004 23.3923C5.00147 20.1762 5.83879 16.99 7.30877 14.1267C9.27706 10.2912 12.3784 7.03981 16.3549 5.08535ZM36.9217 0.70834C35.7097 0.112135 34.2418 0.608835 33.6436 1.817C33.0455 3.02517 33.543 4.48915 34.7559 5.08494C38.7328 7.03981 41.8342 10.2907 43.8016 14.1267C45.2712 16.9896 46.1089 20.1758 46.2096 23.3923C46.3094 26.5774 45.6821 29.7889 44.2242 32.7372C42.4161 36.3895 39.3176 39.6566 34.7268 41.997C33.5251 42.6094 33.0488 44.0767 33.6627 45.2741C34.2767 46.4719 35.7492 46.947 36.9509 46.3351C42.5579 43.4759 46.3672 39.4364 48.6138 34.8952C50.4382 31.2089 51.2226 27.2038 51.0983 23.2389C50.9747 19.3072 49.9502 15.4111 48.1537 11.9098C45.7208 7.16875 41.8716 3.1425 36.9217 0.70834ZM34.4368 11.4454C33.5238 10.7899 32.2506 10.9968 31.593 11.9069C30.9358 12.8169 31.1429 14.0861 32.0559 14.7416C32.424 15.0057 32.7851 15.3021 33.1391 15.6263C35.2068 17.5265 36.433 20.0601 36.6905 22.741C36.9509 25.4459 36.2283 28.3121 34.3952 30.8474C34.0841 31.2782 33.7256 31.7148 33.32 32.1534C32.5567 32.9793 32.6096 34.2671 33.4394 35.0275C34.2688 35.7879 35.5603 35.7344 36.3232 34.9085C36.814 34.3782 37.2741 33.8135 37.7021 33.2202C40.1404 29.8457 41.0987 26.006 40.7477 22.3587C40.395 18.6882 38.7216 15.2242 35.9027 12.6333C35.4593 12.2257 34.9705 11.8294 34.4368 11.4454ZM19.0545 14.7428C19.9675 14.0873 20.175 12.8182 19.5174 11.9081C18.8598 10.9981 17.5866 10.7912 16.6735 11.4463C16.1395 11.8302 15.6511 12.2265 15.2077 12.6337C12.3884 15.225 10.715 18.6886 10.3623 22.3591C10.0112 26.006 10.9696 29.847 13.4083 33.2214C13.8372 33.8143 14.2968 34.3786 14.7872 34.9089C15.5501 35.7348 16.8416 35.7883 17.6706 35.0279C18.5008 34.2675 18.5537 32.9801 17.7904 32.1538C17.3848 31.7148 17.0263 31.2786 16.7151 30.8478C14.8824 28.3125 14.1595 25.4467 14.4199 22.7418C14.6774 20.0614 15.9036 17.5273 17.9713 15.6272C18.3257 15.3034 18.6868 15.0069 19.0545 14.7428Z"
              fill="white"
            />
          </svg>

          <h2>
            Easy-to-use <br /> podcast <br /> features
          </h2>
          <p>
            User-friendly and engaging podcast interface <br /> features that
            podcasters and listeners love
          </p>
        </div>
        <div>
          <svg
            width="101"
            height="51"
            viewBox="0 0 101 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.0104 13.4008C40.0104 12.2433 40.9478 11.3059 42.1053 11.3059C43.2628 11.3059 44.2001 12.2433 44.2001 13.4008V37.5286C44.2001 38.6861 43.2628 39.6235 42.1053 39.6235C40.9478 39.6235 40.0104 38.6861 40.0104 37.5286V13.4008ZM60.2093 13.4008C60.2093 12.2433 59.2719 11.3059 58.1144 11.3059C56.9569 11.3059 56.0195 12.2433 56.0195 13.4008V37.5286C56.0195 38.6861 56.9569 39.6235 58.1144 39.6235C59.2719 39.6235 60.2093 38.6861 60.2093 37.5286V13.4008ZM100.191 8.16766C100.191 7.01018 99.2621 6.08093 98.1291 6.08093C96.9879 6.08093 96.0668 7.01018 96.0668 8.16766V42.7536C96.0668 43.9111 96.996 44.8403 98.1291 44.8403C99.2702 44.8403 100.191 43.9111 100.191 42.7536V8.16766ZM92.2275 2.55142C92.2275 1.39394 91.2901 0.456543 90.1327 0.456543C88.9752 0.456543 88.0378 1.39394 88.0378 2.55142V48.3617C88.0378 49.5191 88.9752 50.4565 90.1327 50.4565C91.2901 50.4565 92.2275 49.5191 92.2275 48.3617V2.55142ZM68.2138 18.1122C68.2138 16.9548 67.2765 16.0174 66.119 16.0174C64.9615 16.0174 64.0241 16.9548 64.0241 18.1122V32.8009C64.0241 33.9583 64.9615 34.8957 66.119 34.8957C67.2765 34.8957 68.2138 33.9583 68.2138 32.8009V18.1122ZM76.2103 13.4008C76.2103 12.2433 75.2729 11.3059 74.1154 11.3059C72.9579 11.3059 72.0205 12.2433 72.0205 13.4008V37.5286C72.0205 38.6861 72.9579 39.6235 74.1154 39.6235C75.2729 39.6235 76.2103 38.6861 76.2103 37.5286V13.4008ZM84.1904 8.16766C84.1904 7.01018 83.2611 6.08093 82.1281 6.08093C80.9869 6.08093 80.0658 7.01018 80.0658 8.16766V42.7536C80.0658 43.9111 80.9951 44.8403 82.1281 44.8403C83.2693 44.8403 84.1904 43.9111 84.1904 42.7536V8.16766ZM0.0283203 8.16766C0.0283203 7.01833 0.957567 6.08093 2.0906 6.08093C3.23178 6.08093 4.15287 7.01018 4.15287 8.16766V42.7536C4.15287 43.9111 3.22363 44.8403 2.0906 44.8403C0.949416 44.8403 0.0283203 43.9029 0.0283203 42.7536V8.16766ZM8.00028 2.55142C8.00028 1.39394 8.93768 0.456543 10.0952 0.456543C11.2526 0.456543 12.19 1.39394 12.19 2.55142V48.3617C12.19 49.5191 11.2526 50.4565 10.0952 50.4565C8.93768 50.4565 8.00028 49.5191 8.00028 48.3617V2.55142ZM32.0058 18.1122C32.0058 16.9548 32.9432 16.0174 34.1007 16.0174C35.2582 16.0174 36.1956 16.9548 36.1956 18.1122V32.8009C36.1956 33.9583 35.2582 34.8957 34.1007 34.8957C32.9432 34.8957 32.0058 33.9583 32.0058 32.8009V18.1122ZM24.0094 13.4008C24.0094 12.2433 24.9468 11.3059 26.1043 11.3059C27.2618 11.3059 28.1992 12.2433 28.1992 13.4008V37.5286C28.1992 38.6861 27.2618 39.6235 26.1043 39.6235C24.9468 39.6235 24.0094 38.6861 24.0094 37.5286V13.4008ZM16.0293 8.16766C16.0293 7.01018 16.9585 6.08093 18.0916 6.08093C19.2328 6.08093 20.1539 7.01018 20.1539 8.16766V42.7536C20.1539 43.9111 19.2246 44.8403 18.0916 44.8403C16.9504 44.8403 16.0293 43.9111 16.0293 42.7536V8.16766ZM48.0394 8.16766C48.0394 7.01018 48.9687 6.08093 50.1017 6.08093C51.2429 6.08093 52.164 7.01018 52.164 8.16766V42.7536C52.164 43.9111 51.2347 44.8403 50.1017 44.8403C48.9605 44.8403 48.0394 43.9111 48.0394 42.7536V8.16766Z"
              fill="white"
            />
          </svg>
          <h2>
            A wide range of <br /> of options <br /> to choose from
          </h2>
          <p>
            Thousands of free and engaging <br /> podcast topics to choose from
          </p>
        </div>
      </section>

      <section className="FourthLayerLandingPage">
        <h2> The most engaging podcast topics to choose from</h2>
        <div className="FourthLayerMain">
          <div className="form-group has-search">
            <FiSearch className="fa fa-search form-control-feedback" />
            {/* <input
              type="text"
              className="form-control"
              placeholder="Enter Search"
            /> */}
          </div>
          <div className="FourthLayerBoxesContainer">
            <img
              src={littlepic1}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic2}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic3}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic4}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic5}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic6}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic7}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic8}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic1}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
            <img
              src={littlepic}
              alt="press play client listening to beautiful podcast episode"
              className="FourthLayerBoxes"
            />
          </div>
        </div>
      </section>

      <section className="FifthLayerLandingPage">
        <div className="FifthLayerSection1">
          <div className="FifthLayerTopTextSection">
            <h2>
              Real Stories from Real <br /> listeners and podcasters
            </h2>
            <p>Get inspired by this stories</p>
          </div>
          <div className="quote" id="quote1">
            <p>
              Press Play is one of the best Podcast site I have come across.
              It’s so flexible, well organised and informative
            </p>{" "}
            <h4>Elliot YIbaebi</h4>
            <p className="nameTitle">President, NDU</p>
          </div>
        </div>

        <div className="FifthLayerSection2">
          <div className="quote" id="quote2">
            <p>
              This Is incredible! It’s a pretty neat service and it is well
              convenient.{" "}
            </p>
            <h4>Yvonne Ogwulu</h4>
            <p>CEO, Tech Girl Magic</p>
          </div>
          <div className="quote" id="quote3">
            <p>Just found a new way to upload podcasts, Thanks Press play.</p>
            <h4>Yemi Harry</h4>
            <p className="nameTitle">Back-end Developer, Genesys</p>
          </div>
        </div>
      </section>
      <section id="sixthlayer" className="sixthLayerLandingPage">
        <div>
          <h4>
            Ready to make your own <br /> Podcasts
          </h4>
          <p>Join the press Play community</p>
          <button id="Getstarted2"> Get Started</button>
        </div>

        <img
          src={girl3}
          alt="press play client listening to beautiful podcast episode"
          className="sixthLayerImage"
        />
      </section>
      <Footer />
    </main>
  );
}

export { LandingPage };
