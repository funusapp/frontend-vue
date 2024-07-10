<template>
  <h1 v-once v-text="titulo"></h1>
  <h2>{{ subtitulo }}</h2>

  <input :disabled="tarefas.length == 0" v-model="subtitulo" type="text" placeholder="Descrição">

  <div v-if="tarefas.length <= 0">
    Não há tarefas
  </div>

  <div v-if="tarefas.length > 0">
    Existem {{ tarefas.length }} tarefas
    <ul>
      <li v-for="(tarefa, id) in tarefas" :key="id"> {{ tarefa }} </li>
    </ul>
  </div>

  <button @click="tarefas = []">Limpar</button>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      titulo: 'Listagem de tarefas',
      subtitulo: 'Defina uma descrição',
      tarefas: []
    };
  },
  mounted () {
    setTimeout(() => {
      this.titulo = 'Novo título';
      this.tarefas = ['tarefa	1', 'tarefa	2', 'tarefa	3', 'tarefa	4']
    }, 3000)
  }
}
</script>

<style></style>
