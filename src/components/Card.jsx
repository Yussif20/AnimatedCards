/* eslint-disable react/prop-types */
const Card = ({ id, title, description, date, color, img, alt }) => {
  return (
    <div key={id} className="flex flex-col gap-2 bg-white rounded-md">
      <img
        src={img}
        alt={alt}
        className="w-[400px] h-[300px] rounded-s-md rounded-e-md"
      />
      <div className="card-text p-4 flex flex-col gap-2">
        <h3 className={color + " font-semibold uppercase"}>{date}</h3>
        <h1 className="font-bold text-5xl mb-4">{title}</h1>
        <p className="text-gray-500 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
