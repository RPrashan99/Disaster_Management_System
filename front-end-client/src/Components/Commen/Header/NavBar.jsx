import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {signOutSuccess} from "../../../redux/user/userSlice";

const NavBar = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch= useDispatch();


  const handleLogout = () => {
    try{
      dispatch(signOutSuccess());
      navigate("/Login");
    }
    catch(err){
      console.log(err);
    }

  }


  const handleClick = () => {    
    if(currentUser=== null){
      navigate("/Login");
    } else {
      navigate("/Emargancy");
    }
  }
  
  return (
    <Navbar className="bg-primary">
      
        <Button className="animate-blinkingBg text-white font-semibold " type="button" onClick={handleClick}>
          Emargancy
        </Button>
      

      <div className="flex gap-2 md:order-2">
        <div className="text-white border hover:border-white border-transparent  rounded-full p-2 transition duration-300 mr-5">
          <IoNotifications className="w-6 h-6 cursor-pointer" />
        </div>

        {currentUser ? (
          <>
          <h1 className="text-center items-center justify-center text-white font-semibold text-lg p-1">Hi,{currentUser.userName}</h1>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              
              <span className="block text-sm font-medium truncate">
                @{currentUser.email}
              </span>
              <Link to={"/UserProfile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />

              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Header>
          </Dropdown>
          </>
        ) : (
          <Link to="/Login">
            <Button gradientMonochrome="info">Sign In</Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className="text-white hover:text-yellow-200 text-base font-semibold "
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Contacts"} as={"div"}>
          <Link
            to="/Contacts"
            className="text-white hover:text-yellow-200 text-base font-semibold "
          >
            Contacts
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Plan"} as={"div"}>
          <Link
            to="/Informations"
            className="text-white hover:text-yellow-200 text-base font-semibold "
          >
            Informations
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/News"} as={"div"}>
          <Link
            to="/News"
            className="text-white hover:text-yellow-200 text-base font-semibold "
          >
            News
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Donations"} as={"div"}>
          <Link
            to="/Donations"
            className="text-white hover:text-yellow-200 text-base font-semibold "
          >
            Donations
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
