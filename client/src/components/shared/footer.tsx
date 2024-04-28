import React from "react";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-5 border-t border-t-muted flex justify-between items-center">
      <p className="text-sm flex gap-1">
        <p className="text-muted-foreground">Developed & designed by</p>
        <span>Khash-Erdene Bolor-Erdene</span>
        <p className="text-muted-foreground">&copy; 2024</p>
      </p>
      <Button variant={"ghost"}>
        <GithubIcon className=" text-muted-foreground" />
      </Button>
    </div>
  );
};

export default Footer;
