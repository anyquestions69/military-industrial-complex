import "../App.css";
export default function Header() {
  return (
    <header>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
          <div style={{ width:'48px', height:'48px', background:'linear-gradient(45deg,#ff3b3b,#ff7e44)', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'0.5rem' }}>DIC</div>
          <div>
            <h1 style={{ fontWeight:600 }}>Defense Industrial Complex</h1>
            <p style={{ fontSize:'0.75rem', color:'#9aa4ad' }}>Оборонно-промышленный комплекс</p>
          </div>
        </div>
        <nav>
          <a href="#about" style={{ marginRight:'1rem' }}>О проекте</a>
          <a href="#services" style={{ marginRight:'1rem' }}>Сервисы</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  )
}
