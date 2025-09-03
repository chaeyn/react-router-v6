import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

export default function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.get("geo")); // get의 값
  // console.log(readSearchParams.has("geo")); // geo의 존재여부
  setTimeout(() => {
    setSearchParams({ day: "today", tomorrow: "123" });
  }, 3000);
  return (
    <h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </h1>
  );
}
