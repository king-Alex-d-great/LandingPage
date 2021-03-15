import React, { Component } from "react";
import "./footer.css";
import {FaTwitter, FaWhatsapp} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaDribble} from "react-icons/fa"



class Footer extends Component {
  render() {
    return (
      <main className="footer">
        <section>
        <svg width="100" height="35" viewBox="0 0 154 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.21094H6.03779C9.90457 7.21094 13.0227 8.59398 13.0227 12.864C13.0227 16.9946 9.86914 18.8219 6.14522 18.8219H3.97308V24.7838H0V7.21094ZM5.91068 15.6678C8.09576 15.6678 9.12896 14.6942 9.12896 12.864C9.12896 11.0248 7.9529 10.3657 5.80269 10.3657H3.97308V15.6678H5.91068Z" fill="white"/>
<path d="M14.6887 11.4069H17.9221L18.2078 13.745H18.3063C19.2799 11.9587 20.7428 11.0835 22.1067 11.0835C22.871 11.0835 23.3154 11.1819 23.7023 11.3529L23.042 14.7742C22.5662 14.6567 22.173 14.5583 21.5988 14.5583C20.5898 14.5583 19.3659 15.2084 18.6522 17.033V24.7845H14.6887V11.4069Z" fill="white"/>
<path d="M23.7103 18.1005C23.7103 13.7607 26.8066 11.0835 30.0198 11.0835C33.8303 11.0835 35.7173 13.853 35.7173 17.5043C35.7173 18.218 35.6284 18.9323 35.5525 19.2557H27.5501C27.9056 21.1962 29.2341 22.0871 31.0192 22.0871C32.0316 22.0871 32.9417 21.7794 33.9124 21.2114L35.2229 23.6012C33.8522 24.5494 32.0626 25.1079 30.477 25.1079C26.6637 25.1079 23.7103 22.5292 23.7103 18.1005ZM32.3314 16.6348C32.3314 15.164 31.6914 14.1038 30.1086 14.1038C28.8561 14.1038 27.7751 14.9441 27.5057 16.6348H32.3314Z" fill="white"/>
<path d="M36.9152 23.2399L38.6959 20.7708C39.908 21.6876 41.0278 22.1769 42.147 22.1769C43.3282 22.1769 43.8372 21.727 43.8372 21.0262C43.8372 20.1448 42.5115 19.7449 41.1346 19.2055C39.4946 18.5717 37.5946 17.4834 37.5946 15.2724C37.5946 12.7819 39.6194 11.0845 42.7055 11.0845C44.7551 11.0845 46.281 11.9124 47.4199 12.7785L45.646 15.1588C44.6943 14.467 43.7556 14.0165 42.8293 14.0165C41.8056 14.0165 41.3011 14.4175 41.3011 15.0851C41.3011 15.9378 42.5542 16.2662 43.9401 16.7691C45.6342 17.395 47.5436 18.3489 47.5436 20.7944C47.5436 23.2129 45.6314 25.1089 42.0486 25.1089C40.287 25.1084 38.2696 24.344 36.9152 23.2399Z" fill="white"/>
<path d="M48.7275 23.2399L50.511 20.7708C51.7225 21.6876 52.8424 22.1769 53.9616 22.1769C55.1427 22.1769 55.6517 21.727 55.6517 21.0262C55.6517 20.1448 54.3261 19.7449 52.9492 19.2055C51.3097 18.5717 49.4098 17.4834 49.4098 15.2724C49.4098 12.7819 51.4346 11.0845 54.5207 11.0845C56.5702 11.0845 58.0961 11.9124 59.235 12.7785L57.4611 15.1588C56.5095 14.467 55.5702 14.0165 54.6444 14.0165C53.6202 14.0165 53.1163 14.4175 53.1163 15.0851C53.1163 15.9378 54.3688 16.2662 55.7552 16.7691C57.4487 17.395 59.3582 18.3489 59.3582 20.7944C59.3582 23.2129 57.4487 25.1089 53.8637 25.1089C52.0999 25.1084 50.0825 24.344 48.7275 23.2399Z" fill="white"/>
<path d="M67.5778 7.21094H73.6156C77.4824 7.21094 80.6011 8.59398 80.6011 12.864C80.6011 16.9946 77.4475 18.8219 73.7236 18.8219H71.5509V24.7838H67.5778V7.21094ZM73.4885 15.6678C75.6736 15.6678 76.7073 14.6942 76.7073 12.864C76.7073 11.0248 75.5307 10.3657 73.3811 10.3657H71.5509V15.6678H73.4885Z" fill="white"/>
<path d="M82.2664 20.6279V5.89478H86.2299V20.7893C86.2299 21.6397 86.6236 21.9097 86.947 21.9097C87.1106 21.9141 87.2741 21.8951 87.4324 21.8534L87.9054 24.7781C87.4672 24.9654 86.8165 25.1083 85.9155 25.1083C83.1961 25.1083 82.2664 23.3344 82.2664 20.6279Z" fill="white"/>
<path d="M88.1169 21.0741C88.1169 18.2557 90.3593 16.7298 95.6502 16.1719C95.5709 15.0015 94.9871 14.2377 93.5349 14.2377C92.41 14.2377 91.293 14.7101 89.9954 15.4463L88.5893 12.8439C90.2868 11.8068 92.1996 11.0835 94.3026 11.0835C97.7228 11.0835 99.6171 13.0374 99.6171 17.1365V24.7857H96.3831L96.0973 23.4156H95.9989C94.874 24.4049 93.6108 25.1091 92.1074 25.1091C89.6647 25.1079 88.1169 23.3278 88.1169 21.0741ZM95.6502 20.8981V18.56C92.8318 18.9408 91.9122 19.7462 91.9122 20.7575C91.9122 21.6197 92.505 22.0415 93.4471 22.0415C94.3442 22.0426 94.9466 21.5972 95.6502 20.8981Z" fill="white"/>
<path d="M100.595 29.7456L101.3 26.7247C101.547 26.7877 101.912 26.8935 102.2 26.8935C103.507 26.8935 104.195 26.1741 104.541 25.137L104.74 24.4395L99.5801 11.4072H103.562L105.474 17.1638C105.861 18.3753 106.179 19.6442 106.531 20.9541H106.639C106.937 19.6886 107.235 18.4197 107.568 17.1638L109.191 11.4072H112.987L108.343 24.93C107.073 28.2804 105.643 30.015 102.502 30.015C101.856 30.026 101.213 29.9351 100.595 29.7456Z" fill="white"/>
<path d="M153.922 17.5637C153.922 22.4845 152.697 27.2759 150.378 31.42C149.865 32.3397 149.296 33.2277 148.676 34.0792C148.351 34.5257 147.873 34.8362 147.333 34.9511C146.793 35.0659 146.23 34.9769 145.751 34.7012L145.721 34.6838C145.45 34.5263 145.214 34.3134 145.03 34.0589C144.846 33.8044 144.718 33.514 144.654 33.2066C144.59 32.8992 144.591 32.5817 144.658 32.2749C144.724 31.968 144.855 31.6786 145.041 31.4256C145.553 30.7203 146.023 29.985 146.447 29.2236C148.39 25.7489 149.417 21.7173 149.417 17.5637C149.417 13.5141 148.438 9.5686 146.584 6.1529C146.098 5.25442 145.548 4.39137 144.94 3.57018C144.754 3.31741 144.624 3.0282 144.557 2.72146C144.49 2.41473 144.489 2.0974 144.554 1.79024C144.619 1.48308 144.747 1.19302 144.932 0.93905C145.116 0.685077 145.352 0.472917 145.624 0.31646L145.654 0.299024C146.129 0.0247624 146.689 -0.0649602 147.226 0.0469666C147.763 0.158893 148.241 0.464639 148.567 0.905897C149.296 1.89246 149.955 2.92875 150.539 4.00719C152.754 8.07982 153.922 12.7672 153.922 17.5637Z" fill="white"/>
<path d="M144.506 17.6246C144.506 20.6724 143.746 23.6427 142.307 26.2147C141.812 27.1018 141.235 27.9403 140.583 28.7193C140.245 29.1195 139.778 29.3882 139.262 29.4781C138.746 29.5679 138.215 29.4733 137.762 29.2108L137.731 29.1934C137.449 29.0301 137.206 28.807 137.019 28.5397C136.832 28.2725 136.706 27.9675 136.65 27.6464C136.593 27.3252 136.608 26.9955 136.693 26.6806C136.777 26.3656 136.93 26.073 137.139 25.8233C137.609 25.2611 138.024 24.6561 138.381 24.0161C139.444 22.114 140.007 19.903 140.007 17.6223C140.007 15.399 139.47 13.2353 138.455 11.3652C138.05 10.614 137.563 9.9095 137.003 9.26447C136.076 8.19921 136.335 6.55688 137.558 5.85046L137.59 5.8319C138.038 5.57409 138.562 5.47975 139.071 5.56499C139.581 5.65023 140.045 5.90977 140.385 6.29928C142.991 9.28022 144.506 13.3191 144.506 17.6246Z" fill="white"/>
<path d="M130.928 24.9339C130.37 24.9343 129.822 24.7903 129.336 24.516L129.307 24.4991L122.942 20.8241C122.349 20.4817 121.856 19.9892 121.514 19.396C121.172 18.8029 120.991 18.1301 120.991 17.4453C120.991 16.7604 121.172 16.0876 121.514 15.4945C121.856 14.9014 122.349 14.4089 122.942 14.0664L129.31 10.3898C129.415 10.3296 129.523 10.2739 129.631 10.2238C130.469 9.83631 131.374 9.83012 132.178 10.1996C133.326 10.7295 134.155 11.9561 134.714 13.9506C135.558 16.9574 135.247 20.2094 133.842 23.1076C133.576 23.655 133.162 24.1166 132.647 24.4396C132.131 24.7626 131.535 24.9339 130.927 24.9339H130.928ZM124.966 17.4456L130.598 20.6976C131.31 18.8635 131.431 16.8297 130.922 15.0113C130.844 14.7242 130.749 14.4424 130.635 14.1677L124.966 17.4456Z" fill="white"/>
</svg>
          <div className="text">
            <h5>Company</h5>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact us</p>
          </div>

          <div className="text">
            <h5> Support </h5>
            <p>help center</p>
            <p>Safety center</p>
            <p>Community Guidelines</p>
          </div>

          <div className="text">
            <h5>Legal</h5>
            <p>Cookies Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Law Enforcement</p>
          </div>
        </section>
<hr className="hr" />
        <section id="iconSection">
          <p> &#169; 2021 Press Play. All rights reserved</p>
          <div className="footerIcons">
            <FaInstagram />
            <FaWhatsapp />
            <FaTwitter />
            <FaYoutube />
          </div>
        </section>
      </main>
    );
  }
}

export default Footer;
