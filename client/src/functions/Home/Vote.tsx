import React from "react";
import { useRouter } from "next/router";
import Arrow from "../../components/shared/Arrow";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
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
  const routers = useRouter();
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.Auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const handleVote = (value: number) => {
    //if user not authenticated redirect to login page
    if (!isAuthenticated) return routers.push("/signin");

    //check if the value is equal to the previous value
    if (value === Uservote) value = 0;

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
