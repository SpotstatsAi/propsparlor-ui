import { API_BASE } from "@/lib/api";

const res = await fetch(`${API_BASE}/game/${params.id}`, {
  next: { revalidate: 60 },
});

export default async function GamePage({ params }) {
  const res = await fetch(`${API}/ui/game/${params.id}`, { cache: "no-cache" });
  const game = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        {game.away} @ {game.home}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {game.players.map((p) => (
          <PlayerCard key={p.id} player={p} />
        ))}
      </div>
    </div>
  );
}
