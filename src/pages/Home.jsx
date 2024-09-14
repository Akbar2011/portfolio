import meIcon from "../assets/images/me.jpg"
import { FaCheck, FaTimes, FaStar } from "react-icons/fa";
import userIcon from "../assets/images/user.png";
import { Link } from "react-router-dom";

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

const Home = () => {

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
      <main className="main">
            <div className="programmer">
                <div className="programmer__content">
                  <h1 className="programmer__title">Discover my Amazing Art Space!</h1>
                  <Link to="/portfolio">
                      <button className="programmer__button">Explore Now</button>
                  </Link>
                </div>
            </div>
            <div className="texts">
            <p className="main__text"><span className="main__span">10+</span> Years Experience</p>
            <p className="main__text"><span className="main__span">143</span> Completed Projects</p>
            <p className="main__text"><span className="main__span">114</span> Hppy Customers</p>
            <p className="main__text"><span className="main__span">20+</span> Honors and Awards</p>
            </div>
           <div className="services">
            <h1 className="services__title">My Services</h1>
            <div className="services__div">
                <p className="services__div-title">Web Development</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
            <div className="services__div">
                <p className="services__div-title">UI/UX Design</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
            <div className="services__div">
                <p className="services__div-title">Sound Design</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
            <div className="services__div">
                <p className="services__div-title">Game Design</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
            <div className="services__div">
                <p className="services__div-title">Advertising</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
            <div className="services__div">
                <p className="services__div-title">Photography</p>
                <p className="services__div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
                <Link to="/contacts" className="services__div-link">Order Now</Link>
            </div>
           </div>
           <div className="prices">
    <h1 className="prices__title">Price Plans</h1>
    <div className="prices__content">
        <div className="prices__div">
            <h1 className="prices__div-title">Starter Price</h1>
            <p className="prices__div-text">$ <span className="prices__div-text-span">FREE</span> hour*</p>
            <div className="prices__div-opportunity">
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Ui Design</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Web Development</p>
                <p className="prices__div-opportunity_text"><FaTimes className="prices__div-opportunity_times"/> Logo design</p>
                <p className="prices__div-opportunity_text"><FaTimes className="prices__div-opportunity_times"/> SEO optimization</p>
                <p className="prices__div-opportunity_text"><FaTimes className="prices__div-opportunity_times"/> WordPress integration</p>
            </div>
            <p className="prices__div-warn">* Free only when ordering paid services</p>
        </div>
        <div className="prices__div">
            <h1 className="prices__div-title">Hourly Payment</h1>
            <p className="prices__div-text">$ <span className="prices__div-text-span">29</span> hour</p>
            <div className="prices__div-opportunity">
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Ui Design</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Web Development</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_times"/> Logo design</p>
                <p className="prices__div-opportunity_text"><FaTimes className="prices__div-opportunity_times"/> SEO optimization</p>
                <p className="prices__div-opportunity_text"><FaTimes className="prices__div-opportunity_times"/> WordPress integration</p>
            </div>
        </div>
        <div className="prices__div">
            <h1 className="prices__div-title">Full Time</h1>
            <p className="prices__div-text">$ <span className="prices__div-text-span">2999</span> hour</p>
            <div className="prices__div-opportunity">
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Ui Design</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_icon"/> Web Development</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_times"/> Logo design</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_times"/> SEO optimization</p>
                <p className="prices__div-opportunity_can"><FaCheck className="prices__div-opportunity_times"/> WordPress integration</p>
            </div>
        </div>
    </div>
           </div>
           <div className="recommend">
            <h1 className="recommend__title">Recommendations</h1>
            <div className="recommend__content">
                <div className="recommend__div">
                    <h1 className="recommend__div-title">Paul Trueman</h1>
                    <img className="recommend__div-icon" src={userIcon} alt="" />
                    <h1 className="recommend__div-lol">Template author</h1>
                    <div className="recommend__div-content">
                        <p className="recommend__div-content_text">Working with Akbarjon has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Akbarjon! This is easily a 5 star freelancer.</p>
                    </div>
                    <div className="recommend__div-stars">
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                    </div>
                </div>
                <div className="recommend__div">
                <h1 className="recommend__div-title">Paul Trueman</h1>
                <img className="recommend__div-icon" src={userIcon} alt="" />
                    <h1 className="recommend__div-lol">Template author</h1>
                    <div className="recommend__div-content">
                        <p className="recommend__div-content_text">Working with Akbarjon has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Akbarjon! This is easily a 5 star freelancer.</p>
                    </div>
                    <div className="recommend__div-stars">
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                        <FaStar className="recommend__div-stars_icon" />
                    </div>
                </div>
    </div>
           </div>
           <footer className="footer">
            <h1 className="footer__title">© 2024 All Rights Reserved.</h1>
            <h1 className="footer__title">Email: akbarjonabdulkhaev8@gmail.com</h1>
        </footer>
        </main>
        </div>
        </>
    );
};

export default Home;