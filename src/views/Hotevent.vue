<template>
  <div class="hot-event">
    <div class="title">
      2020年过去了,我很怀念他
    </div>
    <a-timeline mode="alternate">
      <!-- <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
      </a-timeline-item>
      <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Technical testing 2015-09-01
      </a-timeline-item>-->

      <a-timeline-item
        v-for="(item,index) in events"
        :key="index"
        :class="{'ft-large':!item.time}"
        :color="!item.time?'blue':'green'"
      >{{item.event+' '+item.time}}</a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: [{
        event: '美国疫情', time: '2015-09-01'
      }, {
        event: '美国疫情', time: '2015-09-01'
      }, {
        event: '美国疫情', time: '2015-09-01'
      }, {
        event: '美国疫情', time: '2015-09-01'
      }, {
        event: '2020', time: ''
      }, {
        event: '美国疫情', time: '2015-09-01'
      }]
    }
  },
  computed: {
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.hot-event {
  min-height: 900px;
  width: 1200px;
  background-color: #fff;
  margin: 50px auto;
  .title{
    font-size: 1rem;
    text-align: center;
    padding-top: 20px;
    font-weight: 700;
  }
  .ant-timeline {
    padding-top: 50px;
    cursor: pointer;
  }
}

.ft-large {
  font-size: 25px;
}
</style>
