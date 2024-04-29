

export default function PageInfoText({ label, start, end, total }) {
  return (
    <div>
      <p className="text-sm text-zinc-800">
        Mostrando { label }  <span className="font-medium">{ start }</span> - <span className="font-medium">{ end }</span> de {" "}
        <span className="font-medium">{ total } </span>
      </p>
    </div>
  );
}
