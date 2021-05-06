import React from "react";
import Arrow from "../../components/shared/Arrow";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { vote } from "../../Redux/Action/Post";

interface VoteProps {
  voteScore: any | undefined;
  slug: string;
  Uservote?: number;
  identifier: string;
}

const Vote: React.FC<VoteProps> = ({
  voteScore,
  slug,
  Uservote,
  identifier,
}) => {
  const dispatch = useDispatch();
  const handleVote = (value: number) => {
    dispatch(vote({ value, slug, identifier }));
  };

  return (
    <>
      <Arrow
        icon={faArrowUp}
        style={
          Uservote === 1
            ? "hover:red-red-600 text-red-600"
            : "hover:text-blue-600 text-gray-600"
        }
        handleClick={() => handleVote(1)}
      />
      <span>{voteScore}</span>
      <Arrow
        icon={faArrowDown}
        style={
          Uservote === -1
            ? "hover:text-blue-600 text-blue-600"
            : "hover:text-blue-600 text-gray-600"
        }
        handleClick={() => handleVote(-1)}
      />
    </>
  );
};

export default Vote;
