import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src="https://media-exp1.licdn.com/dms/image/C5103AQHlPcRR0z3R9g/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=TI8-pBZnICNNB19YnjsAHqzdihHumIE0EX5XvBdmrKg" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Pankaj Shaw
                </div>
                <TypedText
                  dataText={
                      [
                          
                          'Frontend Development',
                          'System Engineer, TCS'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    BANGALORE / INDIA
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1KS59x7gIOht-r6pZ3DaV5kDDxSsqXNML/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:3mr3baskan@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
