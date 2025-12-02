import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link
      href={`/game/${game.id}`}
      className="block bg-[#15171C] p-4 rounded-lg border border-gray-700"
    >
      <p className="text-lg font-semibold">
        {game.away} @ {game.home}
      </p>
      <p className="text-sm text-gray-400 mt-1">{game.time}</p>
    </Link>
  );
}
