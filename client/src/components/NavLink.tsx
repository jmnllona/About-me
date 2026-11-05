
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

interface NavLinkProps extends Omit<RouterNavLinkProps, "className"> {
  className?: string;
}

export default function NavLink({
  className = "",
  ...props
}: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      
className={({ isActive }) =>
  `relative flex items-center gap-1.5 transition-colors ${
    isActive
      ? "text-blue-300 before:absolute before:-left-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-300"
      : "text-stone-400 hover:text-stone-100"
  } ${className}`
}

    />
  );
}
