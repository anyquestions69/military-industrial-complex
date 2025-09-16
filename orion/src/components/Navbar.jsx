import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>ОРИОН</h1>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/about">О предприятии</Link>
        <Link to="/products">Продукция</Link>
        <Link to="/news">Новости</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </nav>
  );
}
