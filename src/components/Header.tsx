import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => navigate("/about");
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          {/* 사용자가 클릭하는 일반적인 네비게이션 */}
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
          {/* 폼 제출, 조건부 리다이렉트가 필요한 경우 */}
        </li>
      </ul>
    </header>
  );
}

export default Header;
