import { useState, FormEvent } from "react";
import { api } from "./api/api";
import { Emojis } from "./components/Emoji";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [emoji, setEmoji] = useState("");
  
  const handleSendReactionEmoji = async(e: FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        reaction: emoji,
      }

      await api.post('/reaction', data);
      toast.success(`Obrigado pelo feedback ${emoji.split(" ")[1]}`, {
        position: toast.POSITION.TOP_RIGHT
      })
    } catch {
      toast.error('Error, tente novamente mais tarde!', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  return (
    <section className="app">
      <h1>FEEDBACK - EMOJI</h1>
      <form onSubmit={handleSendReactionEmoji}>
        <Emojis value={emoji} setValue={setEmoji} />
      </form>
      <ToastContainer />
    </section>
  )
}