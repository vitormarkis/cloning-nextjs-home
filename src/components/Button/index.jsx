export default function Button({ children, outlined, big }) {
  const cl_classic = "border-blue-600 bg-blue-600 font-medium text-white ";
  const cl_outlined = "border-neutral-300 bg-white text-neutral-500";

  const cl_regular = "rounded-md border text-sm px-4 py-2";
  const cl_big = "rounded-lg px-14 text-base rounded-md px-12 py-3";

  const cl_classic_regular =
    "hover:bg-white hover:border-blue-600 hover:border hover:text-blue-600";
  const cl_outlined_big = "hover:border-black";

  const cl_big_classic = "shadow-blue-600/50 shadow-lg"
  const cl_big_outlined = "shadow-black/20 shadow-lg"

  const itsTrait = (() => {
      if(!big && outlined) return cl_outlined_big
      if(!big && !outlined) return cl_classic_regular
      if(big && outlined) return cl_big_outlined
      if(big && !outlined) return cl_big_classic
      return ''
  })()

  const itsStyle = outlined ? cl_outlined : cl_classic;
  const itsSize = big ? cl_big : cl_regular;

  return (
    <button className={`${itsSize} ${itsStyle} ${itsTrait}`}>{children}</button>
  );
}
