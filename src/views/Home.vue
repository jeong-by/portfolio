<template>
    <div>
        <!-- 네이게이션 Bar -->
        <nave-bar></nave-bar>
        <greetings id="greeting"></greetings>
        <about id="about"></about>
        <usable id="usable"></usable>
        <carousel id="carousel"></carousel>
        <!-- <project id="project"></project> -->
        <service id="service"></service>
        <contact id="contact"></contact>
        <thanks></thanks>
    </div>
</template>


<script>
import NaveBar from "../components/NavBar.vue";
import Greetings from "../views/Greetings.vue";
import About from "../views/About.vue";
import usable from "../views/Usable.vue";
// import Project from "../views/Project.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";
import Thanks from "../views/Thanks.vue";
import Carousel from "../views/Carousel.vue";
export default {
    components: {
        NaveBar,
        Greetings,
        About,
        usable,
        // Project,
        Service,
        Contact,
        Thanks,
        Carousel,
    }
}
</script>