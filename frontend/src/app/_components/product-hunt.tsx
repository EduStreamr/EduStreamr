import Link from "next/link";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export const ProductHunt = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) => {
  return (
    <Link
      href="https://www.producthunt.com/posts/edustreamr?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-edustreamr"
      target="_blank"
      className={className}
      {...props}
    >
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=953098&theme=light&t=1744629879532"
        alt="EduStreamr - Decentralized&#0032;Tipping&#0032;for&#0032;Streamers&#0032;—&#0032;Instant&#0044;&#0032;Low&#0032;Fees | Product Hunt"
        width={250}
        height={54}
      />
    </Link>
  );
};
