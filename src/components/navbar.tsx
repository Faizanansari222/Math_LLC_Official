import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          <div className={``}>
            {isScrolling ? (
              <Link href={"/"}>
                <Image
                  width={150}
                  height={150}
                  src={require("../assets/Math LLC main logo 1@300x-8.png")}
                  alt={""}
                />
              </Link>
            ) : (
              <Link href={"/"}>
                <Image
                  width={150}
                  height={150}
                  src={require("../assets/Math-LLC-WHT@300x-8.png")}
                  alt={""}
                />
              </Link>
            )}
          </div>
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-[#103c6e]" : "text-white"
          }`}
        >
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link href="/about">About Us</Link>
          </NavItem>
          <NavItem>
            <Link href="/services">Services</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">Contact Us</Link>
          </NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a
            href="https://www.linkedin.com/company/mathllc?trk=public_post_feed-actor-name"
            target="_blank "
          >
            <IconButton
              variant="text"
              className={
                isScrolling ? "text-[#3ab4e4] hover:bg-white" : "text-white"
              }
              size="sm"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/mathllcs/" target="_blank">
            <IconButton
              variant="text"
              className={
                isScrolling ? "text-[#3ab4e4] hover:bg-white" : "text-white"
              }
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>

          <IconButton
            variant="text"
            className={
              isScrolling ? "text-[#3ab4e4] hover:bg-white " : "text-white"
            }
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="#">
            <Button
              className={
                isScrolling
                  ? "bg-[#b3201d] flex items-center gap-2 justify-center"
                  : "bg-white text-[#103c6e] flex items-center gap-2 justify-center"
              }
              size="sm"
            >
              Profile{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      fill="currentColor"
                      fill-opacity="0"
                      stroke-dasharray="20"
                      stroke-dashoffset="20"
                      d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                    >
                      <animate
                        attributeName="d"
                        begin="0.5s"
                        dur="1.5s"
                        repeatCount="indefinite"
                        values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                      />
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.7s"
                        dur="0.5s"
                        values="0;1"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="20;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="14"
                      stroke-dashoffset="14"
                      d="M6 19h12"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.2s"
                        values="14;0"
                      />
                    </path>
                  </g>
                </svg>
              </span>
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "#0c406e" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-[#103c6e]">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Services</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Contact Us
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-linkedin text-base text-[#39b3e3]" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base text-[#39b3e3]" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base text-[#39b3e3]" />
            </IconButton>
            <a href="#">
              <Button
                className={
                  isScrolling
                    ? "bg-[#b3201d] flex items-center gap-2 justify-center"
                    : "bg-[#b3201d] text-white flex items-center gap-2 justify-center"
                }
                size="sm"
              >
                Profile{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        fill="currentColor"
                        fill-opacity="0"
                        stroke-dasharray="20"
                        stroke-dashoffset="20"
                        d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                      >
                        <animate
                          attributeName="d"
                          begin="0.5s"
                          dur="1.5s"
                          repeatCount="indefinite"
                          values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                        />
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="0.7s"
                          dur="0.5s"
                          values="0;1"
                        />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="20;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M6 19h12"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.5s"
                          dur="0.2s"
                          values="14;0"
                        />
                      </path>
                    </g>
                  </svg>
                </span>
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
