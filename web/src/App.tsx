import { useState } from "react";
import { Emojis } from "./components/Emoji";
import { EnumEmoji } from "./enum/enum-emoji";

export function App() {
  const [emoji, setEmoji] = useState("");
  console.log(emoji)

  return (
    <section className="app">
      <h1>FEEDBACK - EMOJI</h1>
      <Emojis value={emoji} setValue={setEmoji}/>
    </section>
  )
}