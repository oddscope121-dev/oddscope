import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 1000, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 800 }}>Oddscope</div>
        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <Link href="/soccer">Soccer</Link>
          <Link href="/basketball">Basketball</Link>
        </nav>
      </header>

      <h1 style={{ fontSize: 34, marginBottom: 8 }}>Global odds. Simple view.</h1>
      <p style={{ opacity: 0.8, marginBottom: 20 }}>
        Browse fixtures and open pre-match odds in one click.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        <Link href="/soccer" style={card}>
          <div style={cardTitle}>Soccer</div>
          <div style={cardText}>Fixtures + pre-match odds</div>
        </Link>

        <Link href="/basketball" style={card}>
          <div style={cardTitle}>Basketball</div>
          <div style={cardText}>NBA games + odds</div>
        </Link>

        <div style={card}>
          <div style={cardTitle}>Coming soon</div>
          <div style={cardText}>Tips, rankings, and paid picks</div>
        </div>

        <div style={card}>
          <div style={cardTitle}>Alerts</div>
          <div style={cardText}>Get notified when odds drop</div>
        </div>
      </div>

      <footer style={{ marginTop: 28, fontSize: 13, opacity: 0.7 }}>
        © {new Date().getFullYear()} Oddscope
      </footer>
    </main>
  );
}

const card: React.CSSProperties = {
  border: "1px solid #e5e5e5",
  borderRadius: 14,
  padding: 16,
  textDecoration: "none",
  color: "inherit",
  background: "white",
};

const cardTitle: React.CSSProperties = { fontWeight: 800, fontSize: 18, marginBottom: 6 };
const cardText: React.CSSProperties = { fontSize: 14, opacity: 0.8 };
