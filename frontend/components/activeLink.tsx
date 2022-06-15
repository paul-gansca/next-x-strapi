import { useRouter } from "next/router";
import NextLink from "next/link";

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const color = router.pathname === href ? "text-orange-500" : "text-gray-900";
  return (
    <span className={`${color}`}>
      <NextLink href={href}>{children}</NextLink>
    </span>
  );
}
