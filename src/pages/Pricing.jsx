// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

export default function Product() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>Just ₹199/month.</h2>
          <p>
            Plan, track, and relive your travels. Record your route
            automatically, keeping your phone in your pocket and eyes on the
            world.
          </p>
        </div>
      </section>
    </main>
  );
}
