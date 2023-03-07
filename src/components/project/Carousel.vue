<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src=imageArray1[0]
      ></b-carousel-slide> -->

      <!-- Slides with image only -->
      <b-carousel-slide v-for="(item,index) in selectedArray" :key="index" :img-src="item"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    props:['type'],
    data() {
      return {
        selectedArray:[],
        slide: 0,
        sliding: null,
        imageArray1:[require('../../assets/project/image1-1.png'),require('../../assets/project/image1-2.png'),require('../../assets/project/image1-3.png'),require('../../assets/project/image1-4.png')],
        imageArray2:[require('../../assets/project/image2-1.png'),require('../../assets/project/image2-2.png'),require('../../assets/project/image2-3.png'),require('../../assets/project/image2-4.png')],
        imageArray3:[require('../../assets/project/image3-1.png'),require('../../assets/project/image3-2.png'),require('../../assets/project/image3-3.png')],
        imageArray4:[require('../../assets/project/image5-1.jpg'),require('../../assets/project/image5-2.jpg'),require('../../assets/project/image5-3.jpg'),require('../../assets/project/image5-4.jpg'),],
        imageArray5:[require('../../assets/project/image4-1.png'),require('../../assets/project/image4-2.png'),require('../../assets/project/image4-3.jpg')],
        imageArray6:[require('../../assets/project/image6-1.png'),require('../../assets/project/image6-2.png'),require('../../assets/project/image6-3.png'),require('../../assets/project/image6-4.png'),require('../../assets/project/image6-5.png'),require('../../assets/project/image6-6.png')]
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    created() {
      if(this.type==1) {
        this.selectedArray = this.imageArray1;
      }
      else if (this. type==2) {
        this.selectedArray = this.imageArray2;
      }
      else if (this. type==3) {
        this.selectedArray = this.imageArray3;
      }
      else if (this. type==4) {
        this.selectedArray = this.imageArray4;
      }
      else if (this.type==5) {
        this.selectedArray = this.imageArray5;
      }
      else if (this.type==6) {
        this.selectedArray = this.imageArray6;
      }
      
    }
  }
</script>