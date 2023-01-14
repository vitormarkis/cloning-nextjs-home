function Labels() {
  return (
    <ul className="
    flex
    justify-center
    list-none
    [&_li]:px-2
    [&_li]:py-1
    ">
        <li className="text-right"><span className="text-neutral-500">License: MTI</span></li>
        <li className="hover:bg-blue-100 rounded"><a href="/" className="text-blue-600 ">Github</a></li>
    </ul>
  );
}

export default Labels;