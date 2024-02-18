import Card from "./Card";
import cards from "./Data.js";

const CardsContainer = () => {
  return (
    <div className="flex gap-6">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            img={card.img}
            alt={card.alt}
            color={card.color}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
