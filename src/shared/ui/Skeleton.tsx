import clsx from "clsx";

const Skeleton = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <div
    style={{ width: width, height: height }}
    className={clsx(`bg-[#2a323f] bg-opacity-10`, [className])}
  >
    <div className="skeleton-item" />
  </div>
);

export { Skeleton };
