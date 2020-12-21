import React from "react"
import '../styles/style.scss'
import '../styles/navbar.scss'

// DARK MODE LOGIC

if(typeof document !== 'undefined'){

  const togglebtn = document.getElementById('dark-toggle');
  const body = document.body;
  
  togglebtn.onclick = () => {
      body.classList.toggle('light');
      body.classList.toggle('dark');
      if(body.classList == 'light'){
        console.log('hello');
        togglebtn.style.filter = "grayscale(0)";
      }
      else{
        togglebtn.style.filter = "grayscale(100)";
      }
  };
}


function Navbar(){
    return(
  <nav id="navbar-menu">
  <figure class="logo">
    <a href="https://turingsapiens.ml/">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 748.8 826.292" aria-labelledby="Logo1" >
        <title id="Logo1">Turing Sapiens Logo</title>
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
  <article class="on-right">
    <button id="dark-toggle" aria-label="Toggle Theme" ><svg id="Capa_1" enable-background="new 0 0 52 52" height="40" viewBox="0 0 512 512"
        width="40" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="m256.002 0c-101.525 0-180.569 81.603-180 181.04.308 52.734 23.672 102.48 64.087 136.494 16.465 13.872 25.913 34.409 25.913 56.338v63.128c0 41.353 33.647 75 75 75h15 15c41.353 0 75-33.647 75-75v-61.854c0-23.042 8.892-43.564 24.39-56.338 41.689-34.336 65.61-84.932 65.61-138.809 0-99.257-80.743-179.999-180-179.999z"
            fill="#f3f5f9" />
          <path
            d="m346.002 437v-61.854c0-23.042 8.892-43.564 24.39-56.338 41.689-34.336 65.61-84.932 65.61-138.809 0-99.258-80.742-180-180-180v512h15c41.352.001 75-33.646 75-74.999z"
            fill="#e1e6f0" />
          <path
            d="m256.002 30c-84.609 0-150.48 67.819-150 150.864.249 43.916 19.731 85.371 53.408 113.73 23.262 19.585 36.592 48.486 36.592 79.277v17.129l34.59 31h25.41 24.327l35.673-31v-15.854c0-32.036 12.876-61.011 35.317-79.482 34.746-28.623 54.683-70.781 54.683-115.664 0-82.705-67.295-150-150-150z"
            fill="#ffdf40" />
          <path
            d="m316.002 391v-15.854c0-32.036 12.876-61.011 35.317-79.482 34.746-28.623 54.683-70.781 54.683-115.664 0-82.705-67.295-150-150-150v392h24.327z"
            fill="#ffbe40" />
          <g>
            <path
              d="m328.76 157.119c-2.739-4.424-7.559-7.119-12.759-7.119h-45v-45c0-6.958-4.79-13.008-11.558-14.604-1.154-.269-2.298-.214-3.442-.212-5.588.004-10.853 2.93-13.418 8.108l-60 120c-2.329 4.644-2.08 10.166.659 14.59s7.559 7.118 12.76 7.118h45v45c0 6.958 4.79 13.008 11.558 14.604 1.165.269 2.3.201 3.442.2 5.678-.009 10.891-3.027 13.418-8.095l60-120c2.329-4.644 2.08-10.166-.66-14.59z"
              fill="#ffbe40" />
            <path
              d="m269.419 291.709 60-120c2.329-4.644 2.08-10.166-.659-14.59s-7.558-7.119-12.758-7.119h-45v-45c0-6.958-4.79-13.008-11.558-14.604-1.154-.269-2.298-.214-3.442-.212v209.621c5.678-.01 10.891-3.028 13.417-8.096z"
              fill="#ff9f40" />
          </g>
          <path d="m256.002 391h-60v46c0 24.814 20.186 45 45 45h15 15c24.814 0 45-20.186 45-45v-46z" fill="#4d3535" />
          <path d="m316.002 437v-46h-60v91h15c24.814 0 45-20.186 45-45z" fill="#331e1e" />
        </g>
      </svg></button>
  </article>
</nav>
    )
}

export default Navbar