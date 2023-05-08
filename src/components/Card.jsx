export default function Card({ id, name, email }) {
  return (
    <div className=" bg-blue-300 card w-80 bg-base-100 shadow-xl m-2 hover:scale-[0.9] transition-all">
      <figure className="px-10 pt-10">
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt="robots"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
