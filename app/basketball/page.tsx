export default function BasketballPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Basketball</h1>
      <p>
        NBA fixtures aren’t available on the free API plan right now. Soccer
        fixtures are working.
      </p>
      <p style={{ marginTop: 12 }}>
        Next step: upgrade the basketball plan or switch to a free basketball
        fixtures API.
      </p>
    </main>
  );
}
