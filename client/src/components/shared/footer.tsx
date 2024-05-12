import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <div className="py-5 border-t border-t-muted flex justify-between items-center">
      <p className="text-sm flex gap-1">
        <p className="text-muted-foreground">Developed & designed by</p>
        <span>Khash-Erdene Bolor-Erdene</span>
        <p className="text-muted-foreground">&copy; 2024</p>
      </p>
      <Link href={GITHUB_URL} target="_blank">
        <Button variant={"ghost"}>TODO: GITHUB LOGO HERE</Button>
      </Link>
    </div>
  );
};

export default Footer;
