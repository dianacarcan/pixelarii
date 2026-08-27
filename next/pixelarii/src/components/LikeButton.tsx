"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { toggleLike } from "@/server/likes";

interface LikeButtonProps {
  slug: string;
  initialLikes: number;
}

export const LikeButton = ({
  slug,
  initialLikes,
}: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    const newLikes = await toggleLike(slug, !liked);

    setLikes(newLikes);
    setLiked(!liked);
  };

  return (
    <Button variant="contained" onClick={handleLike}>
      {liked ? "Unlike" : "Like"} ({likes})
    </Button>
  );
};