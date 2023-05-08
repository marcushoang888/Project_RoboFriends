import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots } from "../robots";

export default function App() {
  const [filteredRobots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  if (!filteredRobots.length) {
    return <h1>Loading...</h1>;
  }
  function handleSearchChange(e) {
    const searchField = e.target.value;
    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setRobots(filtered);
  }
  return (
    <div className="text-center flex items-center flex-col ">
      <h1 className=" font-bold  text-white text-6xl m-5">RoboFriends</h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
