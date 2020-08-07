import React from 'react';
import Menu from './components/Menu/index.js';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
 
function App() {
  return (
    <div>
      <Menu/>

      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Testando video Description"}
      
      />
    </div>
    

    
    
  );
}

export default App;
