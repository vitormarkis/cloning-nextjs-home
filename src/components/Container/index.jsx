export default function Container() {
  return (
    <div className="flex w-full p-6 gap-10 mt-28 mb-8">
      <div id="container-img" className="grow-0">
        <img
          src="https://picsum.photos/320/320"
          className="rounded-xl shadow-lg shadow-slate-800/50"
          alt=""
        />
      </div>
      <div className="flex w-full items-center">
        <div
          id="container-text"
          className="w-full
                [&_*]:mb-2
                "
        >
          <h1 className="text-3xl text-black font-extrabold text-center">
            O cara é o mais pica no que faz!
          </h1>
          <p className="text-lg leading-6 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            architecto, animi vero illum adipisci excepturi voluptatem nam
            accusamus quae natus totam nihil ea at dolorum, accusantium dolores
            delectus odit non?
          </p>
        </div>
      </div>
    </div>
  );
}
