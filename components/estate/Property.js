export default function Property() {
  return (
    <section className="shadow-lg flex-shrink-0 w-full  rounded p-6">
      <figure className="w-full bg-gray-100 h-[15rem] overflow-hidden"></figure>
      <section className="mt-4 flex flex-col space-y-1">
        <p className="font-bold text-lg">Modern House</p>
        <p className="text-gray-600 line-clamp-1 font-light">
          2 bedroom flat, with automatic bullshit
        </p>
        <p className="text-purple-600 text-xl font-bold">N150,000/yr</p>
      </section>
    </section>
  );
}
