export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="footer-logo">
          <h2>ОРИОН</h2>
          <p>Оборонно-промышленный <br></br>
            комплекс России</p>
        </div>

        {/* Колонка 1: О компании */}
        <div className="footer-column">
          <h3>О компании</h3>
          <a href="#">История</a>
          <a href="#">Миссия</a>
          <a href="#">Структура</a>
          <a href="#">Руководство</a>
        </div>

        {/* Колонка 2: Продукция */}
        <div className="footer-column">
          <h3>Продукция</h3>
          <a href="#">Танки</a>
          <a href="#">БПЛА</a>
          <a href="#">Ракеты</a>
          <a href="#">Системы ПВО</a>
        </div>

        {/* Колонка 3: Новости */}
        <div className="footer-column">
          <h3>Новости</h3>
          <a href="#">События</a>
          <a href="#">Пресс-релизы</a>
          <a href="#">Статьи</a>
          <a href="#">Медиа</a>
        </div>

        {/* Колонка 4: Контакты */}
        <div className="footer-column">
          <h3>Контакты</h3>
          <p>Москва, Ленинградский проспект, д. 45</p>
          <p>Тел: +7 (495) 123-45-67</p>
          <p>Email: <a href="mailto:info@orion.mil.ru">info@orion.mil.ru</a></p>
          <a href="#">Карта сайта</a>
        </div>
      </div>

      {/* Нижняя строка с копирайтом */}
      <div className="footer-bottom">
        © 2025 Концерн «ОРИОН». Все права защищены.
      </div>
    </footer>
  );
}
