export default function Header() {
  return (
    <header className="header">
      <img src="/images/logo.jpeg" />
      <h1>Combat Classifieds</h1>
      <div className="search">
        <input type="search" />
        <button>Search</button>
      </div>
    </header>
  );
}
