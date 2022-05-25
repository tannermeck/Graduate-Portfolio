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
import newPurchase from '../../assets/spending/newPurchase.png';
import stopRecurring from '../../assets/spending/stopRecurring.png';
import deletePurchase from '../../assets/spending/delete.png';
import subcategory from '../../assets/spending/subcategory.png';
import completed from '../../assets/solarama/completed.png';
import leaderboard from '../../assets/solarama/leaderboard.png';
import planets from '../../assets/solarama/planets.png';
import solarHome from '../../assets/solarama/solarHome.png';
import trivia from '../../assets/solarama/trivia.png';
import triviaSubmit from '../../assets/solarama/triviaSubmit.png';
import Carousel from 'nuka-carousel';
import { useEffect, useState } from 'react';
import github from '../../assets/github.png';
import whiteGithub from '../../assets/github-white.png';
import Loading from '../../components/load/Loading';

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    loader();
  }, []);

  if (loading)
    return (
      // <h1 data-text="{ Tanner }" className={style.loader}>{`{ Tanner }`}</h1>
      <Loading />
    );
  return (
    <section className={style.projectsContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>{`{ PROJECTS }`}</h1>
      </div>
      <div className={style.carouselDiv}>
        <section className={style.linkContainer}>
          <div>
            <a
              className={style.projectLink}
              href="https://alcode-campgrounds.netlify.app"
            >
              <h3 className={style.projectName}>Alcode-Campgrounds</h3>
            </a>
          </div>
          <div className={style.githubLink}>
            <a
              className={style.githubATag}
              href="https://github.com/Alcode-Campgrounds"
            >
              <img className={style.github} src={github} alt="github link" />
            </a>
          </div>
        </section>
        <Carousel width="100%" autoplay={true} autoplayInterval={6000}>
          {/* renderBottomCenterControls={({position: null})} */}
          {/* need to style bottom controls so they do not cover footer */}
          <div>
            <img className={style.carouselImg} src={alcodeHome} />
          </div>
          <div>
            <img className={style.carouselImg} src={navbar} />
          </div>
          <div>
            <img className={style.carouselImg} src={oauth} />
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
        <section className={style.linkContainer}>
          <div>
            <a
              className={style.projectLink}
              href="https://where-is-my-money-tracker.netlify.app/"
            >
              <h3 className={style.projectName}>Spending Tracker</h3>
            </a>
          </div>
          <div className={style.githubLink}>
            <a
              className={style.githubATag}
              href="https://github.com/Where-Is-My-Money-Tracker"
            >
              <img className={style.github} src={github} alt="github link" />
            </a>
          </div>
        </section>
        <Carousel autoplay={true} autoplayInterval={6000}>
          <img className={style.spendingImg} src={signin} alt="signin" />
          <img className={style.spendingImg} src={home} alt="home" />
          <img className={style.spendingImg} src={chart} alt="chart" />
          <img
            className={style.spendingImg}
            src={subcategory}
            alt="subcategory"
          />
          <img className={style.spendingImg} src={menu} alt="menu" />
          <img
            className={style.spendingImg}
            src={newPurchase}
            alt="newPurchase"
          />
          <img
            className={style.spendingImg}
            src={addRecurring}
            alt="addRecurring"
          />
          <img
            className={style.spendingImg}
            src={stopRecurring}
            alt="stopRecurring"
          />
          <img
            className={style.spendingImg}
            src={deletePurchase}
            alt="deletePurchase"
          />
        </Carousel>
      </div>
      <div className={style.solaramaDiv}>
        <section className={style.linkContainer}>
          <div>
            <a
              className={style.projectLink}
              href="https://tannermeck.github.io/project-week-solar-trivia/"
            >
              <h3 className={style.solaramaTitle}>Solarama</h3>
            </a>
          </div>
          <div className={style.githubLink}>
            <a
              className={style.githubATag}
              href="https://github.com/tannermeck/project-week-solar-trivia"
            >
              <img
                className={style.github}
                src={whiteGithub}
                alt="github link"
              />
            </a>
          </div>
        </section>

        <Carousel autoplay={true} autoplayInterval={6000}>
          <img className={style.solaramaImg} src={solarHome} alt="home page" />
          <img className={style.solaramaImg} src={planets} alt="planet links" />
          <img
            className={style.solaramaImg}
            src={trivia}
            alt="trivia question"
          />
          <img
            className={style.solaramaImg}
            src={triviaSubmit}
            alt="submit answer"
          />
          <img
            className={style.solaramaImg}
            src={completed}
            alt="completed levels"
          />
          <img
            className={style.solaramaImg}
            src={leaderboard}
            alt="leaderboard"
          />
        </Carousel>
      </div>
    </section>
  );
}
