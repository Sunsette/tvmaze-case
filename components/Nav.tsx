import cn from "classnames";

interface NavProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Nav({ children, className, as }: NavProps) {
  const Component = as ?? "div";
  const gridClassName = cn(
    "grid",
    className,
    "grid-cols-1 gap-x-2 gap-y-4",
    "sm:grid-cols-4 sm:gap-x-4 sm:gap-y-4",
    "lg:grid-cols-4 lg:gap-x-4"
  );

  return <Component className={gridClassName}>{children}</Component>;
}
