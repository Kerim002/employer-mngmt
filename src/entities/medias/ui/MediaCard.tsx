import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { CalendarIcon } from "lucide-react";
import React from "react";

type Props = {
  item: {
    id: number;
    image: string;
    date: string;
    category: string;
    username: string;
    tags: string[];
    description: string;
  };
};

const MediaCard = ({ item }: Props) => {
  return (
    <Card className="">
      <img src={item.image} alt={`Post`} className="w-full h-48 object-cover" />
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-center">
          <Badge variant="outline">{item.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {item.date}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={item.image} alt={item.username} />
            <AvatarFallback>
              {item.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{item.username}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MediaCard;
