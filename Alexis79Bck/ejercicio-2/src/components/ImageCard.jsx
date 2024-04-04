export default function ImageCard({ image }) {
  return (
    <div className="flex flex-col justify-center object-fill bg-stone-100 shadow-lg rounded-2xl">
      <img className="rounded-t-2xl " src={image} />
      <p className="font-bold text-center">{image}</p>
    </div>
  );
}
