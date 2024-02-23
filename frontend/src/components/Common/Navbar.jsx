import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Contacts", path: "/Contact" },
    { link: "Plan", path: "about" },
    { link: "News", path: "product" },
    { link: "Donations", path: "/Donations" },
  ];
  return (
    <div className="bg-primary text-x1 container mx-auto  md:px-14 p-1 max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex space-x-14 items-center pl-20">
          <ul className="md:flex space-x-16 first:font-medium hidden text-white">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-yellow-200">
                {link}
              </a>
            ))}
          </ul>
        </div>

        <div className="items-center">
          <>
            <RouterLink to="/Login">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-black rounded-lg group 
          bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none "
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                  Sign In
                </span>
              </button>
            </RouterLink>
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow"
            >
              <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Sign In
                  </Typography>
                  <h1></h1>
                  <Typography
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                  >
                    Enter your email and password to Sign In.
                  </Typography>
                  <Typography className="-mb-2" variant="h6">
                    Your Email
                  </Typography>
                  <Input label="Email" size="lg" />
                  <Typography className="-mb-2" variant="h6">
                    Your Password
                  </Typography>
                  <Input label="Password" size="lg" />
                  <div className="-ml-2.5 -mt-3">
                    <Checkbox label="Remember Me" />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                  </Button>
                  <Typography
                    variant="small"
                    className="mt-4 flex justify-center"
                  >
                    Don&apos;t have an account?
                    <Typography
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue-gray"
                      className="ml-1 font-bold"
                      onClick={handleOpen}
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </CardFooter>
              </Card>
            </Dialog>
          </>
        </div>

        {/* menu button for small devices-mobile */}

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-NeutralDGrey focus:outline-none focus:test-gray-500 "
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
      {/* Items for mobile nav links */}
      <div
        className={`space-y-2 px-4 mt-4 mx-4 rounded-xl py-7 bg-secondary ${
          isMenuOpen ? "block fixed right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            className="block text-black 
                             hover:text-white first:font-medium"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
