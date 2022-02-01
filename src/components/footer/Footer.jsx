import { NavLink } from 'react-router-dom';
import footerStyle from './footer.css';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linked.png';
import email from '../../assets/email.png';

export default function Footer(){
    return (
        <div className={footerStyle.footer}>
            <h3>Tanner Meck || Full-Stack Software Engineer</h3>
            <div className={footerStyle.footerLinks}>
                    <a href='https://github.com/tannermeck'>
                        <img src={github} alt='github icon' height='25' className={footerStyle.footerGithubIcon}/>
                    </a>
                    <NavLink to='/contact'>
                        <img src={email} alt='email' height='20' className={footerStyle.footerEmailImage} />
                    </NavLink>
                    <a href='https://www.linkedin.com/in/tanner-meck/'>
                        <img src={linkedIn} alt='linkedIn icon' height='27.5' className={footerStyle.footerLinkedInIcon} />
                    </a>
            </div>
        </div>
    )
}