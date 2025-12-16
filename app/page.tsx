export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Oddscope</h1>
      <p style={{ marginBottom: 16 }}>
        Soccer + Basketball fixtures and pre-match odds.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <a href="/soccer">Soccer</a>
        <a href="/basketball">Basketball</a>
      </div>
    </main>
  );
}
