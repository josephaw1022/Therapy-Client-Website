
import React from "react";
// import {Link} from "react-router-dom"
import PartOne from "./PartOne"
import PartTwo from "./PartTwo"
import PartThree from "./PartThree"
import PartFour from "./PartFour"
import PartFive from "./PartFive"
import PartSix from "./PartSix"
import "./Home.css"
export default function HomeIndex(){ 
        document.documentElement.classList.remove("nav-open");
        React.useEffect(
            () => {
            document.body.classList.add("section-page");
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;

            var href = window.location.href.substring(
            window.location.href.lastIndexOf("#/") + 2
            );
            var hrefId = href.substring(href.lastIndexOf("#") + 1);
            if (href.lastIndexOf("#") > 0) {
            document.getElementById(hrefId).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
            }
            // this function is used to make the right bullets list
            // (the bellow <nav id="cd-vertical-nav">)
            // active when changeing the section on scroll
            const updateView = () => {
            var contentSections = document.getElementsByClassName("cd-section");
            var navigationItems = document
                .getElementById("cd-vertical-nav")
                .getElementsByTagName("a");

            for (let i = 0; i < contentSections.length; i++) {
                var activeSection =
                parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
                if (
                contentSections[i].offsetTop - window.innerHeight / 2 <
                    window.pageYOffset &&
                contentSections[i].offsetTop +
                    contentSections[i].scrollHeight -
                    window.innerHeight / 2 >
                    window.pageYOffset
                ) {
                navigationItems[activeSection].classList.add("is-selected");
                } else {
                navigationItems[activeSection].classList.remove("is-selected");
                }
            }
            };

            window.addEventListener("scroll", updateView);
            return function cleanup() {
            document.body.classList.remove("section-page");
            window.removeEventListener("scroll", updateView);
            };
        }
    );
    return (
        <>
        <div className="section-space" />
        <PartOne /> 
        {/* <PartTwo />  */}
        {/* <PartThree/>  */}
        <PartFour/>
        <PartThree/>
        <PartFive/> 
        <PartSix/>


        <nav id="cd-vertical-nav" style={{marginRight:"35px"}}>
        <ul>
          <li>
            <a
              data-number="1"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">Home</span>
            </a>
          </li>
          {/* <li>
            <a
              data-number="2"
              href="#About"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("About").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">About</span>
            </a>
          </li> */}
          <li>
            <a
              data-number="3"
              href="#Services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Services").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              data-number="3"
              href="#Contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Contact").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">Contact</span>
            </a>
          </li>
          
          <li>
            <a
              data-number="5"
              href="#OurTeam"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("OurTeam").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">Our Team</span>
            </a>
          </li>
          <li>
            <a
              data-number="6"
              href="#Counseling"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Counseling").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot pointercolor" />
              <span className="cd-label">Counseling</span>
            </a>
          </li>
          
          
        </ul>
      </nav>

        </>
    ); 
}