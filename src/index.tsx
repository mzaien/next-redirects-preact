import { useEffect } from "preact/hooks";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  asPath?: string;
  fallBack?: string;
  condition?: boolean;
  shallow?: boolean;
}

export function Redirects({
  href,
  condition,
  fallBack,
  shallow,
  asPath,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      condition !== undefined
        ? (router.prefetch(condition === true ? href : `${fallBack}`),
          router.push(
            condition === true ? href : fallBack ? fallBack : router.asPath,
            asPath,
            { shallow: shallow !== undefined ? shallow : false }
          ))
        : (router.prefetch(href),
          router.push(href, asPath, {
            shallow: shallow !== undefined ? shallow : false,
          }));
    }
  }, [condition]);
  return null;
}
