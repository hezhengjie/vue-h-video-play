<template>
    <div class="modal-wrapper" transition="modal" v-show="showStatus">
        <div class="modal-mask" @click="cancel"></div>
        <div class="modal-container">
            <div class="modal-btn-wrapper">
                <div class="btn" @click="cancel">取消</div>
                <div class="btn save" @click="saveDate">确认</div>
            </div>
            <div class="modal-content date" v-if="type=='date'">
                <div class="picker-date" @touchstart="touchstartYear" @touchmove="touchmoveYear"
                     @touchend="touchendYear">
                    <ul class="year" :style="{transform: 'translate3d(0, ' + initOffsetYear + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="year in years" v-text="year" :key="year"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="picker-date" @touchstart="touchstartMonth" @touchmove="touchmoveMonth" @touchend="touchendMonth">
                    <ul class="month" :style="{transform: 'translate3d(0, ' + initOffsetMonth + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="month in months" v-text="month" :key="month"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="picker-date" @touchstart="touchstartDay" @touchmove="touchmoveDay" @touchend="touchendDay">
                    <ul class="day" :style="{transform: 'translate3d(0, ' + initOffsetDay + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="day in days" v-text="day" :key="day"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="up"></div>
                <div class="down"></div>
                <div class="line"></div>
            </div>
            <div class="modal-content time" v-else>
                <div class="picker-date" @touchstart="touchstartMeridiem" @touchmove="touchmoveMeridiem"
                     @touchend="touchendMeridiem">
                    <ul class="meridiem" :style="{transform: 'translate3d(0, ' + initOffsetMeridiem + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="meridiem in meridiems" v-text="meridiem"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="picker-date" @touchstart="touchstartHour" @touchmove="touchmoveHour" @touchend="touchendHour">
                    <ul class="hour" :style="{transform: 'translate3d(0, ' + initOffsetHour + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="hour in hours" v-text="hour" :key="hour"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="picker-date" @touchstart="touchstartMinute" @touchmove="touchmoveMinute" @touchend="touchendMinute">
                    <ul class="minute" :style="{transform: 'translate3d(0, ' + initOffsetMinute + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li v-for="minute in minutes" v-text="minute" :key="minute"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="up"></div>
                <div class="down"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @iphone4: 8.53px;
    @galaxyS4: 9.6px;
    @iphone5: 8.53px;
    @iphone6: 10px;
    @iphone6P: 11.04px;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li, ol {
        list-style: none;
    }

    .modal-wrapper {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: 21;
        transition: opacity .2s;
        font-size: @iphone4;
    }

    @media (device-width: 320px) and (min-resolution: 2dppx) {
        .modal-wrapper {
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
        .modal-wrapper {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min-resolution: 3dppx) {
        .modal-wrapper {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (min--moz-device-pixel-ratio: 3) {
        .modal-wrapper {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (min--moz-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min--moz-device-pixel-ratio: 3) {
        .modal-wrapper {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (-webkit-min-device-pixel-ratio: 3) {
        .modal-wrapper {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
        .modal-wrapper {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (-webkit-min-device-pixel-ratio: 3) {
        .modal-wrapper {
            font-size: @iphone6P;
        }
    }

    .modal-enter, .modal-leave {
        opacity: 0;
    }

    .modal-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, .4);
    }

    .modal-content {
        position: relative;
    }

    .modal-content.sex {
        width: 100%;
        position: absolute;
        bottom: 0;
        transition: all .3s;
        background-color: #F0F0F0;
        ul {
            padding: 0 .2em;
            background-color: #FFF;
        }

        li {
            text-align: center;
            line-height: .9em;
        }

        li:first-child {
            border-bottom: 1px solid #EEE;
        }
    }

    .modal-enter .modal-content, .modal-leave .modal-content, .modal-enter .modal-container, .modal-leave .modal-container {
        transform: translateY(100%);
    }

    .modal-container {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 18em;
        background-color: #FFF;
        transition: all .2s;
    }

    .modal-btn-wrapper {
        display: flex;
        justify-content: space-between;

        & .btn {
            width: 6em;
            height: 3em;
            line-height: 3em;
            text-align: center;
            font-size: 1.4em;
            color: #0088cc;

        }
    }

    .modal-content {
        margin: 0 4em;
        height: 15em;
        text-align: center;
        & .picker-date {
            display: inline-block;
            width: 31%;
            height: 15em;
            overflow: scroll;
        }

        & ul::-webkit-scrollbar {
            display: none;
        }

        & li {
            height: 1.5em;
            text-align: center;
            font-size: 2em;
            line-height: 1.5em;
        }
        & .up, .down {
            width: 100%;
            height: 50%;
            position: absolute;
            pointer-events: none;
            background-image: linear-gradient(to bottom, #FFF, rgba(255, 255, 255, 0));
        }

        & .up {
            top: 0;
        }

        & .down {
            bottom: 0;
            background-image: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0));
        }

        .line {
            width: 100%;
            height: 3em;
            position: absolute;
            top: 50%;
            left: 50%;
            pointer-events: none;
            box-sizing: border-box;
            border-top: 1px solid #DCDCDC;
            border-bottom: 1px solid #DCDCDC;
            transform: translate(-50%, -50%);
        }
    }
</style>
<script>
    export default {
        props: ["status","option"],
        data() {
            return {
                type:this.option.type,
                months: [],
                years: [],
                days: [],
                meridiems:['上午','下午'],
                hours:[],
                minutes:[],
                fontSize: ''
            }
        },
        computed: {
            showStatus(){
                return this.status;
            },
            initOffsetMonth() {
                let value = -this.months.indexOf(this.option.startDate.month) * this.fontSize * 3;
                this.month && (this.month.offset = value);
                return value
            },
            initOffsetYear() {
                let value = -this.years.indexOf(this.option.startDate.year) * this.fontSize * 3;
                this.year && (this.year.offset = value);
                return value
            },
            initOffsetDay() {
                let value = -this.days.indexOf(this.option.startDate.day) * this.fontSize * 3;
                this.day && (this.day.offset = value);
                return value
            },
            initOffsetMeridiem() {
                let value = -this.meridiems.indexOf(this.option.startTime.meridiem) * this.fontSize * 3;
                this.meridiem && (this.meridiem.offset = value);
                return value
            },
            initOffsetHour() {
                let value = -this.hours.indexOf(this.option.startTime.hour) * this.fontSize * 3;
                this.hour && (this.hour.offset = value);
                return value
            },
            initOffsetMinute() {
                let value = -this.minutes.indexOf(this.option.startTime.minute) * this.fontSize * 3;
                this.minute && (this.minute.offset = value);
                return value
            }

        },
        methods: {
            cancel(){
                this.$emit('cancel');
            },
            saveDate() {
                if(this.type=="date"){
                    let step = ~~(3 * this.fontSize),
                            yearTop = Math.abs(this.year.offset),
                            monthTop = Math.abs(this.month.offset),
                            dayTop = Math.abs(this.day.offset);
                    let yearValue = this.years[Math.min(99, ~~(yearTop / step))];
                    let monthValue = this.months[~~(monthTop / step)];
                    let dayValue = this.days[~~(dayTop / step)];
                    this.$emit('confirm', {
                        year: yearValue,
                        month: monthValue,
                        day: dayValue
                    });
                }
                else if(this.type=="time"){
                    let step = ~~(3 * this.fontSize),
                            meridiemTop = Math.abs(this.meridiem.offset),
                            hourTop = Math.abs(this.hour.offset),
                            minuteTop = Math.abs(this.minute.offset);
                    let meridiemValue = this.meridiems[~~(meridiemTop / step)];
                    let hourValue = this.hours[~~(hourTop / step)];
                    let minuteValue = this.minutes[~~(minuteTop / step)];
                    this.$emit('confirm', {
                        meridiem: meridiemValue,
                        hour: hourValue,
                        minute: minuteValue
                    });
                }
                else{

                }

            },

            touchstart(e, type) {
                e.preventDefault();
                e.stopPropagation();
                this[type].startY = e.touches[0].clientY;
                this[type].speeds = [];
                this[type].time = Date.now()
            },
            touchmove(e, type) {
                e.preventDefault();
                e.stopPropagation();
                let offset = e.touches[0].clientY - this[type].startY;
                let disance = this[type].offset + offset;
                if (Math.abs(offset) % (3 * this.fontSize) === 0) {
                    let time = Date.now();
                    this[type].speeds.push((Math.abs(offset) / (time - this[type].time)).toFixed(2))
                }
                if (disance > 0) {
                    disance = 0;
                    this[type].limit = true;
                    return
                }
                if (disance < -this[type].maxOffset) {
                    disance = -this[type].maxOffset;
                    this[type].limit = true;
                    return
                }
                this[type].limit = false;
                this[type].node.style.transition = "none";
                this[type].node.style.transform = `translate3d(0, ${disance}px, 0)`
            },
            touchend(e, type) {
                e.preventDefault();
                e.stopPropagation();
                let currentOffset = e.changedTouches[0].clientY - this[type].startY;
                let minScroll, maxScroll, offset = this[type].offset, fontSize = this.fontSize;
                this[type].speeds = this[type].speeds.map((v) => {
                            if (v !== "Infinity" || !v)
                {
                    return v
                }
            })
                let scroll = false;
                let max = 0
                for (let i of this[type].speeds.slice(-2)) {
                    if (i * 1 > 1) {
                        scroll = true
                    }
                }
                if (scroll && !this[type].limit) {
                    max = ~~Math.max.apply(null, this[type].speeds)
                    maxScroll = Math.min(offset + (max * 10 * 3 * fontSize), 0)
                    minScroll = Math.max(offset - (max * 10 * 3 * fontSize), -(this[type].maxOffset))
                    this[type].offset = currentOffset > 0 ? maxScroll : minScroll
                    let speed = Math.min.apply(null, this[type].speeds)
                    let speedTime = speed > 1 ? 0.2 : speed
                    if (type === "year") {
                        speedTime = speed > 2 ? speed / 2 : speed
                    }
                    this[type].node.style.transition = `all ${speedTime}s ease-out`;
                    this[type].node.style.transform = `translate3d(0, ${this[type].offset}px, 0)`;
                    return
                }
                this[type].node.style.transition = "all .15s ease-out";
                if (this[type].limit) {
                    if (currentOffset > 0) {
                        this[type].node.style.transform = `translate3d(0, 0, 0)`;
                        this[type].offset = 0
                    } else {
                        this[type].node.style.transform = `translate3d(0, -${this[type].maxOffset}px, 0)`;
                        this[type].offset = -(this[type].maxOffset)
                    }
                } else {
                    let perfect;
                    this[type].offset += currentOffset;
                    let next = 0;
                    let height = 3 * fontSize;
                    let index = ~~(Math.abs(this[type].offset) / height);
                    let step = index * height;
                    let nextStep = (index + 1) * height;
                    if (nextStep - Math.abs(this[type].offset) < Math.abs(this[type].offset) - step && index !== 11 && index !== 0) {
                        next = 1
                    }
                    perfect = next ? nextStep : step;
                    this[type].offset = -perfect;
                    this[type].node.style.transform = `translate3d(0, -${perfect}px, 0)`
                }
            },
            touchstartMonth(e) {
                this.touchstart(e, "month")
            },
            touchmoveMonth(e) {
                this.touchmove(e, "month")
            },
            touchendMonth(e) {
                this.touchend(e, "month")
            },
            touchstartYear(e) {

                this.touchstart(e, "year")
            },
            touchmoveYear(e) {
                this.touchmove( e, "year")
            },
            touchendYear(e) {
                this.touchend(e, "year")
            },
            touchstartDay(e) {
                this.touchstart(e, "day")
            },
            touchmoveDay(e) {
                this.touchmove(e, "day")
            },
            touchendDay(e) {
                this.touchend(e, "day")
            },
            touchstartMeridiem(e) {
                this.touchstart(e, "meridiem")
            },
            touchmoveMeridiem(e) {
                this.touchmove(e, "meridiem")
            },
            touchendMeridiem(e) {
                this.touchend(e, "meridiem")
            },
            touchstartHour(e) {
                this.touchstart(e, "hour")
            },
            touchmoveHour(e) {
                this.touchmove(e, "hour")
            },
            touchendHour(e) {
                this.touchend(e, "hour")
            },
            touchstartMinute(e) {
                this.touchstart(e, "minute")
            },
            touchmoveMinute(e) {
                this.touchmove(e, "minute")
            },
            touchendMinute(e) {
                this.touchend(e, "minute")
            }
        },
        mounted() {
            let self = this;
            this.$nextTick(function () {
                self.fontSize = parseFloat(getComputedStyle(document.querySelector('.modal-wrapper'))['font-size'].replace(/px/g, ""));
                if(self.type=="date") {
                    let year = 0, month = 0, day = 0, fontSize = self.fontSize, yearLimit = 40, currentYear = new Date().getFullYear() + Math.floor(yearLimit / 2);
                    if (this.option.yearScope) {
                        yearLimit = this.option.yearScope[1] - this.option.yearScope[0];
                        currentYear = this.option.yearScope[1];
                    }
                    while (year <= yearLimit) {
                        this.years.unshift(currentYear - year);
                        year++
                    }
                    while (month < 12) {
                        this.months.push(month + 1);
                        month++
                    }
                    while (day < 31) {
                        this.days.push(day + 1);
                        day++
                    }
                    this.month = {
                        node: document.querySelector(".month"),
                        offset: 0,
                        maxOffset: ~~((12 - 1) * 3 * fontSize)//去除小数部分
                    };
                    this.year = {
                        node: document.querySelector(".year"),
                        offset: 0,
                        maxOffset: ~~(yearLimit * 3 * fontSize)
                    };
                    this.day = {
                        node: document.querySelector(".day"),
                        offset: 0,
                        maxOffset: ~~((31 - 1) * 3 * fontSize)
                    }
                }
                else if(self.type=="time"){
                    let hour = 0, minute = 0, fontSize = self.fontSize;
                    let minuteSpan =this.option.minuteSpan?this.option.minuteSpan:5;
                    while (hour < 12) {
                        this.hours.push(hour + 1);
                        hour++
                    }
                    while (minute < 60) {
                        if(minute<10){
                            this.minutes.push('0'+minute);
                        }
                        else{
                            this.minutes.push(minute);
                        }
                        minute= minute+minuteSpan;
                    }
                    this.meridiem = {
                        node: document.querySelector(".meridiem"),
                        offset: 0,
                        maxOffset: ~~((2 - 1) * 3 * fontSize)//去除小数部分
                    };
                    this.hour = {
                        node: document.querySelector(".hour"),
                        offset: 0,
                        maxOffset: ~~((12 - 1)* 3 * fontSize)
                    };
                    this.minute = {
                        node: document.querySelector(".minute"),
                        offset: 0,
                        maxOffset: ~~((60/minuteSpan - 1) * 3 * fontSize)
                    }
                }
                else{}
            });
        }
    }
</script>
