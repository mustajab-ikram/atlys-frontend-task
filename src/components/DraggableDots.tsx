import React from "react";

interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const DraggableDots: React.FC<SVGProps> = ({
  fill = "#000",
  width = "800px",
  height = "800px",
  ...props
}) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style type="text/css">{`.st0 { fill: none; }`}</style>
      <title>draggable</title>
      <circle cx="8" cy="10" r="2" />
      <circle cx="16" cy="10" r="2" />
      <circle cx="24" cy="10" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="24" cy="20" r="2" />
      <rect className="st0" width="32" height="32" />
    </svg>
  );
};

export default DraggableDots;
