import { hasOddsCached } from "./lib/odds";

export const revalidate = 300;

type Fixture = {
  fixture: { id: number; date: string };
  teams: { home: { name: string }; away: { name: string } };
  league: { name: string };
};

export default async function SoccerPage() {
  const key = process.env.APISPORTS_KEY;

  if (!key) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Soccer</h1>
        <p>Missing APISPORTS_KEY</p>
      </main>
    );
  }

  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=39&season=2023",
    {
      headers: { "x-apisports-key": key },
      next: { revalidate: 300 },
    }
  );

  const data = await res.json();
  const fixtures: Fixture[] = data?.response ?? [];
  const list = fixtures.slice(0, 20);

  // ✅ Cached odds check (faster on refresh)
  const oddsFlags = await Promise.all(
    list.map(async (f) => [f.fixture.id, await hasOddsCached(f.fixture.id)] as const)
  );
  const oddsMap = new Map<number, boolean>(oddsFlags);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Soccer</h1>

      {list.length === 0 ? (
        <p>No fixtures available.</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {list.map((f) => {
            const ok = oddsMap.get(f.fixture.id) ?? false;

            return (
              <li key={f.fixture.id} style={{ marginBottom: 14 }}>
                <div style={{ fontWeight: 600 }}>
                  {f.teams.home.name} vs {f.teams.away.name}
                </div>

                <div style={{ fontSize: 13, opacity: 0.8 }}>
                  {f.league.name} • {new Date(f.fixture.date).toLocaleString()}
                </div>

                <div style={{ fontSize: 13, marginTop: 4 }}>
                  {ok ? (
                    <Link href={`/soccer/${f.fixture.id}/odds`}>Odds</Link>
                  ) : (
                    <span style={{ opacity: 0.75 }}>No odds yet</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
