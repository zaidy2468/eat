"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import React from "react";

import "./globals.css";
import { ImageResponse } from "next/server";

export default function Home() {
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [isAbsolute1, setIsAbsolute1] = useState(false);
  const [isAbsolute2, setIsAbsolute2] = useState(false);
  const [nav, setNav] = useState(false);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    function handleScroll() {
      const divElement1 = document.getElementById("gr");
      const divElement2 = document.getElementById("wh");
      const divElement3 = document.getElementById("pk");
      const divFront = document.getElementById("front");
      const currentScrollY = window.scrollY;
      const myList = document.querySelectorAll("ul");

      const div1height = divElement1?.getBoundingClientRect();
      const div2height = divElement2?.getBoundingClientRect();
      const div3height = divElement3?.getBoundingClientRect();
      console.log(divFront?.clientHeight);

      console.log(window.scrollY);
      if (myList) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down, hide list items
          setNav(true);
        } else {
          // Scrolling up, show list items
          setNav(false);
        }
        lastScrollY = currentScrollY;
      }
      if (window.scrollY >= 1785) {
        setIsAbsolute(true);

        console.log("chala");
      } else {
        setIsAbsolute(false);
      }
      if (window.scrollY >= 2585) {
        setIsAbsolute1(true);

        console.log("chala");
      } else {
        setIsAbsolute1(false);
      }
      if (window.scrollY >= 3380) {
        setIsAbsolute2(true);

        console.log("chala");
      } else {
        setIsAbsolute2(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" relative w-full h-full max-w-screen ">
        <div
          className={`bg-green-950 w-screen h-[810px]   ${
            isAbsolute2 ? "absolute top-[3380px] " : "fixed top-[0px]"
          }`}
        >
          <div className="flex p-[4rem] items-center justify-between sm:flex-col lg:flex-row">
            
              <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-4.svg" className="sm:top-[6rem] sm:right-[15rem] lg:static sm:relative sm:left-[0rem] sm:top-[12rem] sm:w-1/2 lg:w-1/3"/>
            
            <div className=" text-white ">
              <h3 className="font-bold  tracking-tighter lg:text-[70px] sm:text-[40px] lg:static sm:relative sm:top-[-17rem]  ">
                FLAVOURSOME FOOD
                <br /> FOR EVERYONE
              </h3>
              <p className="  tracking-tighter  lg:text-[1.5rem] sm:text-[15px] lg:static sm:relative sm:top-[2.5rem]">
                Our curious creations are made for vegans and meat-
                <br />
                eaters alike. Because meat-free doesn’t mean flavour
                <br /> free.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`bg-red-500 w-screen  h-[810px]  ${
            isAbsolute1 ? "absolute top-[2590px]  " : "fixed top-[0px]"
          }`}
          id="wh"
        >
          <div className="flex  items-center justify-between lg:mx-[6rem] sm:mx-[-3rem] lg:flex-row">
            
              <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-5.svg"className="lg:static lg:left-[-11rem] sm:relative sm:top-[10rem] sm:left-[12rem] sm:w-1/4" />
            
            <div className="lg:flex lg:flex-col">
              <h3 className="font-bold  tracking-tighter lg:text-[70px] sm:text-[40px]">
                INSPIRING GOOD
                <br/>
                THROUGH TASTY
                <br/>
                GOODNESS
              </h3>
              <p className="tracking-tighter lg:static sm:relative sm:top-[14rem] lg:text-[1.5rem]">
                We're here to inpire discovery and tempt everyone to
                
                eat more <br/>plants.Because we care about the future-
                
                yours,ours <br/> and the planets
              </p>
            </div>
          </div>
        </div>
        <div
          className={`bg-green-300 w-screen h-full ${
            isAbsolute ? "absolute top-[1840px]" : "fixed top-[0px]"
          }`}
          id="gr"
        >
          <div className="flex p-[6rem] items-center justify-between">
            <div className="flex-wrap">
              <h3 className="font-bold  tracking-tighter lg:text-[70px] sm:text-[50px]">
                POWERED BY POSITIVITY
              </h3>
              <p className="tracking-tighter lg:static sm:relative sm:top-[8rem] lg:text-[1.5rem] ">
                We're not crusading or going up against an industry.
                
                We're for; flavour, for fun, for whats possible.
              </p>
            </div>
          
              <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-7.svg"className="sm:top-[8rem] sm:right-[15rem] lg:static sm:relative sm:w-1/2"/>
            
          </div>
        </div>
        <div id="front">
          <div className="bg-green-950 relative w-full ">
            <ul
              className={`text-white flex justify-between items-center   ${
                nav ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex  lg:p-12 sm:p-4 sm:px-0 lg:space-x-[12rem] font-bold tracking-tighter lg:mx-20 sm:mx-[3rem] ">
                <li className="lg:opacity-100 sm:opacity-0 ">ABOUT</li>

                <li className="lg:opacity-100 sm:opacity-0">PRODUCTS</li>

                <li className="">
                  <svg
                    width="150"
                    height="40"
                    viewBox="0 0 1346 472"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M208.907 288.024C208.907 302.028 208.938 316.032 208.868 330.036C208.86 331.75 209.077 334.227 207.359 334.941C205.065 335.774 203.239 334.692 201.537 333.088C193.758 325.757 185.713 318.751 176.211 313.649C156.631 303.139 135.783 301.613 114.382 305.522C103.886 307.439 94.1394 311.556 86.8777 319.845C70.9797 337.999 75.6476 367.265 96.4468 380.06C104.729 385.155 113.977 387.42 123.554 388.13C135.245 388.995 146.896 388.78 158.38 385.83C174.836 381.604 188.032 372.031 200.25 360.785C201.312 359.809 202.263 358.641 203.478 357.923C206.428 356.18 208.88 357.569 208.885 361.008C208.921 389.737 208.893 418.465 208.936 447.195C208.94 449.463 208.146 450.881 206.148 452.061C191.7 460.595 176.152 465.891 159.646 468.824C143.844 471.633 128.038 471.823 112.198 469.872C77.3802 465.58 47.7647 451.349 25.7464 423.409C9.50271 402.794 2.01396 378.877 0.31615 352.93C-1.73349 321.567 6.44666 293.23 25.7403 268.356C40.4642 249.376 59.7005 236.601 82.3427 228.728C103.277 221.448 124.855 219.222 146.792 220.967C167.896 222.645 187.764 228.791 206.203 239.361C208.643 240.76 208.948 242.693 208.938 245.144C208.876 259.436 208.907 273.728 208.907 288.02V288.024Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M922.213 333.153C913.969 301.856 894.802 279.13 865.858 265.036C845.055 254.911 822.922 251.904 800.053 253.561C779.679 255.034 760.41 260.475 743.391 271.93C711.501 293.347 696.282 324.051 695.545 359.664C695.852 372.591 696.834 382.696 699.534 392.597C705.835 415.753 718.476 434.51 737.643 448.768C754.212 461.061 772.929 467.464 793.241 470.021C813.042 472.537 832.413 471.023 851.519 465.255C876.127 457.809 895.928 443.572 909.674 421.685C926.918 394.233 930.395 364.246 922.213 333.153ZM812.039 396.136C788.188 396.136 768.858 387.34 768.858 364.164C768.858 340.988 788.188 332.192 812.039 332.192C835.891 332.192 855.221 340.926 855.221 364.164C855.221 387.401 835.891 396.136 812.039 396.136Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M1160.8 411.314C1160.8 398.754 1160.76 386.192 1160.84 373.635C1160.85 372.205 1160.52 370.139 1162.47 369.372C1164.48 368.748 1165.98 368.961 1167.79 370.834C1171.3 374.477 1175.23 377.654 1179.3 380.68C1201.21 396.999 1226.03 403.242 1253.01 401.972C1256.62 401.802 1260.19 401.115 1263.47 399.48C1265.47 398.484 1267.35 397.199 1267.26 394.688C1267.16 392.192 1264.92 391.517 1263.05 390.895C1255.76 388.467 1248.11 387.708 1240.57 386.464C1224.76 383.852 1209.02 380.847 1194.27 374.261C1176.5 366.326 1163.34 354.22 1159.04 334.411C1153.43 308.521 1164.55 283.864 1187.7 270.24C1206.97 258.91 1228.1 254.979 1250.02 254.979C1278.17 254.979 1304.93 261.438 1330.23 273.877C1332.94 275.215 1333.85 276.786 1333.83 279.797C1333.7 301.451 1333.79 323.108 1333.71 344.762C1333.7 346.312 1333.89 348.857 1332.61 349.34C1330.68 350.009 1328.77 349.35 1327.03 347.9C1317.07 339.589 1305.8 333.534 1293.68 329.017C1275.6 322.275 1256.95 319.123 1237.61 320.567C1234.72 320.784 1231.88 321.359 1229.22 322.523C1226.76 323.596 1224.58 325.1 1224.59 328.181C1224.6 331.257 1227.07 332.216 1229.37 333.08C1236.85 335.905 1244.78 336.715 1252.62 337.936C1270.58 340.74 1288.58 343.373 1305.7 349.898C1318.58 354.81 1330.46 361.278 1338.24 373.174C1347.71 387.679 1347.43 403.547 1343.16 419.451C1337.12 441.932 1320.97 454.859 1300.03 462.61C1279.5 470.201 1258.07 471.768 1236.43 471.103C1215.24 470.453 1194.52 466.967 1174.67 459.198C1170.92 457.727 1167.31 455.86 1163.54 454.45C1161.2 453.577 1160.72 452.172 1160.74 449.86C1160.85 437.012 1160.79 424.162 1160.79 411.314H1160.8Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M455.535 259.442C447.255 259.442 446.062 258.863 446.076 263.341C446.191 296.55 446.146 329.762 446.146 362.971C446.146 396.326 446.187 429.681 446.078 463.035C446.068 466.153 446.663 467.172 450.069 467.147C474.505 466.973 498.941 466.989 523.376 467.133C526.575 467.151 527.446 466.433 527.424 463.146C527.283 442.5 527.215 421.848 527.499 401.205C527.663 389.351 529.146 377.597 533.432 366.41C537.609 355.507 543.964 346.275 555.616 342.516C567.412 338.707 578.757 339.814 588.604 348.19C590.255 349.595 591.282 349.89 593.049 349.272C594.843 348.644 594.741 346.75 594.749 345.443C594.818 334.325 594.81 276.567 594.751 258.808C594.745 257.218 595.174 254.792 592.429 254.925C573.993 255.496 557.829 260.866 546.083 276.099C536.158 288.967 528.854 303.832 524.981 319.272L519.974 338.652C519.728 339.597 518.875 340.259 517.9 340.259C516.576 340.259 515.57 339.073 515.785 337.768L528.082 263.13C528.569 258.857 527.542 259.454 518.969 259.454L455.537 259.446H455.539L455.535 259.442Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M687.361 316.198C687.353 364.96 687.345 413.721 687.461 462.483C687.472 466.349 686.461 467.174 682.72 467.147C658.284 466.965 633.847 466.975 609.411 467.141C605.87 467.165 604.854 466.4 604.874 462.714C605.042 433.258 604.968 403.802 604.97 374.345C604.97 354.572 604.966 334.8 604.977 315.03V258.331C604.977 256.449 606.503 254.925 608.382 254.925H684.049C685.933 254.925 687.459 256.453 687.455 258.337L687.361 316.202V316.198Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M360.169 380.553C359.306 380.559 358.58 381.187 358.441 382.038C355.632 399.349 351.926 416.452 344.776 432.616C331.988 461.528 311.577 473.263 279.425 470.811C252.438 468.751 235.554 453.849 227.755 427.085C224.013 414.249 221.978 401.113 221.874 387.835C221.548 345.958 221.683 304.078 221.563 262.199C221.557 259.816 222.117 259.031 224.631 259.039C249.648 259.131 274.667 259.166 299.684 259.01C303.096 258.99 302.906 260.667 302.912 262.979C302.974 291.715 303.049 320.452 303.209 349.188C303.246 355.845 304.289 362.409 305.987 368.844C309.423 381.862 320.011 388.326 333.074 385.366C339.706 383.862 343.762 379.301 346.427 373.399C351.572 362.008 352.781 349.788 353.511 337.531C354.982 312.859 354.082 288.157 354.166 263.468C354.178 259.878 355.008 258.971 358.633 259C382.347 259.182 406.065 259.205 429.779 258.99C434.1 258.951 435.511 259.775 435.476 264.458C435.243 297.383 435.351 330.308 435.351 363.233C435.351 396.447 435.3 429.662 435.429 462.876C435.441 466.241 434.605 467.155 431.189 467.133C406.605 466.977 379.504 466.975 354.922 467.133C351.439 467.155 350.61 466.259 351.003 462.868C354.618 431.683 361.182 390.333 361.847 383.494C361.928 382.641 361.71 381.772 361.155 381.117C360.881 380.794 360.548 380.543 360.169 380.547V380.553Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M1073.87 380.553C1073 380.559 1072.27 381.187 1072.13 382.038C1069.32 399.349 1065.62 416.452 1058.47 432.616C1046.55 459.554 1028.92 469.45 999.727 470.678C993.934 470.921 988.104 470.522 982.454 469.213C961.616 464.383 948.162 450.132 941.445 427.087C937.704 414.251 935.668 401.115 935.564 387.837C935.239 345.96 935.374 304.08 935.253 262.201C935.247 259.818 935.807 259.033 938.321 259.041C963.338 259.133 988.357 259.168 1013.37 259.012C1016.79 258.992 1016.6 260.669 1016.6 262.981C1016.66 291.717 1016.74 320.455 1016.9 349.19C1016.94 355.847 1017.98 362.411 1019.68 368.846C1023.11 381.864 1033.7 388.328 1046.76 385.368C1053.4 383.865 1057.45 379.303 1060.12 373.402C1065.26 362.01 1066.47 349.79 1067.21 337.533C1068.68 312.861 1067.78 288.159 1067.86 263.47C1067.87 259.88 1068.7 258.973 1072.32 259.002C1096.04 259.184 1119.76 259.207 1143.47 258.992C1147.79 258.953 1149.21 259.777 1149.17 264.46C1148.94 297.385 1149.04 330.31 1149.04 363.235C1149.04 396.449 1148.99 429.664 1149.12 462.878C1149.13 466.243 1148.29 467.157 1144.88 467.135C1120.3 466.979 1095.71 466.977 1071.13 467.135C1067.65 467.157 1066.82 466.261 1067.21 462.87C1070.82 431.685 1074.88 390.335 1075.54 383.496C1075.63 382.643 1075.4 381.774 1074.85 381.119C1074.58 380.796 1074.24 380.545 1073.87 380.549V380.553Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M397.891 244.636C394.616 244.642 393.567 243.961 393.571 240.457C393.682 162.344 393.679 84.2324 393.581 6.11694C393.577 3.76865 395.482 1.86629 397.83 1.87243C456.824 1.98084 515.817 1.98698 574.811 1.86015C578.348 1.85197 578.988 2.92179 578.963 6.16195C578.818 25.7972 578.744 45.4365 579.01 65.0697C579.066 69.1403 577.738 69.6272 574.193 69.6108C543.526 69.4799 508.693 69.5719 477.835 69.4738C476.653 69.4697 475.7 70.4229 475.694 71.6052L475.681 73.614C475.681 80.4461 475.761 81.8002 475.776 88.6406C475.778 89.8229 476.735 90.7823 477.917 90.7802C481.184 90.7741 487.472 90.7659 491.586 90.77C516.453 90.7945 541.323 90.86 566.191 90.6943C569.842 90.6698 570.748 91.6987 570.712 95.2661C570.53 113.457 570.527 131.652 570.716 149.841C570.752 153.401 569.57 154.08 566.295 154.065C542.166 153.947 518.039 154.022 493.909 153.98L477.754 153.992C476.563 153.992 475.602 154.961 475.612 156.152L475.745 174.84C475.753 176.016 476.7 176.965 477.876 176.969C484.312 176.99 492.551 176.978 498.524 176.978H573.23C576.423 176.978 579.012 179.567 579.012 182.76V238.849C579.012 242.042 576.423 244.632 573.23 244.632H397.893L397.891 244.636Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M948.351 227.535C948.375 230.757 946.342 232.136 944.325 233.67C932.862 242.405 919.668 246.346 905.476 247.359C892.525 248.283 879.857 247.06 867.813 241.83C851.353 234.683 840.926 222.09 835.146 205.392C831.957 196.177 830.766 186.631 830.738 176.926C830.699 163.07 830.727 149.211 830.727 135.355C830.727 119.766 830.603 104.174 830.821 88.5874C830.873 85.0261 829.733 84.2304 826.462 84.4083C821.706 84.6661 816.924 84.3756 812.158 84.5126C809.407 84.5924 808.245 83.9931 808.629 80.037L808.596 41.8097C808.353 38.455 809.323 37.9907 811.839 37.9314C818.779 37.7677 825.705 37.062 832.221 34.5358C845.024 29.5753 849.964 19.1328 850.512 6.36036C850.706 1.85197 851.796 0.692145 856.276 0.761694C873.762 1.0358 891.255 0.964203 908.743 0.792377C911.981 0.759648 912.895 1.55741 912.789 4.79347C912.611 10.1876 912.625 20.9799 912.625 20.9799C913.079 35.534 910.925 35.534 921.12 35.534C929.069 35.534 931.741 35.6506 939.686 35.4706C942.371 35.4092 943.484 36.1886 943.464 38.8396C943.343 55.0056 943.261 66.0925 943.345 82.2584C943.359 85.0015 943.161 85.9773 939.686 85.9773L917.05 85.9568C913.977 85.9568 912.58 86.0284 912.613 89.7411C912.801 110.958 912.695 132.178 912.711 153.397C912.713 157.011 913.038 160.611 914.169 164.062C915.972 169.565 919.071 173.85 925.207 175.006C930.607 176.02 935.509 175.411 939.565 172.126C940.622 171.269 942.218 171.966 942.365 173.322L948.344 227.533L948.351 227.535Z"
                      fill="#FFF6F6"
                    ></path>
                    <path
                      d="M807.621 176.26C807.376 160.509 808.255 141.301 807.13 122.114C806.026 103.295 800.441 85.9077 789.048 70.6684C771.824 47.615 747.768 36.3645 720.112 32.5393C683.64 27.5073 648.518 33.5826 614.644 47.7173C611.535 49.0265 610.798 50.6629 610.819 53.7926C610.942 77.0505 610.86 100.288 610.921 123.546C610.921 125.06 610.082 127.187 611.637 127.964C613.458 128.844 615.503 128.107 617.303 126.86C635.099 114.791 654.798 107.754 676.092 105.525C689.225 104.154 702.398 104.584 714.937 109.657C719.683 111.579 723.795 114.423 726.597 118.923C727.354 120.13 727.763 121.459 727.19 122.584C726.72 123.464 725.145 122.953 724.081 122.809C709.148 120.641 694.134 120.048 679.099 120.907C663.328 121.828 647.802 124.323 633.054 130.276C607.382 140.606 591.713 158.238 590.731 187.142C589.954 210.42 600.652 229.71 620.74 239.426C630.088 243.967 640.07 246.074 650.38 246.77C686.238 249.143 713.915 234.415 726.72 199.415C729.89 190.722 731.874 181.844 733.163 172.823C733.245 172.271 733.715 171.862 734.288 171.862L735.27 171.882C735.945 171.882 736.456 172.455 736.375 173.13L728.847 239.344C728.704 242.126 729.481 242.965 732.365 242.945C756.216 242.822 780.088 242.822 803.939 242.965C807.089 242.986 807.703 241.963 807.682 239.058C807.56 219.278 807.621 199.497 807.621 176.26ZM720.972 153.186C719.11 166.052 714.671 177.426 702.971 184.626C695.3 189.351 686.995 190.292 678.424 188.083C672.656 186.61 667.992 183.378 666.785 177.18C665.414 170.287 667.726 164.334 673.106 159.813C679.324 154.597 686.954 152.961 694.748 151.999C698.737 151.509 702.807 151.468 705.303 151.304C710.744 151.304 714.63 151.304 718.537 151.324C719.765 151.324 721.278 150.997 720.972 153.186Z"
                      fill="#FFF6F6"
                    ></path>
                  </svg>
                </li>

                <li className="lg:opacity-100 sm:opacity-0">RECIPES </li>

                <li className="p-2 tracking-tighter bg-pink-400 rounded flex  text-green-900 font-black justify-center items-center lg:opacity-100 sm:opacity-0">
                  CONTACT US
                </li>
              </div>
            </ul>

            <div className="text-white flex font-black lg:text-[12rem]  sm:text-[8rem]  tracking-tighter lg:px-[16rem] sm:px-[3rem] absolute uppercase sm:flex-col lg:flex-row   ">
              <div className="">MEAT</div>
              <span className="sm:opacity-0 lg:opacity-100" >-</span>
              <div className="sm:relative lg:static sm:top-[-17rem] sm:mx-6">FREE</div>
            </div>
            <div className="lg:w-[22rem] lg:mx-[38rem] lg:mt-[11rem] sm:w-[22rem] sm:mx-[4rem] sm:mt-[15rem] ">
              <img
                src="https://eat-curious.com/wp-content/uploads/2022/11/CuriousBurger1_Edit-e1668701643143-1024x815.png
          
"
              ></img>
            </div>
            <div className="text-white flex font-black tracking-tighter lg:text-[12rem]  lg:px-[16rem] lg:mt-[-9rem] lg:flex-row sm:flex-col sm:text-[8rem] sm:px-[3rem] sm:mt-[-5rem]">
              <div>YOUR</div>
              <span className="px-7 sm:opacity-0 lg:opacity-100"></span>
              <div className="sm:relative lg:static sm:top-[-6rem] sm:mx-3">MIND</div>
            </div>
            <div className="h-[20rem]    flex p-[8rem] gap-[7rem] overflow-hidden">
              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg"
                alt="Home 23"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png"
                alt="Home 31"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png"
                alt="Home 33"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-30-473x434.png"
                alt="Home 34"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-31-473x349.png"
                alt="Home 35"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png"
                alt="Home 36"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-33-473x123.png"
                alt="Home 37"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-34.png"
                alt="Home 38"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png"
                alt="Home 39"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-37-473x473.png"
                alt="Home 41"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-38.png"
                alt="Home 42"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-39.png"
                alt="Home 43"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-40-473x467.png"
                alt="Home 44"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-41-473x473.png"
                alt="Home 45"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-42-463x473.png"
                alt="Home 46"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-43.png"
                alt="Home 47"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-44-473x355.png"
                alt="Home 48"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-46-473x473.png"
                alt="Home 50"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-49-473x473.png"
                alt="Home 53"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-28-473x473.png"
                alt="Home 32"
              />

              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-28-473x473.png"
                alt="Home 32"
              />
              <img
                className="transition-transform duration-2000 ease-linear animate-slide"
                src="https://eat-curious.com/wp-content/uploads/2023/02/home-28-473x473.png"
                alt="Home 32"
              />
            </div>
          </div>
          <div className="bg-green-950 h-36 w-full wave absolute"></div>
          <div className="box bggradientmask bg-pink-400 h-36 w-full relative"></div>
          <div
            className=" bg-pink-400 p-[7rem] flex relative w-full h-full "
            id="pk"
          >
            <div className="flex-wrap sm:relative sm:top-[-5rem]">
              <h3 className="font-bold  tracking-tighter lg:text-[70px] sm:text-[50px]">
                CURIOUS... BY NAME,
                BY NATURE
              </h3>
              <p className="tracking-tighter lg:static sm:relative sm:top-[10rem] lg:text-[1.5rem] ">
                It’s what inspires us to whip up, throw 
                together, tear, shake, and break the rules – on a mission
                to redefine food for a new
              
                generation.
              </p>
            </div>
            
              <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-3.svg" className=" sm:top-[7rem] sm:right-[15rem] lg:static sm:relative"/>
            
          </div>
        </div>

        <section className="flex flex-col justify-content px-[160px] py-[71px] lg:top-[150rem] sm:top-[145rem] relative  max-w-screen== max-h-screen">
          <div className="font-extra-bold  tracking-tighter lg:static sm:relative lg:mt-3 sm:top-[-4rem] text-[30px] lg:mx-[480px]">
            <h4 className="">
              FEATURES &<br />
              <span className="mx-[10px]"></span>BENEFITS
            </h4>
          </div>
          <div className="flex  justify-between lg:flex-row sm:flex-col">
            <div className="lg:mt-[120px] lg:mb-[120px] sm:mt-[80px] sm:mb-[80px]">
              <div className="">
                <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-9.png" />
              </div>
              <h5 className="font-bold text-[25px] mt-[50px]">PLANT BASED</h5>
              <p className="mt-[10px]">
                Plant-protien yumminess.
                <br />
                suitable for everyone.
              </p>
            </div>
            <div className="lg:mt-[120px] lg:mb-[120px] sm:mt-[80px] sm:mb-[80px] ">
              <div className="">
                <img src="	https://eat-curious.com/wp-content/uploads/2022/12/home-11.png" />
              </div>
              <h5 className="font-bold text-[25px] mt-[50px]">PLANT BASED</h5>
              <p className="mt-[10px]">
                Plant-protien yumminess.
                <br />
                suitable for everyone.
              </p>
            </div>
            <div className="lg:mt-[120px] lg:mb-[120px] sm:mt-[80px] sm:mb-[80px] ">
              <div className="">
                <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-12.png" />
              </div>
              <h5 className="font-bold text-[25px] mt-[50px]">PLANT BASED</h5>
              <p className="mt-[10px]">
                Plant-protien yumminess.
                <br />
                suitable for everyone.
              </p>
            </div>
            <div className="lg:mt-[120px] lg:mb-[120px] sm:mt-[80px] sm:mb-[80px]">
              <div className="">
                <img src="https://eat-curious.com/wp-content/uploads/2022/12/home-10.png" />
              </div>
              <h5 className="font-bold text-[25px] mt-[50px]">PLANT BASED</h5>
              <p className="mt-[10px]">
                Plant-protien yumminess.
                <br />
                suitable for everyone.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="relative bg-green-950 lg:top-[288rem] sm:top-[390rem] lg:h-[190rem] sm:h-[280rem]    lg:curved sm:curved1-small">
        <div className="relative p-[1rem] mx-[5rem]">
          <svg
            className="tiles__title"
            width="lg:1224 sm:1000"
            height="lg:312"
            viewBox="0 0 1224 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            
          >
            <g clip-path="url(#clip0_587_15588)">
              <path
                d="M53.5642 159.552C95.363 133.013 98.7096 180.342 100.383 212.379C102.173 246.706 109.753 311.182 58.0486 309.41C38.8225 309.611 19.5964 309.795 0.353516 310.012C0.671441 290.86 0.738378 271.708 0.738378 252.555C0.738378 233.403 0.637975 214.218 0.353516 195.065C17.7223 182.698 35.4759 170.85 53.5642 159.552ZM53.9658 231.532C53.1124 205.962 51.2383 203.572 47.4734 205.26C46.7204 205.594 46.1013 205.878 45.3483 206.413C45.3818 215.939 45.683 225.899 45.9842 236.061C46.2854 246.222 46.5364 254.461 46.8878 261.547C47.6575 261.38 48.4439 261.229 49.2136 261.062C53.2295 260.226 54.8024 256.516 53.9658 231.548V231.532Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M186.422 217.225C207.455 218.613 211.12 246.572 212.241 262.315C213.094 274.214 215.219 296.608 216.608 308.09C200.795 308.207 192.897 308.257 177.085 308.374C170.291 308.424 167.882 303.21 166.777 289.255C165.84 277.456 167.714 252.689 157.926 244.182C157.608 244.232 157.457 244.249 157.139 244.299C158.562 265.724 160.034 287.133 162.326 308.491C146.096 308.624 129.865 308.758 113.634 308.909C112.529 278.944 111.291 248.945 109.869 219.014C108.446 189.166 106.94 159.268 105.066 129.403C125.146 118.39 145.594 108.045 166.359 98.385C200.21 78.2134 205.313 124.774 206.987 145.831C208.693 167.239 211.421 204.374 186.305 215.22C186.355 216.022 186.372 216.423 186.405 217.242L186.422 217.225ZM161.657 175.746C160.754 158.432 158.98 154.872 155.081 156.276C154.429 156.51 152.437 157.028 152.103 157.63C148.84 163.629 153.609 186.726 154.479 200.981C155.516 200.714 156.57 200.446 157.742 200.146C161.674 199.143 162.544 193.076 161.64 175.763L161.657 175.746Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M276.965 311.666C219.421 311.499 218.333 226.334 216.359 187.06C214.033 140.901 212.075 73.8682 264.75 54.4152C324.738 32.2715 324.637 134.049 326.076 166.587C327.666 202.702 339.195 311.85 276.965 311.666ZM274.941 173.907C273.033 135.887 271.761 130.038 268.432 130.857C265.085 131.692 264.349 138.093 266.005 175.595C266.541 187.879 271.494 224.362 272.916 224.261C275.811 224.044 275.593 186.943 274.941 173.907Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M393.327 311.633C331.716 311.55 334.611 203.79 333.071 165.519C331.281 120.914 324.203 34.0939 383.421 20.3064C447.207 5.44921 443.408 117.989 444.362 152.182C445.416 189.668 457.648 311.734 393.327 311.65V311.633ZM392.59 156.026C392.239 144.094 388.139 106.759 386.416 106.876C383.387 107.076 382.986 144.094 383.521 157.129C384.14 171.802 389.294 212.68 390.064 212.647C392.724 212.513 393.042 171.184 392.607 156.026H392.59Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M506.525 172.585C511.411 171.95 516.849 171.298 522.555 170.663C522.789 193.275 523.074 215.903 523.392 238.515C523.726 261.26 524.094 284.006 524.513 306.751C502.124 306.784 479.752 306.834 457.364 306.901C456.427 257.784 455.439 208.667 454.218 159.583C452.996 110.533 451.875 61.4158 449.984 12.3655C468.073 9.74166 486.077 7.41866 504.232 5.39648C504.534 55.9007 505.504 106.422 506.24 156.926C506.341 163.193 506.408 166.335 506.508 172.602L506.525 172.585Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M533.312 306.736C532.961 256.131 532.275 205.51 531.605 154.905C530.953 104.301 530.334 53.713 529.363 3.10843C547.017 1.68789 564.804 0.735298 582.507 0.300781C582.407 51.2228 582.708 102.162 582.942 153.084C583.193 204.273 583.528 255.479 583.929 306.685C567.046 306.685 550.179 306.702 533.296 306.736H533.312Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M701.881 3.71026C700.141 54.0474 699.773 104.451 699.07 154.789C698.35 205.426 697.464 256.081 697.48 306.736C681.099 306.702 664.7 306.686 648.319 306.686C646.211 286.798 644.035 266.844 641.944 247.04C639.718 226.016 637.928 204.825 636.271 183.667C636.104 183.667 636.02 183.667 635.87 183.667C636.288 207.516 636.656 231.364 636.807 255.195C636.924 272.342 636.79 289.522 637.125 306.686C620.224 306.686 611.774 306.686 594.891 306.686C594.907 255.58 594.991 204.457 594.857 153.351C594.723 102.262 594.79 51.1395 594.004 0.0502858C612.209 -0.100124 630.281 0.0502858 648.47 0.518227C650.109 26.3386 652.82 52.3595 654.945 77.8623C656.317 94.4241 657.873 111.37 658.861 128.133C659.028 127.982 659.112 127.899 659.279 127.731C659.078 110.468 658.861 93.1706 658.844 75.9404C658.827 50.9724 658.877 25.9041 658.559 0.902608C675.912 1.67137 684.579 2.22287 701.898 3.69354L701.881 3.71026Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M764.144 205.695C764.479 197.823 765.048 173.808 765.248 165.535C765.516 154.505 765.767 143.876 765.817 136.389C774.535 137.96 783.387 138.812 789.796 139.464C797.56 140.266 807.633 141.353 817.84 141.804C817.02 183.501 829.252 311.466 760.496 311.984C696.091 312.469 708.223 188.364 708.808 151.196C709.394 114.881 701.58 -4.91252 768.428 6.3515C818.191 14.7243 820.701 65.0113 819.229 106.725C818.995 113.193 818.677 119.677 818.308 126.913C810.31 125.108 800.906 123.554 791.77 122.518C783.169 121.549 774.97 121.081 768.662 121.248C768.796 115.75 768.863 112.992 768.997 107.477C769.432 89.7788 767.24 82.5925 766.152 83.0939C757.083 87.3054 759.793 136.389 759.342 155.976C758.923 174.075 754.004 220.919 763.91 226.134C765.483 226.969 768.746 221.237 769.817 205.578C767.541 205.611 766.403 205.628 764.127 205.661L764.144 205.695Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M961.726 59.3444C953.142 115.063 942.433 173.639 937.296 226.717C934.82 252.22 935.071 280.865 934.167 307.955C925.55 307.236 911.979 306.802 901.99 306.735C892.134 306.685 878.263 306.952 869.846 307.654C871.77 278.257 874.23 247.457 874.163 219.347C873.996 159.216 868.307 93.4038 864.709 30.4824C880.906 34.4265 897.07 38.8051 913.034 43.5848C911.729 69.0876 911.059 94.7074 910.658 120.127C910.356 139.479 910.306 158.999 910.273 178.435C910.708 178.502 910.925 178.536 911.344 178.603C913 159.517 914.673 140.365 916.163 121.33C918.137 96.3118 919.71 71.1098 920.865 45.9579C937.296 50.9716 945.479 53.6622 961.743 59.3611L961.726 59.3444Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M1048.02 93.9556C1047.47 101.894 1046.53 114.662 1045.94 125.809C1045.32 137.541 1044.79 150.443 1044.62 158.532C1032.98 154.554 1021.15 150.677 1011.26 147.802C1010.97 153.284 1010.84 156.025 1010.55 161.506C1021.91 164.531 1033.24 167.389 1043 169.378C1041.88 187.41 1040.86 205.443 1040.04 223.475C1030.72 220.935 1018.99 218.244 1007.73 216.339C1007.42 222.071 1007.27 224.929 1006.99 230.661C1017.33 232.149 1030.18 233.77 1040.62 235.124C1039.87 244.516 1039.12 258.821 1038.43 271.974C1037.79 284.274 1037.06 298.279 1036.79 308.29C1009.2 308.072 981.589 307.888 953.996 307.721C956.456 266.626 958.531 225.481 960.522 184.369C962.53 143.223 964.454 102.028 965.977 60.832C993.737 70.993 1020.98 81.9897 1048 93.9389L1048.02 93.9556Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M1132.77 137.122C1132.08 146.615 1131.4 161.756 1130.78 175.293C1130.16 188.83 1129.46 204.656 1129.22 215.519C1124.12 213.781 1121.58 212.912 1116.47 211.207C1115.02 243.846 1113.29 276.502 1112.36 309.174C1105.35 308.405 1093.63 308.272 1085.13 308.188C1076.61 308.104 1065.19 307.987 1057.82 308.756C1060.35 271.404 1062.27 234.003 1064.32 196.617C1059.08 195.464 1056.45 194.896 1051.18 193.793C1052.18 177.432 1053.02 161.037 1053.87 144.693C1054.69 129.067 1055.53 113.391 1056.2 97.748C1082.19 110.082 1107.62 123.184 1132.77 137.155V137.122Z"
                fill="#FFF6F6"
              ></path>
              <path
                d="M1182.03 164.565C1203.25 179.055 1223.85 199.176 1223.65 227.085C1223.53 243.53 1220.2 249.647 1210.06 254.059C1205.56 256.683 1204.09 259.958 1204 264.888C1204 265.908 1203.97 266.76 1204.09 267.98C1197.01 266.108 1186.3 263.434 1178.27 261.763C1168.56 259.741 1161.8 258.738 1152.67 258.036C1152.62 256.115 1152.68 254.209 1152.78 251.903C1153.67 229.141 1158.67 223.726 1169.55 222.924C1179.17 222.222 1180.17 215.003 1180.43 206.814C1180.56 202.234 1179.62 199.661 1178 198.875C1175.25 197.555 1174.22 202.034 1173.92 211.426C1173.85 213.381 1173.65 215.872 1173.82 218.713C1170.9 217.409 1166.22 215.604 1160.75 213.565C1153.12 210.724 1143.13 207.749 1137.3 207.098C1137.42 201.232 1137.62 195.516 1137.76 190.67C1138.64 158.064 1152.06 144.093 1182.03 164.565ZM1206.75 291.578C1206.56 305.299 1196.77 311.482 1176.81 311.432C1157.12 311.382 1147.71 303.477 1148.42 286.013C1149.1 268.749 1158.94 262.733 1178.15 266.376C1197.61 270.069 1206.93 278.024 1206.76 291.595L1206.75 291.578Z"
                fill="#FFF6F6"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_587_15588">
                <rect width="1224" height="312" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className=" flex flex-wrap mt-[3rem] gap-[1.2rem] lg:static sm:relative sm:left-[-3rem]">
            <div className="cards p-5 bg-green-400 rounded-lg ">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
            <div className="cards p-5 bg-yellow-400 rounded-lg">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
            <div className="cards p-5 bg-green-400 rounded-lg">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
            <div className="cards p-5 bg-green-400 rounded-lg">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
            <div className="cards p-5 bg-pink-400 rounded-lg">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
            <div className="cards p-5 bg-green-400 rounded-lg">
              <div className="title ">
                <p className="font-extra-bold text-[60px] tracking-tighter">
                  CURIOUS
                  <br /> PIECES
                </p>
                <img
                  src="https://eat-curious.com/wp-content/uploads/2023/02/pieces-5-e1689970787900-768x472.png"
                  className="w-[22rem] h-[15rem]"
                />
              </div>
            </div>
          </div>
          <div className=" bg-pink-400 rounded flex font-extra-bold text-green-950 font-black justify-center items-center m-[3rem] lg:mx-[35rem] sm:mx-[3rem] h-[3rem] w-[7rem]">
            <button className="p-2 tracking-tighter  ">VIEW ALL</button>
          </div>
        </div>
        <div className="flex lg:p-16 sm:mx-4 lg:gap-20">
          <img
            src="https://eat-curious.com/wp-content/uploads/2023/07/home-54-1024x576.jpg"
            className="lg:w-[49rem]  lg:static sm:relative sm:w-[40rem] lg:h-[20rem] sm:h-[19rem] rounded-lg sm:top-[28rem]"
          />
          <div className="sm:flex sm:flex-col text-neutral-50 mb-[3rem] lg:static sm:relative sm:left-[-20rem] w-full">
            <h5 className="lg:text-[60px] sm:text-[30px] font-extra-bold tracking-tighter ">
              WE'RE GROWING MORE THAN   PLANTS...
             
            </h5>
            <p className="lg:text-[18px] sm:text-[10px] lg:static sm:relative">
              We’re here to grow a positive, curious and thoughtful attitude to
              plant-based food. Which is why we put curiosity at the heart of
              everything we do. So much so, we’ve built our own vertical farm -
              a near-off-grid, plant playground where we’re researching how to
              add even more flavour, nutrition and sustainability to the way we
              all eat.
            </p>
          </div>
        </div>
        <div className="flex p-8 m-[8rem] lg:gap-[2rem] sm:gap-[0.3rem] w-full h-full sm:w-2xl lg:static sm:relative sm:top-[12rem] sm:right-[8rem] overflow-hidden ">
          <div className="relative transparent sm:flex-none bg-[url('https://eat-curious.com/wp-content/uploads/2023/07/afro-fusion-spice-bowl-1024x724.jpg')] bg-cover bg-center lg:w-[26rem] lg:h-[44rem] sm:w-[20rem] sm:h-[28rem] sm:rounded  lg:rounded-lg  ">
            <div className="absolute inset-0 bg-black opacity-[0.39]"></div>
            <button className="absolute bg-yellow-500 bg-opacity-[1] translate-x-[16rem] rotate-[15deg] flex justify-center mt-3 rounded box-border  ">
              <p className="font-extra-bold p-1">MINCE</p>
            </button>
          </div>
          <div className="relative transparent sm:flex-none bg-[url('https://eat-curious.com/wp-content/uploads/2023/07/auto-draft-2.jpg')] bg-cover bg-center lg:w-[26rem] lg:h-[44rem] sm:w-[20rem] sm:h-[28rem] sm:rounded  lg:rounded-lg  ">
            <div className="absolute inset-0 bg-black opacity-[0.39]"></div>
            <button className="absolute bg-yellow-500 bg-opacity-[1] translate-x-[16rem]  rotate-[15deg] flex justify-center mt-3 rounded box-border  ">
              <p className="font-extra-bold p-1">MINCE</p>
            </button>
          </div>
          <div className="relative transparent sm:flex-none bg-[url('https://eat-curious.com/wp-content/uploads/2023/07/auto-draft-3.jpg')] bg-cover bg-center lg:w-[26rem] lg:h-[44rem] sm:w-[20rem] sm:h-[28rem] sm:rounded  lg:rounded-lg  ">
            <div className="absolute inset-0 bg-black opacity-[0.39]"></div>
            <button className="absolute bg-yellow-500 bg-opacity-[1] translate-x-[16rem] rotate-[15deg] flex justify-center mt-3 rounded box-border  ">
              <p className="font-extra-bold p-1">MINCE</p>
            </button>
          </div>
          <div className="relative transparent sm:flex-none bg-[url('https://eat-curious.com/wp-content/uploads/2023/07/auto-draft-4.jpg')] bg-cover bg-center lg:w-[26rem] lg:h-[44rem] sm:w-[20rem] sm:h-[28rem] sm:rounded  lg:rounded-lg  ">
            <div className="absolute inset-0 bg-black opacity-[0.39]"></div>
            <button className="absolute bg-yellow-500 bg-opacity-[1] translate-x-[16rem] rotate-[15deg] flex justify-center mt-3 rounded box-border  ">
              <p className="font-extra-bold p-1">MINCE</p>
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-white-500 lg:top-[288rem] sm:top-[390rem] flex flex-col items-center gap-[5rem] mt-[3rem]">
        <h5 className="font-extra-bold lg:text-[4rem] sm:text-[3rem] lg:static sm:relative sm:top-[8rem] ">INTRIGUED?</h5>
        <img
          src="	https://eat-curious.com/wp-content/uploads/2022/12/home-6.svg "
          alt=""
          className="w-[24rem] h-[23rem]"
        />
        <button className="absolute bg-pink-400 tracking-tighter font-extra-bold lg:mt-[10rem] sm:mt-[12rem] rounded-lg text-[25px]">
          <p className="p-2">LET'S CHAT</p>
        </button>
      </div>
    </>
  );
}
