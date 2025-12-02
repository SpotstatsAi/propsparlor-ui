export default function GameCard({ game }) {
  return (
    <a
      href={`/game/${game.id}`}
      className="block bg-[#15171C] p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition"
    >
      <p className="text-lg font-semibold">
        {game.away} @ {game.home}
      </p>
      <p className="text-sm text-gray-400 mt-1">{game.time}</p>
    </a>
  );
}
