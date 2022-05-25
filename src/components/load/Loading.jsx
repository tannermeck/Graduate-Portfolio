import style from './loading.css';

export default function Loading() {
  return (
    <section className={style.load}>
      <h1 className={style.loadh1}>{`{ Tanner Meck }`}</h1>
      <div className={style.loading}>Load&nbsp;ng</div>
    </section>
  );
}
