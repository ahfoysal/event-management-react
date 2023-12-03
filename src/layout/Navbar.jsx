import {
  Navbar,
  NavbarContent,
  Button,
  Input,
  useDisclosure,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Confetti from "react-confetti";

import { Link, NavLink } from "react-router-dom";
import { SearchIcon } from "../assets/SearchIcon";
import SearchModal from "../components/navbar/SearchModal";
import { ModeToggle } from "../components/ModeToggle";
import { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthContextProvider";
import AuthDropDown from "../components/navbar/AuthDropDown";
import { motion } from "framer-motion";

export default function Header() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      isBordered={false}
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/70 backdrop-blur-sm fixed top-0 "
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-[#FFB457]",
          "data-[active=true]:text-[#FFB457]",
          "data-[active=false]:hover:text-[#FFB457]",
        ],
      }}
    >
      <Confetti
        gravity={0.03}
        opacity={0.2}
        numberOfPieces={30}
        width={1100}
        height={60}
      />

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className=" flex gap-4" justify="start">
        <motion.div initial="hidden" animate="visible" variants={logoVariant}>
          <Link to={"/"}>
            <motion.h1 className=" animate-text bg-gradient-to-r  via-red-500 font-black inline  from-[#FF705B] to-[#FFB457] text-2xl lg:text-3xl bg-clip-text text-transparent  font-lilita">
              Eventify
            </motion.h1>
          </Link>
        </motion.div>
      </NavbarContent>
      <motion.div initial="hidden" animate="visible" variants={menuVariant}>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <motion.div variants={childVariant}>
            <NavLink to="/">
              {({ isActive }) => (
                <NavbarItem
                  className="hover:text-[#FFB457]"
                  isActive={isActive}
                >
                  {" "}
                  Home{" "}
                </NavbarItem>
              )}
            </NavLink>
          </motion.div>
          <motion.div variants={childVariant}>
            <NavLink to="/services" aria-current="page">
              {({ isActive }) => (
                <NavbarItem
                  className="hover:text-[#FFB457]"
                  isActive={isActive}
                >
                  {" "}
                  Services{" "}
                </NavbarItem>
              )}
            </NavLink>
          </motion.div>
          <motion.div variants={childVariant}>
            <NavLink to="/events" aria-current="page">
              {({ isActive }) => (
                <NavbarItem
                  className="hover:text-[#FFB457]"
                  isActive={isActive}
                >
                  {" "}
                  Events{" "}
                </NavbarItem>
              )}
            </NavLink>
          </motion.div>
          <motion.div variants={childVariant}>
            <NavLink to="/about">
              {({ isActive }) => (
                <NavbarItem
                  className="hover:text-[#FFB457]"
                  isActive={isActive}
                >
                  {" "}
                  About Us{" "}
                </NavbarItem>
              )}
            </NavLink>
          </motion.div>
        </NavbarContent>
      </motion.div>
      <NavbarContent as="div" className="items-center" justify="end">
        <SearchModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <Input
          onClick={onOpen}
          classNames={{
            base: "hidden md:block max-w-full sm:max-w-[10rem] h-10 ",
            mainWrapper: "h-full cursor-pointer",
            input: "text-small cursor-pointer",
            inputWrapper:
              "h-full cursor-pointer font-normal text-default-500  bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search event..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {user ? (
          <AuthDropDown user={user} logout={logout} />
        ) : (
          <div>
            <Button
              as={Link}
              to={"/login"}
              color="default"
              prevent
              variant="bordered"
            >
              Login
            </Button>
          </div>
        )}
        <div className=" hidden md:block">
          <ModeToggle />
        </div>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink to="/">
            {({ isActive }) => (
              <NavbarItem
                className="hover:text-[#FFB457] h-fit mb-4"
                isActive={isActive}
              >
                {" "}
                Home{" "}
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/events" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#FFB457] h-fit mb-4"
                isActive={isActive}
              >
                {" "}
                Events{" "}
              </NavbarItem>
            )}
          </NavLink>
          <NavLink to="/services" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#FFB457] h-fit mb-4"
                isActive={isActive}
              >
                {" "}
                Services{" "}
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/about">
            {({ isActive }) => (
              <NavbarItem
                className="hover:text-[#FFB457] h-fit mb-4"
                isActive={isActive}
              >
                {" "}
                About Us{" "}
              </NavbarItem>
            )}
          </NavLink>
          <ModeToggle />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

const logoVariant = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
};
const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};
