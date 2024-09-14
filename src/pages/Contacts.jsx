import { useState } from 'react';
import meIcon from "../assets/images/me.jpg";
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

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!name) {
            newErrors.name = 'This field is required!';
            isValid = false;
        }
        if (!email) {
            newErrors.email = 'This field is required!';
            isValid = false;
        } else if (!email.endsWith('@gmail.com')) {
            newErrors.email = 'Invalid Gmail!';
            isValid = false;
        }
        if (!message) {
            newErrors.message = 'This field is required!';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Your message has been sent! Please wait for a response.');
        } else {
            setSuccessMessage('');
        }
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
                <div className="contacts">
                    <h1 className="contacts__title">Contacts --this is demo! page may be changed--</h1>
                    <div className="contacts__content">
                        <div className="contacts__content__divs">
                            <div className="contacts__content__divs_div">
                                <h1 className="contacts__content__divs_div-title">Country: <span className="contacts__content__divs_div-span_uzbekistan">Uzbekistan</span></h1>
                                <h1 className="contacts__content__divs_div-title">City: <span className="contacts__content__divs_div-span_tashkent">Tashkent</span></h1>
                                <h1 className="contacts__content__divs_div-title">Street: <span className="contacts__content__divs_div-span">Массив Буюк Ипак Йули</span></h1>
                            </div>
                            <div className="contacts__content__divs_div">
                                <h1 className="contacts__content__divs_div-title">Email: <span className="contacts__content__divs_div-span_email">akbarjonabdulkhaev8@gmail.com</span></h1>
                                <h1 className="contacts__content__divs_div-title">Telegram: <span className="contacts__content__divs_div-span_telegram">@interliminality</span></h1>
                                <h1 className="contacts__content__divs_div-title">Discord: <span className="contacts__content__divs_div-span_discord">@gargantua332323</span></h1>
                            </div>
                            <div className="contacts__content__divs_div">
                                <h1 className="contacts__content__divs_div-title">Support service <span className="contacts__content__divs_div-span_support">+998973868686</span></h1>
                                <h1 className="contacts__content__divs_div-title">Office: <span className="contacts__content__divs_div-span_office">+998973868686</span></h1>
                                <h1 className="contacts__content__divs_div-title">Personal: <span className="contacts__content__divs_div-span_personal">+998973868686</span></h1>
                            </div>
                        </div>
                        <div className="contacts__content_inputs">
                            <h1 className="contacts__content-title">Get In Touch</h1>
                            <div className="contacts__blocks">
    <div className="contacts__blocks_block">
        <input
            className="contacts__blocks_block-input"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
    </div>
    <div className="contacts__blocks_block">
        <input
            className="contacts__blocks_block-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
    </div>
    <div className="contacts__blocks_block_message">
        <textarea
            className="contacts__blocks_block-textarea"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error-message">{errors.message}</p>}
    </div>
    <button className="contacts__content_btn" onClick={handleSubmit}>Send Message</button>
    {successMessage && <p className="success-message">{successMessage}</p>}
</div>

                        </div>
                        <div className="contacts__footer">
                          <h1 className="footer__title">© 2024 All Rights Reserved.</h1>
                          <h1 className="footer__title">Email: akbarjonabdulkhaev8@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
