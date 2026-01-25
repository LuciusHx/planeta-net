import { useEffect, useState } from "react";
import { connectSocket, sendMessage } from "../../services/socket";

export default function Chat({ chatId, user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    connectSocket((message) => {
      if (message.chatId === chatId) {
        setMessages((prev) => [...prev, message]);
      }
    });
  }, [chatId]);

  const handleSend = () => {
    if (!text.trim()) return;

    sendMessage({
      chatId,
      senderId: user.id,
      senderName: user.name,
      content: text
    });

    setText("");
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.senderName}:</strong> {m.content}
          </p>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
