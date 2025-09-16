import "../App.css";
export default function PanelCard({ title, value, hint }) {
  return (
    <div className="panel-card">
      <div style={{ fontWeight:600, color:'#8fe7c0' }}>{title}</div>
      <div style={{ fontSize:'0.75rem', color:'#9aa4ad', marginTop:'0.25rem' }}>{hint}</div>
      <div style={{ marginTop:'0.5rem', fontWeight:700 }}>{value}</div>
    </div>
  )
}
