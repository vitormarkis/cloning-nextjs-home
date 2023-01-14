function ContainerTitle({ title, text }) {
  return (
    <div className="mt-8 mb-12 flex flex-col gap-5">
      <h1 className="text-3xl text-center font-bold tracking-tight">{title}</h1>
      <p className="text-neutral-500 text-base text-center">{text}</p>
    </div>
  );
}

export default ContainerTitle;
