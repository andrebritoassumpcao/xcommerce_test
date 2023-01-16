import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import styles from "../src/app/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.top_header}>
        <Image src={Logo} width="74" height="20" alt="logo" />
        <Image src={Avatar} width="40" height="40" alt="avatar" />
      </div>
      <div className={styles.mid_header}>
        <h1>Produtos</h1>
        <input
          className={styles.input_header}
          type="text"
          name="busca"
          value="🔎 Buscar por produtos"
        />
      </div>
      <div className={styles.bottom_header}>
        <div>
          <button name="todos">Todos</button>
          <button name="favoritos">Favoritos</button>
        </div>
        <button name="novo">Criar novo</button>
      </div>
    </header>
  );
}
