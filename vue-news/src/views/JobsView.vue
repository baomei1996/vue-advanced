<template>
  <div>
    <!-- <div v-for="(job, idx) in this.$store.state.jobs" :key="idx">
      {{ job }}
    </div> -->
    <!-- <p v-for="(job, idx) in fetchedjobs" :key="idx">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
    <ul class="jobs-list">
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
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { fetchJobsList } from '../api/index'
export default {
  computed: {
    ...mapGetters(['fetchedjobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList()
    //   .then(res => {
    //     this.jobs = res.data
    //   })
  },
}
</script>

<style scoped>
.jobs-list {
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
.jobs-title {
  margin: 0;
}
.jobs-text {
  color: #828282;
}
</style>