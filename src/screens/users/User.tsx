import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  const params = useParams();
  console.log(params);
  return (
    <h2>
      User with id {userId} is named : {users[Number(userId) - 1].name}
    </h2>
  );
}

export default User;
