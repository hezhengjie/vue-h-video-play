<template>
  <div>
    <p>
      默认模式
    </p>
    <app-video-player :option="optionDefault" :poster="poster" :source="source">
      <!--<div slot="playIcon">自定义icon</div>-->
    </app-video-player>
    <p>
      带时间的模式
    </p>
    <app-video-player :option="optionTime" :poster="poster" :source="source" :time="time"></app-video-player>
    <p>
      自动播放模式
    </p>
    <app-video-player :option="optionAutoPlay" :poster="poster" :source="source"></app-video-player>
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
      optionDefault:{
        width:'100%',
        height:'200px',
        playMode:'default',//inline or fullScreen or defalut(默认行为ios 全屏,android行内)
        playIcon:'default', //default or time
        autoPlay:false,//true or false
        beforePlay:function(){
           //可以再这里加上是否是wifi环境的判断
          return true;
        }
      },
      optionTime:{
        width:'100%',
        height:'200px',
        playMode:'default',//inline or fullScreen or defalut(默认行为ios 全屏,android行内)
        playIcon:'time', //default or time
        autoPlay:false,//true or false
        beforePlay:function(){
          //可以再这里加上是否是wifi环境的判断
          return true;
        }
      },
      optionAutoPlay:{
        width:'100%',
        height:'200px',
        playMode:'default',//inline or fullScreen or defalut(默认行为ios 全屏,android行内)
        autoPlay:false,//true or false
        beforePlay:function(){
          //可以再这里加上是否是wifi环境的判断
          return true;
        }
      },
      poster:"https://p1.meituan.net/beautyimg/99f72f549af20dc99535d4ae2b5292d3154361.jpg",
      source:'https://s3.meituan.net/v1/mss_80d691367d3045158769d28878d5cfd6/merchant-video/7d01905a16f4a6e0db4b4ac2894b743a.mp4',
      time:'0:44'
    }
  },
  components: {
    'app-video-player': VideoPlayer
  },
  methods:{
  }
}
</script>
