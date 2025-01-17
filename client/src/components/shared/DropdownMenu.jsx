
import profile from '../../assets/icons/profile.png'
import { Link } from "react-router-dom";
import useAuth from '../../hooks/getAuth';
const DropdownMenu = () => {
  const { user,logout } = useAuth();
  console.log('dropdown',user);
  return (
    <main>
      <div className="dropdown dropdown-end cursor-pointer">
        <div tabIndex={0} >
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
                className="w-12"
              src={user?.photoURL || profile}
            />
          </div>
        </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
            <li>
          <Link className="font-bold">{user?.displayName}</Link>
        </li>
        <li>
          <Link className="font-bold" onClick={logout}>logout</Link>
        </li>
        </ul>
      </div>
    </main>
  );
};

export default DropdownMenu;