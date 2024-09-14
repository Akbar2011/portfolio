import meIcon from "../assets/images/me.jpg"
import { FaCheck } from "react-icons/fa";

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

const Portfolio = () => {

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
    <div className="portfolio">
      <h1 className="portfolio__title">Portfolio --just move the cursor to the block and the content will appear--</h1>
        <div className="portfolio__content">
          <div className="portfolio__content_div">
            <div className="portfolio__content_div-inner">
              <p className="portfolio__content_div-title">Color Changer</p>
              <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/color-changer">Learn More</a>
            </div>
          </div>
          <div className="portfolio__content_div">
            <div className="portfolio__content_div-inner">
            <p className="portfolio__content_div-title">Weather</p>
            <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/weather">Learn More</a>
            </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">Choosing Game</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/choosing-game">Learn More</a>
                </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">Notes</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/notes">Learn More</a>
                </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">JSON</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/NULL">Learn More</a>
                </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">Proweb</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/PROWEB">Learn More</a>
                </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">Table</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/table">Learn More</a>
                </div>
            </div>
            <div className="portfolio__content_div">
                <div className="portfolio__content_div-inner">
                <p className="portfolio__content_div-title">Game</p>
                <a className="portfolio__content_div-link" href="https://github.com/Akbar2011/game">Learn More</a>
                </div>
            </div>
        </div>
        <footer className="portfolio__footer">
            <h1 className="footer__title">© 2024 All Rights Reserved.</h1>
            <h1 className="footer__title">Email: akbarjonabdulkhaev8@gmail.com</h1>
        </footer>
    </div>
    </div>
    </>
    )
}

export default Portfolio