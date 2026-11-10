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
  `relative flex items-center transition-colors ${
    isActive
      ? "text-[color:var(--accent)] before:absolute before:-left-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[color:var(--accent)]"
      : "text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
  } ${className}`
}

    />
  );
}