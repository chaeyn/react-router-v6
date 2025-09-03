import { useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { userId } = useParams();
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return (
    <div>
      <h1>{nameOfMyUser}'s Followers</h1>
      <hr />
      <ul>
        {users[Number(userId) - 1].followers.map((follower) => (
          <li key={follower.id}>{follower.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Followers;
