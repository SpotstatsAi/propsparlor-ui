import PropCard from "@/components/PropCard";

const API = process.env.NEXT_PUBLIC_API_BASE;

export default async function PlayerPage({ params }) {
  const res = await fetch(`${API}/ui/player/${params.id}`, { cache: "no-cache" });
  const p = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{p.name}</h2>
      <p className="text-gray-400 mb-6">{p.team} — {p.pos}</p>

      <h3 className="text-xl font-bold mb-2">Recommended Props</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(p.recommendations).map(([type, rec]) => (
          <PropCard key={type} prop={{ type, ...rec }} />
        ))}
      </div>
    </div>
  );
}
