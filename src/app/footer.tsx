import Link from "next/link";
import { siteConfig } from "~/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link
          href="/dashboard"
          className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left"
        >
          Built by {` ${siteConfig.author}`}. To execute the trade when
          notification occured.
        </Link>
      </div>
    </footer>
  );
}
