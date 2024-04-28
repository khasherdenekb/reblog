"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function NavbarMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="z-[100]">
        <NavigationMenuItem>
          <Button variant={"ghost"}>
            <Search className="pr-2" />
            Search
          </Button>
        </NavigationMenuItem>
        {pathname !== "/admin" && (
          <>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs" title="Productivity">
                    Explore efficiency-boosting strategies.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Science">
                    Explore Interesting scientific information
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Education"
                  >
                    Access educational layout assistance.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Design">
                    Find stylish UI element guidance.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Dev">
                    Essential code styling tips.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Journal">
                    Explore academic text formatting aids.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/" title="About">
                    About the project.
                  </ListItem>
                  <ListItem href="/" title="Contact">
                    Contact me.
                  </ListItem>
                  <ListItem href="/" title="Donation">
                    Donate to the project.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
