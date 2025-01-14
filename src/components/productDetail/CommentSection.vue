<template>
    <div style="display: flex; flex-direction: column; width: 100%;">
        <div v-for="(review, index) in reviews" :key="index" class="Container">
            <div style="display: flex;">
                <i class="fa-solid fa-user" style="border:1px solid black; border-radius: 25px; overflow: hidden; width: 30px; height: 30px; margin-right: 10px;"></i>
                <div >
                    <p style="font-size: 16px; color:blue; ">{{review.username}}</p>
                    <p style="font-size: 10px; color:#64748B; ">{{review.Date}}</p>
                </div>
            </div>
            <p>{{ review.comment }}</p>
        </div>
        <textarea id="message" rows="4" class="text" @input="autoResize"  placeholder="Write your comment here"></textarea>
    </div>

</template>
<script>
    export default {
        props:{
            reviews: Array
        },

        methods: {
            autoResize(event) {
            const textarea = event.target;
            textarea.style.height = `${textarea.scrollHeight}px`
            },
        },
    }

</script>
<style>
.Container{
    width: 700px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    color: black;
    margin-bottom: 10px;
}
.text{
    display: block;
    width: 100%;
    height: auto;
    color:black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
}
</style>
