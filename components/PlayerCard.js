export default function PlayerCard({ player }) {
  return (
    <a
      href={`/player/${player.id}`}
      className="block bg-[#15171C] p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition"
    >
      <p className="font-bold">{player.name}</p>
      <p className="text-sm text-gray-400">{player.team}</p>

      {player.recommendations && (
        <p className="text-green-400 mt-2">
          {Object.keys(player.recommendations).length} green props
        </p>
      )}
    </a>
  );
}
