<template>
    <div class="h-video-play" :width="videoOption.width" :height="videoOption.height">
        <video  ref="video" :width="videoOption.width" :height="videoOption.height" webkit-playsinline playsinline @click="pause()">
            您的浏览器不支持 video 标签。
        </video>
        <!--poster-->
        <div class="h-video-play-poster" :width="videoOption.width" :height="videoOption.height"  v-if="status==0">
            <img :src="option.poster">

        </div>
        <!--播放icon-->
        <div class="h-video-play-icon" @click="play()"  v-if="status==0||status==3">
            <slot name="playIcon">
                <span class="h-video-play-icon-time" v-if="videoOption.playIcon=='time'"><span>{{videoOption.time}}</span></span>
                <img src='./img/btn_play@2x.png' v-else>
            </slot>
        </div>
        <!--loading-->
        <div class="h-loading" v-if="status==1">
            <img src="./img/loading.gif">
        </div>

    </div>
</template>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @iphone4: 8.53px;
    @galaxyS4: 9.6px;
    @iphone5: 8.53px;
    @iphone6: 10px;
    @iphone6P: 11.04px;

    @media (device-width: 320px) and (min-resolution: 2dppx) {
        .h-video-play {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (min-resolution: 3dppx) {
        .modal-wrapper {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (min-resolution: 2dppx) {
        .modal-wrapper {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (min-resolution: 2dppx) {
        .h-video-play {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min-resolution: 3dppx) {
        .h-video-play {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (min--moz-device-pixel-ratio: 3) {
        .h-video-play {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (min--moz-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min--moz-device-pixel-ratio: 3) {
        .h-video-play {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (-webkit-min-device-pixel-ratio: 3) {
        .h-video-play {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-video-play {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (-webkit-min-device-pixel-ratio: 3) {
        .h-video-play {
            font-size: @iphone6P;
        }
    }
    .h-video-play{
        width: 100%;
        position: relative;
        video{
            display: block;
            object-fit: inherit;
        }
        video::-webkit-media-controls-start-playback-button {
            display: none;
        }
        .h-video-play-poster{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }

        }
        .h-video-play-icon{
            position: absolute;
            top:50%;
            left: 50%;
            img{
                width: 4em;
                height: 4em;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -2em;
                margin-left: -2rem;
            }
            .h-video-play-icon-time {
                position: absolute;
                background-image: url('./img/play_icon_time.png');
                background-size: 99%;
                background-repeat: no-repeat;
                width: 7.2em;
                line-height: 3.2em;
                display: block;
                top: 50%;
                left: 50%;
                margin-left: -3.6em;
                margin-top: -1.6em;
                color: #fff;
                z-index: 99;
                span{
                    margin-left: 2.4em;
                    font-size: 1.2em;
                }
            }
        }


        .h-loading{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            img{
                width: 4em;
                height: 4em;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -2em;
                margin-left: -2rem;
            }
        }
    }
</style>
<script>
    export default {
        props: ["option"],
        data() {
            return {
                isLoading:false,
                video:'',
                videoOption:this.option,
                status:0  //video status,0-未播放,1-加载数据中,2-播放中,3-暂停
            }
        },
        computed: {
        },
        methods: {
            bind(){
                let self = this;
                let video=self.video;
//                数据在载完触发
                video.addEventListener('canplay',function(){
                    console.log('video loaded data');
                    self.status = 2; //开始播放
                    video.setAttribute("controls","controls");
                },false);
                //暂停触发
                video.addEventListener('pause',function(){
                    console.log('video pause');
                    self.status = 3; //暂停播放
                },false);
                //从暂停重新开始播放触发
                video.addEventListener('play',function(){
                    console.log('video play');
                    self.status = 2; //暂停播放
                },false);
                //暂停加载是触发
                video.addEventListener('waiting',function(){
                    console.log('video waiting');
                    self.status =1; //暂停播放
                },false);
                //从加载进入播放时触发
                video.addEventListener('playing',function(){
                    console.log('video playing');
                    self.status =2; //暂停播放
                },false);

                //                video.addEventListener('webkitendfullscreen', function() {
//                    self.status = 0;
//                    video.pause();
//                });
                video.addEventListener('ended', function (e) {
                    // 播放结束时触发
                })
            },
            play(){
                let self = this;
                let video=self.video;
                //点击播放时加载视频
                if(self.status==0){
                    self.status = 1;//开始加载
                    video.setAttribute("src",self.videoOption.source);
                    video.play();
                }
                else if(self.status==3){ //暂停开始播放
                    self.status = 2;
                    video.play();
                }

            },
            pause(){
                let self = this;
                //点击暂停视频
                self.status = 3;//开始加载
                let video=self.video;
                video.pause();
            }

        },
        mounted() {
            let self = this;
            self.video=self.$refs.video;
            self.bind();
        }
    }
</script>
