import { SiteConfig } from "@/site-config";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../../features/theme/ThemeToggle";
import { Layout } from "../page/layout";

export function HeaderBase({ children }: PropsWithChildren) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <Layout className="my-2">
        <div className="flex items-center gap-2">
          <Image
            src={SiteConfig.appIcon}
            alt="app logo"
            width={32}
            height={32}
          />
          <Link href="/" className="text-base font-bold">
            {SiteConfig.title}
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {children}
            <ThemeToggle />
          </nav>
        </div>
      </Layout>
    </header>
  );
}
