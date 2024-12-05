<template>
    <div class="footer">
        <div class="infos">
            <h3 style="font-size: 40px; font-weight: bold; display: flex">PhoneEdge</h3>
            <p style="font-size: 16px; display: flex;">WE ACCEPT</p>
            <div class="payingMethod">
                  <img src="@/assets/images/ABA.png" style="height: 32px;" alt="Bank">
                  <img src="@/assets/images/Acleda.png" style="height: 32px;" alt="Bank">
                  <img src="@/assets/images/Canadia.png" style="height: 32px;" alt="Bank">
                  <img src="@/assets/images/PayPal.png" style="background-color: white; border: 1px; border-radius: 3px; height: 25px; display: flex; align-items: end; margin-top: 3px; margin-right: 4px" alt="Bank">
                  <img src="@/assets/images/VISA.png" style="background-color: white; border: 1px; border-radius: 3px; height: 25px; display: flex; align-items: end; margin-top: 3px; margin-right: 5px;" alt="Bank">
                  <img src="@/assets/images/Wing.png" style="background-color: greenyellow; border: 1px; border-radius: 3px; height: 25px; display: flex; align-items: end; margin-top: 3px;" alt="Bank">
            </div>
        </div>

        <div class="contact">
            <div class="wrapper">
                <h4 style="align-self: center; font-size: 17px;">FOLLOW US</h4>
                <div class="new">
                    <i class="fa-brands fa-facebook" ></i>
                    <p>Facebook</p>
                    <i class="fa-brands fa-tiktok" ></i>
                    <p>TikTok</p>
                    <i class="fa-brands fa-youtube"></i>
                    <p>YouTube</p>
                    <i class="fa-brands fa-threads"></i>
                    <p>Threads</p>
                </div>
            </div>

            <div class="wrapper" style="margin-right: 100px;">
                <h4 style="align-self: center; font-size: 17px;">CONTACT US</h4>
                <div class="new">
                    <i class="fa-regular fa-envelope"></i>
                    <p >info@PhoneEdge.com</p>
                    <i class="fa-solid fa-phone" ></i>
                    <p >(+855) 018 116 666</p>
                    <i class="fa-solid fa-phone" ></i>
                    <p>(+855) 061 116 666</p>
                    <i class="fa-brands fa-telegram" ></i>
                    <p>Telegram</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.footer{
    background-color: black;
    height: 244px;
    font-family: serif;
    color: aliceblue;

    display: flex;
    padding: 30px   
}

.infos{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
}

.contact{
    font-size: 12px;
    display: flex;
}
.payingMethod{
    display: flex;
    height: 64px;
}

.wrapper{
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;
    margin-right: 30px;
    width: 150px;
}
.new{
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 15px;
    column-gap: 30px;
    height: 200px;
}
</style>


