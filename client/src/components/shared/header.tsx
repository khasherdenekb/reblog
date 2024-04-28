"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowUpRight, Bookmark, Pin, Share } from "lucide-react";
import { Button } from "../ui/button";
import { CustomAvatar } from "../custom/custom-avatar";

const Header = () => {
  return (
    <div className="py-20">
      <Card className="!z-[1]">
        <CardContent className="py-5">
          <div className="grid grid-cols-2 h-[400px] gap-5">
            <div>
              <Image
                unoptimized
                src={
                  "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
                }
                alt="dev"
                width="0"
                height="0"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="h-full w-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <Badge>Dev</Badge>
                  <Badge variant={"secondary"}>
                    <Pin className="pr-2 fill-red-300 stroke-red-300" />
                    FEATURED
                  </Badge>
                </div>
                <div>
                  <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pt-5">
                    How to host a Python script on the cloud.
                  </h2>
                  <p className="leading-7 [&:not(:first-child)]:mt-3 overflow-hidden lg:h-[190px] xl:h-[220px]">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.The
                    king, seeing how much happier his subjects were,realized the
                    error of his ways and repealed the joke tax.The king, seeing
                    how much happier his subjects were,realized the error of his
                    ways and repealed the joke tax.The king, seeing how much
                    happier his subjects were,realized the error of his ways and
                    repealed the joke tax.The king, seeing how much happier his
                    subjects were,realized the error of his ways and repealed
                    the joke tax.The king, seeing how much happier his subjects
                    were,realized the error of his ways and repealed the joke
                    tax.The king, seeing how much happier his subjects
                    were,realized the error of his ways and repealed the joke
                    tax.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <CustomAvatar
                  fallback="KB"
                  image="https://github.com/shadcn.png"
                  author="Khash-Erdene"
                  date="2024-04-27"
                />
                <div className="flex gap-3">
                  <Button>
                    Read More
                    <ArrowUpRight className="pl-2" />
                  </Button>
                  <Button size={"icon"} variant="outline">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Header;
