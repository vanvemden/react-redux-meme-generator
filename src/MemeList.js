import React from "react";
import MemeForm from "./MemeForm";
import Meme from "./Meme";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';

const MemeList = () => {
  const memes = useSelector(store => store.memes);
  const dispatchEvent = useDispatch();

  const addMeme = meme => {
    meme.id = uuid();
    dispatchEvent({ type: "ADD_MEME", payload: { meme } });
  }

  const deleteMeme = id => {
    dispatchEvent({ type: "DELETE_MEME", payload: { id } });
  }

  return (
    <div className="MemeList">
      <MemeForm addMeme={addMeme} />
      {memes.map(meme =>
        <Meme key={meme.id} meme={meme} deleteMeme={deleteMeme} />
      )}
    </div>
  );
};

export default MemeList;  