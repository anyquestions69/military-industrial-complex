export default function Contacts() {
  return (
    <div className="page">
      <h2>Контакты</h2>
      <p>Адрес: Москва, Ленинградский проспект, д. 45</p>
      <p>Телефон: +7 (495) 123-45-67</p>
      <p>Email: info@orion.mil.ru</p>

      <form className="contact-form">
        <h3>Форма обратной связи</h3>
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Сообщение" rows="4"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
