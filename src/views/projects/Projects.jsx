import style from './projects.css';
import { useEffect, useState } from 'react';


export default function Projects(){
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const loader = () => {
            setTimeout(()=> {
                setLoading(false);
            }, 5000)
        }
        loader();
    }, []);

    if (loading) return <h1 data-text="{ Tanner }" className={style.loader}>{`{ Tanner }`}</h1>
    return (
        <section className={style.projectsContainer}>
            <div >
                <img className={style.phoneAlcode} src='https://res.cloudinary.com/dh5lmddyp/image/upload/c_scale,h_220,w_120/a_0,c_scale,h_200,l_Alcode-phone_wngrv9,w_110,x_0,y_0/v1645660587/phone2_o2i0us.jpg' alt='phone alcode image' />
            </div>
        </section>
    )
}
