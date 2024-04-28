import React from "react";
import PageTitle from "../custom/page-title";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { CustomAvatar } from "../custom/custom-avatar";
import { Button } from "../ui/button";
import { ShareIcon } from "lucide-react";

const Blogs = () => {
  return (
    <div>
      <PageTitle title="Recent Blogs" />
      <div className="grid grid-cols-3 gap-5 py-5">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <p>How to write clean code</p>
            <Badge>Dev</Badge>
          </CardHeader>
          <CardContent>
            <Image
              unoptimized
              src={
                "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
              }
              alt="dev"
              width="0"
              height="0"
              className="w-full h-[240px] object-cover"
            />
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex gap-2 items-center">
              <CustomAvatar
                fallback="KB"
                image="https://github.com/shadcn.png"
                author="Khash-Erdene"
                date="2024-04-27"
              />
            </div>
            <Button variant="outline" size={"icon"}>
              <ShareIcon className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
