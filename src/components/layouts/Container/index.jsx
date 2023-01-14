import { useEffect, useState } from "react";

export default function Container() {
  const [pageinfo, setPageinfo] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/container");
      const data = await res.json();
      setPageinfo(data);
      console.log(pageinfo.title)
    })();
  }, []);
  
  return (
    <div className="flex flex-col items-center sm:flex-row w-full p-6 gap-10 mt-28 mb-8">
      <div id="container-img" className="grow-0">
        <img
          src={pageinfo.image_url}
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
            {pageinfo.title}
          </h1>
          <p className="text-lg leading-6 text-slate-500">
            {pageinfo.text}
          </p>
        </div>
      </div>
    </div>
  );
}
