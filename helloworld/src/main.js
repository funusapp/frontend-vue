import { createApp } from 'vue';

createApp({
  render () {
    return (
      <header>
        <h1>Titulo do post</h1>
        <p>Conteudo da postagem</p>
      </header>
    );
  }
}).mount('#app');
