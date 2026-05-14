import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import BarraLateral from "../../components/BarraLateral/BarraLateral.jsx";
import LayoutChat from '../../components/LayoutChat/LayoutChat.jsx';
import "./TelaChatClient.css"; 

export default function TelaChatClient() {
  const [conversaSelecionada, setConversaSelecionada] = useState(null); // conver. selec. aparece nulo. Por isso no começo ele aparece a msg pra selecionar uma conversa
  const [conversas, setConversas] = useState([]);

  const [filtro, setFiltro] = useState('todos'); //mudar filtro, valor inicial == todos; 

  // Simula o carregamento inicial das conversas (resumo)
  // parte da barra lateral que simula a conversa minimizada. 
  useEffect(() => {
    setConversas([
      { id: 1, nome: "João", ultimaMsg: "Olá", categoria: "todos", horario: "12:50", foto: "" },
      { id: 2, nome: "Maria", ultimaMsg: "Oi, Maria, em que posso ajudar? ", categoria: "todos", horario: "09:50", foto: "" }
    ]);
  }, []);

  // Filtra a lista de conversas pela categoria selecionada
  const conversasFiltradas = conversas.filter(
    categoria => filtro === 'todos' || categoria.categoria === filtro
  );

  return (
    <Box className="container" sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      <BarraLateral 
        mudarChatSelecionado={setConversaSelecionada} 
        conversas={conversasFiltradas} 
        filtroAtivo={filtro} 
        mudarFiltroSelecionado={setFiltro} 
      />

      <Box sx={{ flex: 1, height: '100vh', position: 'relative', bgcolor: 'transparent' }}>
        <LayoutChat 
          conversaAtual={conversaSelecionada} 
        />
      </Box>

    </Box>
  );
}