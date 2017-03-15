<template>
  <div>
    <app-video-player :option="option">
      <!--<div slot="playIcon">自定义icon</div>-->
    </app-video-player>
 </div>
 </template>
<style>
  html{
    font-size: 10px;
  }
</style>
<script>
  import VideoPlayer from '../src/VideoPlayer.vue';

export default {
  data(){
    return {
      option:{
        width:'100%',
        height:'200px',
        poster:"https://p1.meituan.net/beautyimg/99f72f549af20dc99535d4ae2b5292d3154361.jpg",
        source:'https://s3.meituan.net/v1/mss_80d691367d3045158769d28878d5cfd6/merchant-video/7d01905a16f4a6e0db4b4ac2894b743a.mp4',
        playMode:'default',//inline or fullScreen or defalut(默认行为ios 全屏,android行内)
        playIcon:'default', //default or time
        time:'0:44',
        autoPlay:false,//true or false
        beforePlay:function(){
           //可以再这里加上是否是wifi环境的判断
          return true;
        }
      }
    }
  },
  components: {
    'app-video-player': VideoPlayer
  },
  methods:{
  }
}
</script>
