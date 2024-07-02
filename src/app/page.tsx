import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-bootstrap.scss";
import { MainPage } from "./components/mainPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
