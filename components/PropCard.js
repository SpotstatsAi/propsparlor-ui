const colors = {
  green: "text-green-400 border-green-500",
  yellow: "text-yellow-300 border-yellow-500",
  red: "text-red-400 border-red-500",
};

export default function PropCard({ prop }) {
  const rating = prop.rating || "yellow";

  return (
    <div className={`p-4 rounded-lg border ${colors[rating]} bg-[#131419]`}>
      <p className="font-bold">{prop.player || prop.type}</p>
      <p className="text-sm text-gray-400">
        Line: {prop.line ?? "N/A"}
      </p>
      <p className="text-sm">
        Confidence: {(prop.confidence * 100).toFixed(0)}%
      </p>
    </div>
  );
}
