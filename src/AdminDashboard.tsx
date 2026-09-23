import type { ReactNode } from 'react'

type IconName = 'home' | 'users' | 'stamp' | 'gift' | 'chart' | 'settings' | 'bell' | 'search' | 'more'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" /><path d="M9 21v-7h6v7" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 4.5a3 3 0 0 1 0 5.8M17.5 20a5.5 5.5 0 0 0-3-4.9" /></>,
    stamp: <><path d="M8 3h8v5a4 4 0 0 1-8 0V3Z" /><path d="M6 12h12v4H6zM4 20h16" /></>,
    gift: <><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8H8.5a2.5 2.5 0 1 1 2.5-2.5V8Zm0 0h3.5A2.5 2.5 0 1 0 13 5.5V8Z" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06-2.1 2.1-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V20h-3v-.09A1.7 1.7 0 0 0 10.7 18.35a1.7 1.7 0 0 0-1.87.34l-.06.06-2.1-2.1.06-.06A1.7 1.7 0 0 0 7.07 14.7 1.7 1.7 0 0 0 5.5 13.66H5.4v-3h.1a1.7 1.7 0 0 0 1.57-1.04 1.7 1.7 0 0 0-.34-1.87l-.06-.06 2.1-2.1.06.06a1.7 1.7 0 0 0 1.87.34 1.7 1.7 0 0 0 1.04-1.56V4.3h3v.1a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06 2.1 2.1-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.56 1.04h.1v3h-.1A1.7 1.7 0 0 0 19.4 15Z" /></>,
    bell: <><path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 22h4" /></>,
    search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
  }
  return <svg className="admin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const activity = [
  ['Nguyễn Minh Anh', 'Đã cào thẻ', 'Móc Khóa Bông', '10:42'],
  ['Trần Gia Hân', 'Đóng dấu thẻ', 'Đang chờ cào', '10:38'],
  ['Lê Hoàng Nam', 'Đã phát quà', 'Móc Khóa Bông', '10:35'],
  ['Phạm Bảo Ngọc', 'Truy cập sự kiện', 'Chưa đăng ký', '10:31'],
]

