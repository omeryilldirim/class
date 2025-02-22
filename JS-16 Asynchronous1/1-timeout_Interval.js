//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//! html de scriptte async veya defer kullandığımızda script yüklerken diğer ögeleri de yüklemeye devam ediyor yani script i async olarak çalıştırıyor. non-blocking
//!  <script defer or async rel="" href="" />

//* Senkron
//* ------------------------------------------------
// const wait = (waitingTime) => {
//   const starTime = new Date().getTime()
//   while (new Date().getTime() < starTime + waitingTime) {}
// }

// console.log("hello")
// // alert("hi") //? blocking code
// console.time("myTimer")
// wait(2000) //? blocking code
// console.timeEnd("myTimer")
// console.log("fs13")

//* Asenkron (setTimeout)
//*------------------------------------------------

// console.log("Timeout started")
// setTimeout(() => {
//   //? non-blocking code- asyn
//   console.log("1 sec")
// }, 1000)
// console.log("Timeout finished")

// setTimeout(() => {
//   //? non-blocking code- asyn
//   console.log("2 sec")
// }, 1000)

//* Asenkron (setInterval, clearInterval)
//*------------------------------------------------

// console.log("Timer started")
// let counter = 0
// let sec1 = setInterval(() => {
//   console.log(++counter)
//   if (counter > 3) {
//     clearInterval(sec1)
//     console.log("Timer stoped")
//   }
// }, 1000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
//! Callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi")
  setTimeout(() => {
    console.log("Sarah: Hello")
    setTimeout(() => {
      console.log("John: How Are you?")
      setTimeout(() => {
        console.log("Sarah:Fine and you?")
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
