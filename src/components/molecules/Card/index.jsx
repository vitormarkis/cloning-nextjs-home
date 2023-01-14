function Card(card) {
  console.log(card)
  return (
    <div
      className="border border-neutral-200 rounded-md p-5
      basis-4/13
      grow
    [&>*]:mb-4
    hover:cursor-pointer
    hover:border-white
    hover:shadow-xl
    hover:shadow-neutral-500/20
    [&:hover>a]:underline
    "
    >
      <h1 className="font-semibold text-lg">{card.title}</h1>
      <p className="text-sm">{card.text}</p>
      <a href="/" className="text-cyan-500 text-sm">
        Documentation
      </a>
    </div>
  );
}

export default Card;
