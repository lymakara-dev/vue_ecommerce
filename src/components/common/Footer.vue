<template>
  <div class="footer mt-4">
    <div class="infos">
      <h3 style="font-size: 40px; font-weight: bold; display: flex">
        PhoneEdge
      </h3>
      <p style="font-size: 16px; display: flex">WE ACCEPT</p>
      <div class="payingMethod">
        <img src="@/assets/images/ABA.png" style="height: 32px" alt="Bank" />
        <img src="@/assets/images/Acleda.png" style="height: 32px" alt="Bank" />
        <img
          src="@/assets/images/Canadia.png"
          style="height: 32px"
          alt="Bank"
        />
        <img
          src="@/assets/images/PayPal.png"
          style="
            background-color: white;
            border: 1px;
            border-radius: 3px;
            height: 25px;
            display: flex;
            align-items: end;
            margin-top: 3px;
            margin-right: 4px;
          "
          alt="Bank"
        />
        <img
          src="@/assets/images/VISA.png"
          style="
            background-color: white;
            border: 1px;
            border-radius: 3px;
            height: 25px;
            display: flex;
            align-items: end;
            margin-top: 3px;
            margin-right: 5px;
          "
          alt="Bank"
        />
        <img
          src="@/assets/images/Wing.png"
          style="
            background-color: greenyellow;
            border: 1px;
            border-radius: 3px;
            height: 25px;
            display: flex;
            align-items: end;
            margin-top: 3px;
          "
          alt="Bank"
        />
      </div>
    </div>

    <div class="contact">
      <div class="wrapper 1">
        <h4 style="align-items: center; font-size: 17px">FOLLOW US</h4>
        <div class="new">
          <i class="fa-brands fa-facebook"></i>
          <a href="https://www.facebook.com">Facebook</a>
          <i class="fa-brands fa-tiktok"></i>
          <a href="https://www.tiktok.com">TikTok</a>
          <i class="fa-brands fa-youtube"></i>
          <a href="https://www.tiktok.com">YouTube</a>
          <i class="fa-brands fa-threads"></i>
          <a href="https://www.tiktok.com">Threads</a>
        </div>
      </div>

      <div class="wrapper" style="margin-right: 100px">
        <h4 style="align-items: center; font-size: 17px">CONTACT US</h4>
        <div class="new one">
          <i class="fa-regular fa-envelope"></i>
          <a href="mailto:kongsopheakvortey@gmail.com">info@PhoneEdge.com</a>
          <i class="fa-solid fa-phone"></i>
          <p>(+855) 018 116 666</p>
          <i class="fa-solid fa-phone"></i>
          <p>(+855) 061 116 666</p>
          <i class="fa-brands fa-telegram"></i>
          <a
            href="https://t.me/c/2252504820/1"
            target="_blank"
            rel="noopener noreferrer"
            >Telegram</a
          >
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
  padding: 30px;
}

.infos {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.contact {
  font-size: 12px;
  display: flex;
  gap: 100px;
}
.payingMethod {
  display: flex;
  height: 64px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 30px;
  width: 150px;
}
.new {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  align-items: center;
  font-size: 15px;
  column-gap: 20px;
  height: 200px;
}

@media only screen and (max-width: 1140px) {
  .wrapper {
    flex-direction: row;
    width: auto;
    flex-wrap: wrap;
  }
  .footer,
  .contact {
    flex-direction: column;
    width: auto;
    gap: 0;
  }
  .new {
    grid-auto-flow: column;
    grid-template-columns: auto;
    padding-left: 60px;
    height: 50px;
  }

  .new.one {
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    padding-left: 60px;
    height: 50px;
  }
}

@media only screen and (max-width: 870) {
  .new.one {
    grid-auto-rows: 2fr;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 60px;
    height: 50px;
    background-color: pink;
  }
}
</style>
