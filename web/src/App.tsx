import { useState, FormEvent } from "react";
import { api } from "./api/api";
import { Emojis } from "./components/Emoji";

export function App() {
  const [emoji, setEmoji] = useState("");
  
  const handleSendReactionEmoji = async(e: FormEvent) => {
    e.preventDefault();

    const data = {
      reaction: emoji,
    }

    await api.post('/reaction', data);
  }

  return (
    <section className="app">
      <h1>FEEDBACK - EMOJI</h1>
      <form onSubmit={handleSendReactionEmoji}>
        <Emojis value={emoji} setValue={setEmoji} />
      </form>
    </section>
  )
}