import style from './home.css';
import profilePic from '../../assets/profile2.png';
import { NavLink } from 'react-router-dom';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linked.png';
import email from '../../assets/email.png';
import { useEffect, useState } from 'react';

export default function Home(){
    const [loading, setLoading] = useState(true);
   
    useEffect(()=> {
        const loader = () => {
            setTimeout(()=> {
                setLoading(false);
            }, 5000)
        }
        loader();
    }, []);

    if (loading) return (
    <section className={style.load}>
        <h1 className={style.loadh1}>{`{ Tanner Meck }`}</h1>
        <div className={style.loader}>
            <div className={style.loaderdiv}>
            </div>
            <div className={style.loader2}>
            </div>
        </div>
    </section>
    )
    return (
        <article className={style.homeContainer}>
            <div className={style.homeHeading}>
                <h1 className={style.homeName}>{`{ Hello, I'm Tanner }`}</h1>
                <p className={style.title}>Full-Stack Software Engineer</p>
                <p className={style.location}>Vancouver, WA</p>
                <span className={style.links}>
                    <a href='https://github.com/tannermeck'>
                        <img src={github} alt='github icon' height='25' />
                    </a>
                    <NavLink to='/contact'>
                        <img src={email} alt='email' height='20' className={style.emailImage} />
                    </NavLink>
                    <a href='https://www.linkedin.com/in/tanner-meck/'>
                        <img src={linkedIn} alt='linkedIn icon' height='27.5' className={style.linkedInIcon} />
                    </a>
                </span>
            </div>
            <section className={style.aboutContainer}>
                <div className={style.profileImg}>
                    <h1 className={style.aboutMeHeader}>About Me</h1>
                    <img className={style.aboutMeProfilePicture} src={profilePic} alt='profile picture' height='200'/>
                </div>
                <div className={style.profileContext}>
                    <p>
                        As a former Registered Nurse, being a life long learner is my most prestigious skillset. From being introduced to new diagnoses and procedures on a daily basis, to handling deadly viral precautions, learning became a fluid necessity. A few years later, I began my search into becoming a Software Engineer. What I found was exhilarating! It fed my passion for learning, building, assessing, and evaluating, all in a different and creative way. From always thinking on your toes to being comfortable with being uncomfortable, nursing has a direct correlation to my future as a Software Engineer. 
                    </p>
                    <br />
                    <p>
                        My passion is fueled by my love of error resolution and innermost concern for writing clean-cut code. After graduating in January of 2022, I hope to find work within the front-end of a motivated team of developers and continue to build my skills as a developer. When I'm not coding, I enjoy being a father to my wife and I's 10 month old son, playing with our two golden retrievers, and traveling to new destinations in our travel trailer.
                    </p> 
                </div>
                {/* <p>I first began my career as a Registered Nurse at PeaceHealth Southwest for a little over 3 years, then was introduced to the realm of Software Engineering. Nursing was my absolute passion at the time, but I always felt like something was missing in my daily routine. I realized that nursing was missing certain aspects that I have grown to love: building, inventing, and creativity. That's when I discovered this amazing career path that led to my enrollment in Alchemy Code Lab.    
                </p>*/}
                
            </section>
            <section className={style.techStackParent}>
                <h1 className={style.techStackH1}>Tech Stack</h1>
                <div className={style.techStackContainer}>
                    <span className={style.techStackSpan}>
                        <h1 className={style.spanH1}>Languages</h1>
                        <p>Javascript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </span>
                    <span className={style.techStackSpan}>
                        <h1 className={style.spanH1}>{`Libraries & Tools`}</h1>
                        <p>React</p>
                        <p>Node</p>
                        <p>Express</p>
                        <p>Thunder Client</p>
                        <p>Postman</p>
                        <p>Beekeeper</p>
                        <p>PG Admin</p>
                    </span>
                    <span className={style.techStackSpan}>
                        <h1 className={style.spanH1}>{`Databases & Deployment`}</h1>
                        <p>PostgreSQL</p>
                        <p>Supabase</p>
                        <p>Heroku</p>
                        <p>Netlify</p>
                        <p>GitHub</p>
                    </span>
                    <span className={style.techStackSpan}>
                        <h1 className={style.spanH1}>Testing</h1>
                        <p>React Testing Library</p>
                        <p>Superagent</p>
                        <p>Jest</p>
                        <p>Q-Unit</p>
                    </span>
                </div>
            </section>
        </article>
    )
}