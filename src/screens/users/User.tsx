import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h2>
        User with id {userId} is named : {users[Number(userId) - 1].name}
      </h2>
      <hr />
      <Link to={`followers`}>See Followers</Link>
      {/* /를 쓰지 않으면 상대 경로로 인식 */}
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </div>
  );
}

export default User;
