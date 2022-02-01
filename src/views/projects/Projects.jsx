import style from './projects.css';
import alcodeHome from '../../assets/alcode/alcode-home.png';
import alcodeSelect from '../../assets/alcode/alcode-select.png';
import alcodeMap from '../../assets/alcode/alcode-map.png';
import alcodeCampground from '../../assets/alcode/alcode-campground.png';
import Carousel from 'nuka-carousel';

export default function Projects(){
        return (
            <section className={style.projectsContainer}>
                <h1>Tanner's Projects</h1>
                <div className={style.carouselDiv}>
                <h3 className={style.projectName}>Alcode-Campgrounds</h3>
                    <Carousel width='100%' autoplay={true} autoplayInterval={5000}>
                        <div>
                            <img className={style.carouselImg} src={alcodeHome}/>
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeSelect} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeMap} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeCampground} />
                        </div>
                    </Carousel>
                </div>
            </section>
        )
}
