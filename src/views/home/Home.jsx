import style from './home.css';
import profilePic from '../../assets/profile2.png';
import { NavLink } from 'react-router-dom';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linked.png';
import email from '../../assets/email.png';

export default function Home(){
    return (
        <article className={style.homeContainer}>
            <div className={style.homeHeading}>
                <h1>Hello, I'm Tanner</h1>
                <p className={style.title}>Full-Stack Software Engineer</p>
                <p className={style.location}>Vancouver, WA</p>
                <span className={style.links}>
                    <a href='https://github.com/tannermeck'>
                        <img src={github} alt='github icon' height='50' />
                    </a>
                    <NavLink to='/contact'>
                        <img src={email} alt='email' height='40' className={style.emailImage} />
                    </NavLink>
                    <a href='https://www.linkedin.com/in/tanner-meck/'>
                        <img src={linkedIn} alt='linkedIn icon' height='55' className={style.linkedInIcon} />
                    </a>
                </span>
            </div>
            <section className={style.aboutContainer}>
                <div className={style.profileImg}>
                    <h1 className={style.aboutMeHeader}>About Me</h1>
                    <img src={profilePic} alt='profile picture' height='200'/>
                </div>
                <div className={style.profileContext}>
                    <p>
                        As a former Registered Nurse, being a life long learner is my most prestigious skillset. From being introduced to new diagnoses and procedures on a daily basis, to handling deadly viral precautions, learning became a fluid necessity. A few years later, I began my search into becoming a Software Engineer. What I found was exhilarating! It fed my passion for learning, building, assessing, and evaluating, all in a different and creative way. From always thinking on your toes to being comfortable with being uncomfortable, nursing has a direct correlation to my future as a Software Engineer. 
                    </p>
                    <p>
                        My passion is fueled by my love of error resolution and innermost concern for writing clean-cut code. After graduating in January of 2022, I hope to find work within the front-end of a motivated team of developers and continue to build my skills as a developer. When I'm not coding, I enjoy being a father to my wife and I's 10 month old son, playing with our two golden retrievers, and traveling to new destinations in our travel trailer.
                    </p> 
                </div>
                {/* <p>I first began my career as a Registered Nurse at PeaceHealth Southwest for a little over 3 years, then was introduced to the realm of Software Engineering. Nursing was my absolute passion at the time, but I always felt like something was missing in my daily routine. I realized that nursing was missing certain aspects that I have grown to love: building, inventing, and creativity. That's when I discovered this amazing career path that led to my enrollment in Alchemy Code Lab.    
                </p>*/}
                
            </section>
            <section>
                <div>
                    <NavLink to='/projects'>Projects</NavLink>
                </div>
            </section>
        </article>
    )
}