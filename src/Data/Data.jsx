import { ReactButton, JavaScriptButton, FirebaseButton, JavaButton, PythonButton, MySQLButton, SQLiteButton, ApiButton, HtmlButton, CSSButton } from "./DataStyle";
import styled from "styled-components";
const ButtonDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 20px;
`;
const Links = styled.a`
  text-decoration: none;
  letter-spacing: 2px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-image: linear-gradient(to right, #2a272a, #332f34, #3b383e, #434149, #4b4a54);
  display: flex;
  align-items: center;
  &:nth-child(2) {
    background-image: linear-gradient(to right, #800080, #862985, #8c4189, #91548e, #956792);
    margin-left: 0;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const data = [
  {
    id: "1",
    image: "./1.png",
    title: "Lista Filmes App",
    description: `Este projeto é uma aplicação pessoal desenvolvida em React para gerenciar uma lista de filmes. 
    O sistema busca filmes através de duas APIs: OMDB e TMDB, que se complementam para fornecer informações detalhadas, como título, sinopse, ano, duração, gênero, avaliações no IMDB e Rotten Tomatoes. 
    Os filmes são pesquisados em português ou inglês e os dados são armazenados no Firebase. A funcionalidade inclui a possibilidade de adicionar ou remover filmes da lista, com a exclusão também refletida no banco de dados.
     `,
    tec: (
      <ButtonDiv>
        <ReactButton>React</ReactButton>
        <FirebaseButton>Firebase</FirebaseButton>
        <ApiButton>APIs</ApiButton>
      </ButtonDiv>
    ),

    git: (
      <Links href="https://github.com/GabrielRosendo27/ListaFilmesApp" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
    vercel: (
      <Links href="https://lista-filmes-app.vercel.app/" target="_blank" rel="noopener noreferrer">
        VERCEL <img src="ExternalLink.svg" />
      </Links>
    ),
  },
  {
    id: "2",
    image: "./botdisc.png",
    title: "Discord Bot",
    description: `Este bot de Discord, desenvolvido em Python com Web Scraping, coleta informações de jogadores do jogo Tibia. 
    Ao receber o comando !add *NomeDoPersonagem*, o bot faz scraping no site do jogo e retorna as informações do personagem no Discord. 
    Os dados são salvos no banco SQLite e o bot monitora periodicamente mudanças no status do personagem, como evolução de nível ou morte. 
    Ele também pode remover personagens do banco com o comando !remove *NomeDoPersonagem*. O bot utiliza a biblioteca Selenium para realizar as operações de scraping.`,
    tec: (
      <ButtonDiv>
        <PythonButton>Python</PythonButton>
        <SQLiteButton>SQLite</SQLiteButton>
      </ButtonDiv>
    ),
    git: (
      <Links href="https://github.com/GabrielRosendo27/botDisc" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
  },
  {
    id: "3",
    image: "./exame.png",
    title: "Exame",
    description: `Este programa monitora três tipos de exames: glicemia, colesterol e triglicerídeos, armazenando dados como nome do paciente, tipo sanguíneo e ano de nascimento.
    Exame de Glicemia: armazena a quantidade de glicose e classifica como normoglicemia, pré-diabetes ou diabetes, conforme os níveis de glicose.
    Exame de Colesterol: armazena LDL, HDL e o risco do paciente (baixo, médio, alto), com metas para cada faixa etária e nível de risco.
    Exame de Triglicerídeos: armazena a quantidade de triglicerídeos com parâmetros específicos para diferentes faixas etárias.
    O projeto foi desenvolvido para estudos de Orientação a Objetos em Java.`,
    tec: (
      <ButtonDiv>
        <JavaButton>Java</JavaButton>
      </ButtonDiv>
    ),
    git: (
      <Links href="https://github.com/GabrielRosendo27/Exame-Java" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
  },
  {
    id: "4",
    image: "./telaLogin.png",
    title: "Tela de login",
    description: `Esta aplicação Java apresenta uma Tela de Login e Cadastro com integração ao banco de dados MySQL. 
      
    Os usuários podem criar uma nova conta que será armazenada no banco, ou, caso já possuam uma, fazer login utilizando suas credenciais.
    A interface é intuitiva e desenvolvida com JOptionPane. 
    As informações dos usuários são salvas no banco de dados MySQL.`,
    tec: (
      <ButtonDiv>
        <JavaButton>Java</JavaButton>
        <MySQLButton>MySQL</MySQLButton>
      </ButtonDiv>
    ),
    git: (
      <Links href="https://github.com/GabrielRosendo27/TelaLogin" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
  },
  {
    id: "5",
    image: "./jogodavelha.png",
    title: "Jogo da Velha",
    description: `Jogo da velha clássico, feito principalmente para desenvolver exercícios envolvendo lógica em JavaScript.`,
    tec: (
      <ButtonDiv>
        <HtmlButton>HTML</HtmlButton>
        <CSSButton>CSS</CSSButton>
        <JavaScriptButton>JavaScript</JavaScriptButton>
      </ButtonDiv>
    ),
    git: (
      <Links href="https://github.com/GabrielRosendo27/jogodavelha" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
    vercel: (
      <Links href="https://jogodavelha-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
        VERCEL <img src="ExternalLink.svg" />
      </Links>
    ),
  },
  {
    id: "6",
    image: "./bikcraft.png",
    title: "Bikcraft",
    description: `Site fictício de uma empresa chamada Bikcraft feito apenas com HTML e CSS. 
    Contém 6 páginas:
    • Home 
    • Orçamento 
    • Seguros
    • Termos
    • Bicicletas 
    • Contato 
    Foi fundamental para consolidar meus conhecimentos nessas tecnologias e em como elas interagem entre si.`,
    tec: (
      <ButtonDiv>
        <HtmlButton>HTML</HtmlButton>
        <CSSButton>CSS</CSSButton>
      </ButtonDiv>
    ),
    git: (
      <Links href="https://github.com/GabrielRosendo27/projetobikcraft" target="_blank" rel="noopener noreferrer">
        GITHUB <img src="ExternalLink.svg" />
      </Links>
    ),
    vercel: (
      <Links href="https://bikcraft-pi-opal.vercel.app/" target="_blank" rel="noopener noreferrer">
        VERCEL <img src="ExternalLink.svg" />
      </Links>
    ),
  },
];
