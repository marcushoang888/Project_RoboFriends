import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <div className="flex flex-wrap justify-center">
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          email={robot.email}
          name={robot.name}
        />
      ))}
    </div>
  );
}
