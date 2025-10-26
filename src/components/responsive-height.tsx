import { PropsWithChildren, useId } from "react";

type Props = PropsWithChildren<{
  baseDVH: number;
  lgDVH: number;
  className?: string;
  style?: React.CSSProperties;
}>;

export function ResponsiveHeight({
  baseDVH,
  lgDVH,
  className,
  style,
  children,
}: Props) {
  const id = useId(); // unique per instance
  const attr = `rh-${id}`;

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          [data-rh="${attr}"] { height: ${lgDVH}dvh; }
        }
      `}</style>
      <div
        data-rh={attr}
        style={{ height: `${baseDVH}dvh`, ...style }}
        className={className}
      >
        {children}
      </div>
    </>
  );
}
