export default function ImageCard({ image }) {
  return (
    <div className="mx-auto p-2 bg-stone-100 shadow-lg rounded-b-2xl">
      <img className="h-auto text-center max-w-full" src={image} />
      <p>{image}</p>
    </div>
  );
}
