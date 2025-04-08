<template>
  <div class="footer mt-6">
    <!-- Left: Brand & Payment -->
    <div class="infos">
      <h3 class="text-3xl sm:text-4xl font-bold">PhoneEdge</h3>
      <p class="text-base mt-2">WE ACCEPT</p>
      <div class="payingMethod">
        <img src="/ABA.png" alt="ABA" />
        <img src="/Acleda.png" alt="Acleda" />
        <img src="/Canadia.png" alt="Canadia" />
        <img src="/PayPal.png" alt="PayPal" />
        <img src="/VISA.png" alt="VISA" />
        <img src="/Wing.png" alt="Wing" />
      </div>
    </div>

    <!-- Right: Social & Contact -->
    <div class="contact">
      <!-- Socials -->
      <div class="wrapper">
        <h4 class="section-title">FOLLOW US</h4>
        <div class="new">
          <i class="fa-brands fa-facebook"></i
          ><a href="https://facebook.com">Facebook</a>
          <i class="fa-brands fa-tiktok"></i
          ><a href="https://tiktok.com">TikTok</a>
          <i class="fa-brands fa-youtube"></i
          ><a href="https://youtube.com">YouTube</a>
          <i class="fa-brands fa-threads"></i
          ><a href="https://threads.net">Threads</a>
        </div>
      </div>

      <!-- Contact -->
      <div class="wrapper">
        <h4 class="section-title">CONTACT US</h4>
        <div class="new one">
          <i class="fa-regular fa-envelope"></i
          ><a href="mailto:info@PhoneEdge.com">info@PhoneEdge.com</a>
          <i class="fa-solid fa-phone"></i>
          <p>(+855) 018 116 666</p>
          <i class="fa-solid fa-phone"></i>
          <p>(+855) 061 116 666</p>
          <i class="fa-brands fa-telegram"></i
          ><a href="https://t.me/c/2252504820/1" target="_blank">Telegram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: black;
  font-family: serif;
  color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 40px;
}

.infos {
  flex: 1 1 300px;
}

.payingMethod {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.payingMethod img {
  height: 32px;
  background-color: white;
  border-radius: 4px;
  padding: 2px;
}

.contact {
  flex: 1 1 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.wrapper {
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.new {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

.new.one {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact {
    flex-direction: column;
    gap: 20px;
  }

  .new,
  .new.one {
    grid-template-columns: 1fr 3fr;
  }

  .payingMethod {
    justify-content: flex-start;
  }
}
</style>
