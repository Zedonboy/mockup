export default function Link({ active, label }) {
  return (
    <a className={`flex flex-col items-center ${active ? "text-yellow-400" : "text-gray-400"}`}>
      <p>{label}</p>
      {active ? (
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
      ) : null}
    </a>
  );
}
