import React from "react"
import '../styles/style.scss'
import '../styles/footer.scss'


const Footer = function Footer(props) {
    return (
  <footer>

  <div class="footer-logo">
    <figure class="logo">
      <a href="./">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 748.8 826.292" aria-labelledby="Logo2">
          <title id="Logo2">Go To Home</title>
          <g id="logoSvg" transform="translate(-702.707 -5.049)">
            <g id="Group_8" data-name="Group 8" transform="translate(760.93 9.727)">
              <path id="Path_74" data-name="Path 74"
                d="M1022.545,12.848,723.751,149.611a34.424,34.424,0,0,0-10.8,54.833l29.278,31.266a34.432,34.432,0,0,0,39.118,7.923L1022.81,136.2a34.441,34.441,0,0,1,28.141.071l238.84,107.647a34.4,34.4,0,0,0,38.246-6.817l31.733-31.135a34.419,34.419,0,0,0-9.739-55.847l-298.8-137.249A34.428,34.428,0,0,0,1022.545,12.848Z"
                transform="translate(-703.648 -9.727)" fill="none" stroke-miterlimit="10" stroke-width="19" />
              <path id="Path_75" data-name="Path 75"
                d="M726.592,25.983,792.757,501.4c5.519,39.605,62.756,39.555,68.194-.061L926.263,25.983"
                transform="translate(-493.823 138.928)" fill="none" stroke-miterlimit="10" stroke-width="19" />
              <path id="Path_76" data-name="Path 76"
                d="M783.652,242.873l-47.337,28.69a34.418,34.418,0,0,0-5.407,54.823L867.164,451.126a34.424,34.424,0,0,0,45.844.568l123.756-107.728c32.971-28.7.568-53.95-10.307-58.11L757.944,183.15c-25.849-9.891-30.05-44.688-7.3-60.443L869.517,40.342a34.426,34.426,0,0,1,39.3.061l132.492,92.45a34.43,34.43,0,0,1,1.178,55.6L1011.8,211.85"
                transform="translate(-556.583 214.188)" fill="none" stroke-miterlimit="10" stroke-width="19" />
              <path id="Path_77" data-name="Path 77"
                d="M783.652,242.672l-47.337,28.69a34.418,34.418,0,0,0-5.407,54.823L867.164,450.915a34.425,34.425,0,0,0,45.844.578l123.756-107.728c32.971-28.71.568-53.95-10.307-58.11L757.944,182.939c-25.849-9.881-30.05-44.678-7.3-60.443L869.517,40.13a34.426,34.426,0,0,1,39.3.071l132.492,92.45a34.42,34.42,0,0,1,1.178,55.594l-30.688,23.4"
                transform="translate(-556.583 212.3)" fill="none" stroke-miterlimit="10" stroke-width="19" />
              <line id="Line_3" data-name="Line 3" x1="18.56" y1="133.348" transform="translate(257.846 345.102)"
                fill="none" stroke-miterlimit="10" stroke-width="19" />
              <path id="Path_78" data-name="Path 78" d="M754.7,227.986,732.667,74.475l-1.623-16.506"
                transform="translate(-453.11 431.434)" fill="none" stroke-miterlimit="10" stroke-width="19" />
              <path id="Path_79" data-name="Path 79" d="M739.512,399.9l25.549-184.4,24.4-176.132"
                transform="translate(-375.672 261.27)" stroke-miterlimit="10" stroke-width="19" />
            </g>
          </g>
        </svg>
      </a>
    </figure>
    <h2>Turing Sapiens</h2>
  </div>

  <div class="footer-contact">
    <h3>Contact</h3>
    <ul>
      <li><a href="./faq.js">FAQs</a></li>
      <li><a href="mailto:turing@muj.manipal.edu">turing@muj.manipal.edu</a></li>
      <li><a target="_blank" rel="noreferrer noopener"
          href="https://www.google.com/maps/place/Manipal+University+Jaipur/@26.8438552,75.5630456,17z/data=!3m1!4b1!4m5!3m4!1s0x396c4850e05bee9b:0x1b8d67402d4eb863!8m2!3d26.8438552!4d75.5652343?hl=en">
          Address:
          Manipal University Jaipur,
          Dehmi Kalan, 303007
        </a></li>
    </ul>
  </div>

  <div class="footer-links">
    <h3>Links</h3>
    <ul>
      <li><a href="https://turingsapiens.ml/">Home</a></li>
      <li><a href="./partner">Partners</a></li>
      <li><a href="./team">Our Team</a></li>
      <li><a href="./about">About</a></li>
      <li><a href="./join">Join us</a></li>
    </ul>
  </div>

  <div class="footer-socials">
    <h3>Social Media</h3>
    <ul>
      <li>Follow us on our Social Media to continue updates</li>
      <li>
        <a href="https://www.instagram.com/turingsapiensmuj/" target="blank">
          <svg width="32" height="32"
            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="Instagram">
            <title id="Instagram">Turing Sapiens Instagram Page</title>
            <g clip-path="url(#clip0)" >
              
              <path
                d="M31.9687 9.40809C31.8937 7.7078 31.6188 6.53887 31.2249 5.52598C30.8186 4.45082 30.1934 3.48823 29.3744 2.68802C28.5742 1.87537 27.6053 1.2439 26.5426 0.843915C25.5238 0.450039 24.361 0.175083 22.6607 0.100117C20.9477 0.0188025 20.4039 0 16.0593 0C11.7147 0 11.1709 0.0188025 9.4643 0.0937683C7.76401 0.168734 6.59508 0.443934 5.58244 0.837566C4.50703 1.2439 3.54444 1.86902 2.74424 2.68802C1.93158 3.48823 1.30035 4.45717 0.900128 5.51988C0.506252 6.53887 0.231296 7.70146 0.15633 9.40174C0.0750159 11.1147 0.0562134 11.6585 0.0562134 16.0031C0.0562134 20.3477 0.0750159 20.8915 0.149982 22.5982C0.224947 24.2984 0.500147 25.4674 0.894023 26.4803C1.30035 27.5554 1.93158 28.518 2.74424 29.3182C3.54444 30.1309 4.51338 30.7624 5.57609 31.1623C6.59508 31.5562 7.75766 31.8312 9.45819 31.9061C11.1646 31.9813 11.7086 31.9999 16.0532 31.9999C20.3978 31.9999 20.9416 31.9813 22.6483 31.9061C24.3485 31.8312 25.5175 31.5562 26.5301 31.1623C28.6807 30.3309 30.381 28.6306 31.2124 26.4803C31.6061 25.4613 31.8813 24.2984 31.9562 22.5982C32.0312 20.8915 32.05 20.3477 32.05 16.0031C32.05 11.6585 32.0436 11.1147 31.9687 9.40809ZM29.087 22.4731C29.0182 24.0359 28.7556 24.8799 28.5369 25.4425C27.9992 26.8365 26.8927 27.943 25.4987 28.4807C24.9361 28.6995 24.086 28.962 22.5293 29.0306C20.8415 29.1058 20.3353 29.1243 16.0657 29.1243C11.796 29.1243 11.2835 29.1058 9.60177 29.0306C8.03897 28.962 7.19505 28.6995 6.63244 28.4807C5.93871 28.2243 5.30724 27.8179 4.79468 27.2866C4.26333 26.7677 3.857 26.1426 3.6006 25.4488C3.38181 24.8862 3.11931 24.0359 3.05069 22.4795C2.97548 20.7917 2.95692 20.2852 2.95692 16.0156C2.95692 11.7459 2.97548 11.2334 3.05069 9.55191C3.11931 7.98911 3.38181 7.14519 3.6006 6.58258C3.857 5.8886 4.26333 5.25737 4.80103 4.74458C5.31969 4.21323 5.94481 3.8069 6.63879 3.55074C7.2014 3.33195 8.05167 3.06945 9.60812 3.00059C11.296 2.92562 11.8024 2.90682 16.0718 2.90682C20.3478 2.90682 20.854 2.92562 22.5357 3.00059C24.0985 3.06945 24.9424 3.33195 25.505 3.55074C26.1988 3.8069 26.8302 4.21323 27.3428 4.74458C27.8741 5.26348 28.2805 5.8886 28.5369 6.58258C28.7556 7.14519 29.0182 7.99521 29.087 9.55191C29.162 11.2397 29.1808 11.7459 29.1808 16.0156C29.1808 20.2852 29.162 20.7853 29.087 22.4731Z" />
              <path
                d="M16.0593 7.78271C11.5211 7.78271 7.83896 11.4646 7.83896 16.0031C7.83896 20.5416 11.5211 24.2234 16.0593 24.2234C20.5978 24.2234 24.2797 20.5416 24.2797 16.0031C24.2797 11.4646 20.5978 7.78271 16.0593 7.78271ZM16.0593 21.3354C13.1151 21.3354 10.727 18.9475 10.727 16.0031C10.727 13.0586 13.1151 10.6707 16.0593 10.6707C19.0037 10.6707 21.3917 13.0586 21.3917 16.0031C21.3917 18.9475 19.0037 21.3354 16.0593 21.3354Z" />
              <path
                d="M26.524 7.45765C26.524 8.51743 25.6647 9.37673 24.6047 9.37673C23.5449 9.37673 22.6856 8.51743 22.6856 7.45765C22.6856 6.39763 23.5449 5.53857 24.6047 5.53857C25.6647 5.53857 26.524 6.39763 26.524 7.45765Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="32" height="32" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href=" https://www.linkedin.com/company/turing-sapiens" target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-labelledby="Linkedin">
            <title id="Linkedin">Turing Sapiens' LinkedIn Page</title>
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              fill="white" /></svg>
        </a>
      </li>
    </ul>
   
  </div>

</footer>
    )
}

export default Footer


