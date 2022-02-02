import style from './projects.css';
import alcodeHome from '../../assets/alcode/alcode-home.png';
import alcodeSelect from '../../assets/alcode/alcode-select.png';
import alcodeMap from '../../assets/alcode/alcode-map.png';
import alcodeCampground from '../../assets/alcode/alcode-campground.png';
import navbar from '../../assets/alcode/navbar.png';
import oauth from '../../assets/alcode/oauth.png';
import zoom from '../../assets/alcode/zoom.png';
import zoomIn from '../../assets/alcode/zoom-in.png';
import campDetail from '../../assets/alcode/campdetail.png';
import campImage from '../../assets/alcode/camp-image.png';
import favorites from '../../assets/alcode/favorites.png';
import signin from '../../assets/spending/signin.png';
import home from '../../assets/spending/home.png';
import menu from '../../assets/spending/menu.png';
import chart from '../../assets/spending/chart.png';
import addRecurring from '../../assets/spending/addRecurring.png';
// import category from '../../assets/spending/category.png';
import newPurchase from '../../assets/spending/newPurchase.png';
import stopRecurring from '../../assets/spending/stopRecurring.png';
import deletePurchase from '../../assets/spending/delete.png';
import subcategory from '../../assets/spending/subcategory.png';
import Carousel from 'nuka-carousel';

export default function Projects(){
        return (
            <section className={style.projectsContainer}>
                <h1>Tanner's Projects</h1>
                <div className={style.carouselDiv}>
                    <h3 className={style.projectName}>Alcode-Campgrounds</h3>
                    <Carousel width='100%' autoplay={true} autoplayInterval={3000} >
                    {/* renderBottomCenterControls={({position: null})} */}
                    {/* need to style bottom controls so they do not cover footer */}
                        <div>
                            <img className={style.carouselImg} src={alcodeHome}/>
                        </div>
                        <div>
                            <img className={style.carouselImg} src={navbar}/>
                        </div>
                        <div>
                            <img className={style.carouselImg} src={oauth}/>
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeSelect} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={zoom} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={zoomIn} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={campDetail} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={campImage} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={favorites} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeMap} />
                        </div>
                        <div>
                            <img className={style.carouselImg} src={alcodeCampground} />
                        </div>
                    </Carousel>
                </div>
                <div className={style.spendingDiv}>
                    <h3>Spending Tracker</h3>
                    <Carousel autoplay={true} autoplayInterval={3000}>
                        <img className={style.spendingImg} src={signin} alt="signin" />
                        <img className={style.spendingImg} src={home} alt="home" />
                        <img className={style.spendingImg} src={chart} alt="chart" />
                        <img className={style.spendingImg} src={subcategory} alt="subcategory" />
                        <img className={style.spendingImg} src={menu} alt="menu" />
                        <img className={style.spendingImg} src={newPurchase} alt="newPurchase" />
                        <img className={style.spendingImg} src={addRecurring} alt="addRecurring" />
                        <img className={style.spendingImg} src={stopRecurring} alt="stopRecurring" />
                        <img className={style.spendingImg} src={deletePurchase} alt="deletePurchase" />
                    </Carousel>
                </div>
            </section>
        )
}
