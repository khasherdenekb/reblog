import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CustomAvatarProps = {
  fallback: string;
  image: string;
  author?: string;
  date?: string;
};

export function CustomAvatar({
  fallback,
  image,
  author,
  date,
}: CustomAvatarProps) {
  return (
    <div className={"flex gap-2"}>
      <Avatar>
        <AvatarImage src={image} alt="@shadcn" />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {author && date ? (
        <div className="flex flex-col gap-0">
          <p className="text-sm">{author}</p>
          <p className="leading-7 text-sm text-muted-foreground">{date}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
