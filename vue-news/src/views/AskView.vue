<template>
  <div>
    <!-- <div v-for="(ask, idx) in fetchedAsk" :key="idx">
      {{ ask }}
    </div> -->
    <!-- <p v-for="(ask, idx) in fetchedAsk" :key="idx">
      <router-link :to="'/item/' + ask.id">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p> -->

    <!-- <ul class="ask-list">
      <li class="post" v-for="(ask, idx) in fetchedAsk" :key="idx">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="'/item/' + ask.id">{{ ask.title }}</router-link>
          </p>
          <small class="ask-text">{{ ask.time_ago }} by {{ ask.user }}</small>
        </div>
        
      </li>
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index'
// import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus'
// import ListMixin from '../mixins/ListMixin'
export default {
  components: {
    ListItem
  },
  // mixins: [ListMixin],
  created() {
  // bus.$emit('start:spinner')
  //     setTimeout(() => {
  //       this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //     }, 3000)
    // fetchAskList()
    //   .then(res => {
    //     this.asks = res.data
    //   })
  },
  mounted() {
     bus.$emit('end:spinner')
  },
  computed: {
    //###1
    // ask() {
    //   return this.$store.state.ask;
    // }
    //###2
    // ...mapState({
    //   ask: state => state.ask
    // })
    //###3
    // ...mapGetters(['fetchedAsk'])
  }
  
}
</script>

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
  font-weight: bold;
}
.ask-title {
  margin: 0;
}
.ask-text {
  color: #828282;
}

</style>