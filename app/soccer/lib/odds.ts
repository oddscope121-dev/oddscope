import { unstable_cache } from "next/cache";

async function fetchHasOdds(fixtureId: number) {
  const key = process.env.APISPORTS_KEY;
  if (!key) return false;

  const res = await fetch(
    `https://v3.football.api-sports.io/odds?fixture=${fixtureId}`,
    {
      headers: { "x-apisports-key": key },
      next: { revalidate: 300 },
    }
  );

  const data = await res.json();
  return Array.isArray(data?.response) && data.response.length > 0;
}

export const hasOddsCached = unstable_cache(
  async (fixtureId: number) => fetchHasOdds(fixtureId),
  (fixtureId: number) => [`has-odds-${fixtureId}`],
  { revalidate: 300 }
);
