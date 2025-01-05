<template>
    <div style="display: flex; flex-direction: column; width: 100%;">
        <div class="Container">
            <div style="display: flex;">
                <i class="fa-solid fa-user" style="border:1px solid black; border-radius: 25px; overflow: hidden; width: 30px; height: 30px; margin-right: 10px;"></i>
                <!-- <img src="" alt="Profile Picture"  width="50px" height="50px" style=""> -->
                <div>
                    <p style="font-size: 16px; color:blue; ">Anonymous</p>
                    <p style="font-size: 10px; color:#64748B; ">12:01am - 17/11/2024</p>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid blanditiis libero illo doloribus, dolore totam nam, quod nemo temporibus tenetur? Reprehenderit officiis non ratione saepe ducimus dolorem quia recusandae.</p>  
            </div>
        </div>
        <div>
            <textarea id="message" rows="4" class="text" @input="autoResize"  placeholder="Write your comment here"></textarea>
        </div>
    </div>

</template>
<script>

    export default {

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
    background-color:rgb(136, 203, 250);
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
    background-color:rgb(136, 203, 250);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
}
</style>
