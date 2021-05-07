import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import BannerComp from "../../components/Sub/Banner";
import { Sub, User } from "../../helper/types";
import { uploadSubImage } from "../../Redux/Action/Post";

function Banner() {
  const sub: Sub = useSelector((state: RootStateOrAny) => state.Post.sub.sub);

  const refInput = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const [isSubOwrner, setisSubOwrner] = useState(false);

  const subOwner: User = useSelector(
    (state: RootStateOrAny) => state.Auth.user
  );

  const openInput = (type: string) => {
    if (!isSubOwrner) return;
    refInput.current.name = type;
    refInput.current.click();
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const form = new FormData();
    form.append("image", e.target.files[0]);
    form.append("type", refInput.current.name);
    dispatch(uploadSubImage(form, sub.name));
  };
  useEffect(() => {
    if (!sub) return;
    setisSubOwrner(sub.username === subOwner.username);
  }, [sub, subOwner]);

  return (
    <>
      <BannerComp
        sub={sub}
        isSubOwner={isSubOwrner}
        refInput={refInput}
        openInput={openInput}
        handleUpload={handleUpload}
      />
    </>
  );
}

export default Banner;
