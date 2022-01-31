import { NavLink } from "react-router-dom";
import image from '../../assets/tm5.png';
import style from './header.css';

export default function Header(){
    return (
        <section className={style.headerContainer}>
            <div className={style.nameContainer}>
                <img className={style.headerImg} src={image} alt='tm' height='50'/>
                <h2>Tanner Meck</h2>
            </div>
            <div className={style.linkContainer}>
                <NavLink activeClassName={style.active} exact to='/'>Home</NavLink>
                <NavLink activeClassName={style.active} to='/projects'>Projects</NavLink>
                <NavLink activeClassName={style.active} to='/contact'>Connect</NavLink>
            </div>
        </section>
    )
}