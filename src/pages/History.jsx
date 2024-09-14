import meIcon from "../assets/images/me.jpg"
import { FaCheck } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const languages = [
  { name: "HTML", level: 95 },
  { name: "SCSS", level: 97 },
  { name: "JavaScript", level: 90 },
  { name: "React.jsx", level: 75 },
];

const languageProficiency = [
    { name: "Russian", level: 95 },
    { name: "English", level: 86 },
    { name: "Uzbek", level: 82 },
];

const skills = [
    ["Bootstrap", "Materialize"],
    ["Stylus", "Sass", "Less"],
    ["Gulp", "Webpack", "Grunt"],
    ["GIT knowledge"]
];

const Blog = () => {

    const [isNavbarVisible, setNavbarVisible] = useState(false);
  
    const toggleNavbar = () => {
      setNavbarVisible(!isNavbarVisible);
    };

  return (
    <>
    <div className="wrapper">
    <div className="sidebar">
            <div className="about">
                <div className="sidebar__about-info">
                    <img className="sidebar__about-icon" src={meIcon} alt="" />
                    <p className="sidebar__about-name">Akbarjon Abdulkhaev</p>
                    <p className="sidebar__about-jobs">Web-developer</p>
                </div>
                <div className="sidebar__about-scroll">
                    <div className="sidebar__about-country">
                        <p className="sidebar__about-country_title">
                            Residence: <span className="residence">Uzbekistan</span>
                        </p>
                        <p className="sidebar__about-country_title">
                            City: <span className="city">Tashkent</span>
                        </p>
                        <p className="sidebar__about-country_title">
                            Age: <span className="age">12</span>
                        </p>
                    </div>
                    <hr className="just__hr" />
                    <div className="sidebar__about-proglang">
                        {languages.map((lang) => (
                            <div key={lang.name}>
                                <p className="sidebar__about-proglang_text">{lang.name}</p>
                                <div className="sidebar__about-proglang_progress">
                                    <div
                                        className="sidebar__about-proglang_progress--fill"
                                        style={{ width: `${lang.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="lang__hr" />
                    <div className="sidebar__about-lang">
  {languageProficiency.map((lang) => (
    <div className="sidebar__about-lang_item" key={lang.name}>
      <div
        className="sidebar__about-lang_circle"
        style={{ '--percentage': `${lang.level}%` }}
      >
        <span className="sidebar__about-lang_percentage">{lang.level}%</span>
      </div>
      <p className="sidebar__about-lang_label">{lang.name}</p>
    </div>
  ))}
</div>
                    <hr className="proglang__hr" />
                    <div className="sidebar__skills">
                        {skills.map((column, index) => (
                            <div key={index} className="sidebar__skills-column">
                                <FaCheck className="sidebar__skills-icon" />
                                <div className="sidebar__skills-items">
                                    {column.map((skill, index) => (
                                        <span className="sidebar__skilld-item_span" key={index}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>
    <div className="history">
      <div className="hitory__content">
        <div className="hisotry__content_first">
            <h1 className="history__content_first-title">Education</h1>
            <div className="history__first_div">
                <h1 className="history__first_div-title">DIS</h1>
                <p className="history__first_div-text">studying in Diplomat International School</p>
            </div>
            <div className="history__first_div">
              <h1 className="history__first_div-title">Programming Course</h1>
              <p className="history__first_div-text">Coursework - Git, WordPress, Javascript, iOS, Android.</p>
            </div>
            <div className="history__first_div">
              <h1 className="history__first_div-title">Web developer courses</h1>
              <p className="history__first_div-text">Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript</p>
            </div>
        </div>
        <div className="history__content_second">
            <h1 className="history__content_second-title">Hobbies</h1>
            <div className="history__second_div">
              <h1 className="history__first_div-title">Chess</h1>
              <p className="history__first_div-text">I love to play chess as aside hobby</p>
            </div>
            <div className="history__second_div">
              <h1 className="history__first_div-title">Swimming</h1>
              <p className="history__first_div-text">Remember about sports! You need to keep yourself in good physical shape!</p>
            </div>
            <div className="history__second_div">
              <h1 className="history__first_div-title">Space</h1>
              <p className="history__first_div-text">Stars, Black Holes, Pulsars, Neutran Stars, Galaxys, Magnitars and I've been interested in many others since childhood</p>
            </div>
        </div>
      </div>
      <footer className="history__footer">
        <h1 className="footer__title">© 2024 All Rights Reserved.</h1>
        <h1 className="footer__title">Email: akbarjonabdulkhaev8@gmail.com</h1>
      </footer>
    </div>
    </div>
    </>
  )
}

export default Blog