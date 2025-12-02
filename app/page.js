import GameCard from "@/components/GameCard";
import PropCard from "@/components/PropCard";

const API = process.env.NEXT_PUBLIC_API_BASE;

export default async function Home() {
  const res = await fetch(`${API}/ui/home`, { cache: "no-cache" });
  const data = await res.json();

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Today’s Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Top Green Props</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.top_green_props.map((p, i) => (
            <PropCard key={i} prop={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