export default function AdminDashboard() {
  return (
    <main className="admin-dashboard">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/admin"><span className="admin-brand-mark">PT</span><span>TOGETHER<br /><small>EVENT ADMIN</small></span></a>
        <nav className="admin-nav" aria-label="Điều hướng quản trị">
          <a className="is-active" href="#overview"><Icon name="home" />Tổng quan</a>
          <a href="#players"><Icon name="users" />Người chơi</a>
          <a href="#stamps"><Icon name="stamp" />Đóng dấu</a>
          <a href="#rewards"><Icon name="gift" />Quà tặng</a>
          <a href="#reports"><Icon name="chart" />Báo cáo</a>
        </nav>
        <div className="admin-sidebar-bottom"><a href="#settings"><Icon name="settings" />Cài đặt</a><p>Play Together VNG<br /><span>Admin console · 2026</span></p></div>
      </aside>

      <section className="admin-content" id="overview">
        <header className="admin-topbar">
          <label className="admin-search"><Icon name="search" /><input placeholder="Tìm người chơi, SĐT, ID game..." aria-label="Tìm kiếm" /></label>
          <div className="admin-top-actions"><button className="admin-icon-button" type="button" aria-label="Thông báo"><Icon name="bell" /><b>3</b></button><div className="admin-avatar">AD</div><div className="admin-profile"><strong>Admin Together</strong><span>Event Manager</span></div></div>
        </header>

        <div className="admin-page-heading"><div><p className="admin-eyebrow">CÔNG VIÊN THÚ CƯNG ANH ĐÀO</p><h1>Chào buổi sáng, <em>Admin!</em></h1><p>Theo dõi trải nghiệm người chơi và quà tặng trong hôm nay.</p></div><button className="admin-date" type="button">▣ &nbsp; Hôm nay, 23/09/2026</button></div>

        <section className="admin-stats" aria-label="Thống kê sự kiện">
          <article className="admin-stat-card"><div className="admin-stat-icon pink"><Icon name="users" /></div><p>Lượt truy cập</p><h2>1,284</h2><span className="admin-positive">↑ 12.5% <small>so với hôm qua</small></span></article>
          <article className="admin-stat-card"><div className="admin-stat-icon purple"><Icon name="stamp" /></div><p>Đã đóng dấu</p><h2>867</h2><span className="admin-positive">67.5% <small>tỷ lệ chuyển đổi</small></span></article>
          <article className="admin-stat-card"><div className="admin-stat-icon orange"><Icon name="chart" /></div><p>Đã cào thẻ</p><h2>621</h2><span className="admin-positive">71.6% <small>từ lượt đóng dấu</small></span></article>
          <article className="admin-stat-card"><div className="admin-stat-icon rose"><Icon name="gift" /></div><p>Quà đã phát</p><h2>586</h2><span className="admin-stock">Còn 414 quà</span></article>
        </section>

        <section className="admin-grid">
          <article className="admin-panel admin-chart-panel" id="reports"><div className="admin-panel-title"><div><p>HIỆU SUẤT SỰ KIỆN</p><h2>Lượt tham gia theo giờ</h2></div><button type="button">Hôm nay ▾</button></div><div className="admin-chart"><div className="admin-chart-y"><span>300</span><span>200</span><span>100</span><span>0</span></div><div className="admin-chart-area"><svg viewBox="0 0 640 220" preserveAspectRatio="none" aria-label="Biểu đồ lượt tham gia"><defs><linearGradient id="pinkArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#ef2b61" stopOpacity=".32" /><stop offset="1" stopColor="#ef2b61" stopOpacity="0" /></linearGradient></defs><path d="M0 185 L90 165 L180 118 L270 135 L360 72 L450 92 L540 46 L640 24 L640 220 L0 220Z" fill="url(#pinkArea)" /><path d="M0 185 L90 165 L180 118 L270 135 L360 72 L450 92 L540 46 L640 24" fill="none" stroke="#ef2b61" strokeWidth="4" /><g fill="#fff" stroke="#ef2b61" strokeWidth="4"><circle cx="0" cy="185" r="5" /><circle cx="90" cy="165" r="5" /><circle cx="180" cy="118" r="5" /><circle cx="270" cy="135" r="5" /><circle cx="360" cy="72" r="5" /><circle cx="450" cy="92" r="5" /><circle cx="540" cy="46" r="5" /><circle cx="640" cy="24" r="5" /></g></svg><div className="admin-chart-x"><span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span></div></div></div></article>
          <article className="admin-panel admin-reward-panel" id="rewards"><div className="admin-panel-title"><div><p>QUẢN LÝ QUÀ</p><h2>Tồn kho quà tặng</h2></div><button type="button"><Icon name="more" /></button></div><div className="admin-reward-item"><img src="/event-assets/mockhoa.jpg" alt="Móc Khóa Bông" /><div><strong>Móc Khóa Bông</strong><span>586 đã phát / 1,000 tổng</span><div className="admin-progress"><i style={{ width: '58.6%' }} /></div></div><b>414</b></div><button className="admin-outline-button" type="button">Quản lý quà tặng →</button></article>
          <article className="admin-panel admin-table-panel" id="players"><div className="admin-panel-title"><div><p>HOẠT ĐỘNG GẦN ĐÂY</p><h2>Người chơi mới nhất</h2></div><button className="admin-link" type="button">Xem tất cả</button></div><div className="admin-table-wrap"><table><thead><tr><th>Người chơi</th><th>Hoạt động</th><th>Trạng thái</th><th>Thời gian</th></tr></thead><tbody>{activity.map(row => <tr key={row[0]}><td><span className="admin-table-avatar">{row[0].split(' ').slice(-1)[0][0]}</span>{row[0]}</td><td>{row[1]}</td><td><span className={`admin-status ${row[2] === 'Móc Khóa Bông' ? 'is-success' : ''}`}>{row[2]}</span></td><td>{row[3]}</td></tr>)}</tbody></table></div></article>
          <article className="admin-panel admin-actions"><div className="admin-panel-title"><div><p>THAO TÁC NHANH</p><h2>Điều hành sự kiện</h2></div></div><button className="admin-action pink-action"><Icon name="gift" />Thêm quà tặng<span>→</span></button><button className="admin-action lilac-action"><Icon name="users" />Xem người chơi<span>→</span></button><button className="admin-action mint-action"><Icon name="chart" />Xuất báo cáo<span>→</span></button></article>
        </section>
      </section>
    </main>
  )
}
