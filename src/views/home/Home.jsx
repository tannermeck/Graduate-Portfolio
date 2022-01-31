import style from './home.css';
import profilePic from '../../assets/profile.png';

export default function Home(){
    return (
        <>
            <div className={style.homeHeading}>
                <h1>Hello, I'm Tanner</h1>
                <p>Full-Stack Software Engineer</p>
                <p>Vancouver, WA</p>
            </div>
            <section className={style.aboutContainer}>
                <div className={style.profileImg}>
                    <h1 className={style.aboutMeHeader}>About Me</h1>
                    <img src={profilePic} alt='profile picture' height='200' />
                </div>
                <div className={style.profileContext}>
                    <p>
                        As a former Registered Nurse, being a life long learner is my most prestigious skillset. From being introduced to new diagnoses and procedures on a daily basis, to dealing with deadly viral precautions, ranging from Tuberculosis to the newly pronounced Covid Virus, learning became a fluid necessity. A few years later, I began my search into becoming a Software Engineer. What I found was exhilarating! It fed my passion for learning, building, assessing, and evaluating, all in a different and creative way. That's why I believe my prior skillsets will correlate well with my transition into Software Engineering, from always thinking on your toes to being comfortable with being uncomfortable. 
                    </p>
                    <p>
                        My passion is fueled by my love of error resolution and innermost concern for writing clean-cut code. After graduating in January of 2022, I hope to find work within the front-end of a motivated team of developers and continue to build my skills as a developer. When I'm not coding, I enjoy being a father to my wife and I's 10 month old son, playing with our two golden retrievers, and traveling to new destinations in our travel trailer.
                    </p> 
                </div>
                {/* <p>I first began my career as a Registered Nurse at PeaceHealth Southwest for a little over 3 years, then was introduced to the realm of Software Engineering. Nursing was my absolute passion at the time, but I always felt like something was missing in my daily routine. I realized that nursing was missing certain aspects that I have grown to love: building, inventing, and creativity. That's when I discovered this amazing career path that led to my enrollment in Alchemy Code Lab.    
                </p>*/}
                
            </section>
        </>
    )
}