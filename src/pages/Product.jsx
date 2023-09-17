import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
           <div>
          <h2>About TravelTrack</h2>
          <p>
            Track My Journey app will track and save every trip you make,
            including daily jogging, biking trip, holiday road trip, or hike. It
            is perfect to track driving too.
          </p>
        </div>
      </section>
    </main>
  );
}
