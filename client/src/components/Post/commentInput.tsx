import React from "react";
import { User } from "../../helper/types";
import Button from "../shared/Button";

function CommentInput({ user }: { user: User }) {
  return (
    <div className="mx-4 my-3">
      <p className="mb-1 text-xs text-gray-500">Comment as {user.username}</p>
      <form>
        <div className="border border-gray-500">
          <input className="block w-full p-1 bg-transparent border-none outline-none min-h-screen-10" />
          <div className="flex justify-end p-1 text-xs bg-gray-200">
            <button className="px-3 py-1 text-xs text-white bg-blue-500 rounded-3xl">
              comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentInput;
