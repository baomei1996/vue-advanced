<template>
  <div>
    <!-- <div v-for="(job, idx) in this.$store.state.jobs" :key="idx">
      {{ job }}
    </div> -->
    <!-- <p v-for="(job, idx) in fetchedjobs" :key="idx">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
    <!-- <ul class="jobs-list">
      <li class="post" v-for="(job, idx) in fetchedjobs" :key="idx">
        <div class="points">
          {{ idx + 1 }}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="jobs-text">
            {{ job.time_ago }}, {{ job.domain }}
          </small>
        </div>
      </li>
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import { fetchJobsList } from '../api/index'
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus'
// import ListMixin from '../mixins/ListMixin'
export default {
  components: {
    ListItem,
  },
  // mixins: [ListMixin],
  // computed: {
  //   ...mapGetters(['fetchedjobs'])
  // },
  created() {
    //  bus.$emit('start:spinner')
    //   setTimeout(() => {
    //   this.$store.dispatch('FETCH_JOBS')
    //     .then(() => {
    //      console.log('fetched');
    //       bus.$emit('end:spinner')
    //     })
    //     .catch((error) => {
    //      console.log(error);
    //    })
    //  }, 3000)
    // fetchJobsList()
    //   .then(res => {
    //     this.jobs = res.data
    //   })
  },
}
</script> 