# vue-h-video-play
基于Vue2.0的移动端视频播放组件


# Install
    npm install vue-h-video-play --save

# Demo

https://hezhengjie.github.io/vue-h-video-play/demo/index.html

# Usage

       <template>
      <div>
        <app-video-player :option="option" :poster="poster" :source="source" :time="time">
          <!--<div slot="playIcon">自定义icon</div>-->
        </app-video-player>
     </div>
     </template>
    <script>
      import VideoPlayer from 'vue-h-video-play';

    export default {
      data(){
        return {
          option:{
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
          poster:"https://p1.meituan.net/beautyimg/99f72f549af20dc99535d4ae2b5292d3154361.jpg",
          source:'https://s3.meituan.net/v1/mss_80d691367d3045158769d28878d5cfd6/merchant-video/7d01905a16f4a6e0db4b4ac2894b743a.mp4',
          time:'0:44'
        }
      },
      components: {
        'app-video-player': VideoPlayer
      }
    }
    </script>
