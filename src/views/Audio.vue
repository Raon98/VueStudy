<template>
  <button class="btn btn-primary btn-sm"
          @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" v-for="audio in audios" :key="audio.id">
    {{ audio.isPlaying ? 'Pause' : 'Play' }} {{ audio.name }}
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Audio",
  data() {
    return{
    audios: [
      {
        id: 'muscle-car',
        name: 'Muscle Car',
        file: new Audio('http://soundbible.com/mp3/muscle-car-daniel_simon.mp3'),
        isPlaying: false
      },
      {
        id: 'airplane-takeoff',
        name: 'Airplane Takeoff',
        file: new Audio('http://soundbible.com/mp3/airplane-takeoff_daniel_simion.mp3'),
        isPlaying: false
      }
    ]
  }
  },
  methods : {
    play(audio) {
      audio.isPlaying = true;
      audio.file.play();
    },

    pause(audio){
      audio.isPlaying = false;
      audio.file.pause();
    }
  }


}
</script>

<style scoped>

</style>