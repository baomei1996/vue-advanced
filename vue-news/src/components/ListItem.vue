<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, idx) in listItems" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || idx + 1 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by 
            <router-link class="link-text" :to="'/user/' + item.user">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.news
      } else if (name === 'jobs') {
        return this.$store.state.jobs
      } else if (name === 'ask') {
        return this.$store.state.ask
      }
    }
  },
 created() {
   const name = this.$route.name;
   if(name == 'news') {
     this.$store.dispatch('FETCH_NEWS')
   } else if (name == 'jobs') {
     this.$store.dispatch('FETCH_JOBS')
   } else if (name == 'ask') {
     this.$store.dispatch('FETCH_ASK')
   }
    
  },
  
}
</script>


<style scoped>
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
</style>