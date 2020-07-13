import React from "react";

function Meme({ meme, deleteMeme }) {
  return (
    <div className="Meme">
      <h1>{meme.top}</h1>
      <img src={meme.url} alt={meme.top} />
      <h1>{meme.bottom}</h1>
      <button onClick={() => deleteMeme(meme.id)}>Delete</button>
    </div>
  );
}

export default Meme;