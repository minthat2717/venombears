var p = document.getElementById("replace-me");
var t = document.getElementById("title");
var t1 = "Phase 1: Bearlicious Beginnings";
var t2 = "Phase 2: Bear-mingling and Playful Ventures";
var t3 = "Phase 3: Bear's Awakening and the Web Wonder";
var t4 = "Phase 4: Bear's Grand Entrance and Community Empowerment";
var t5 = "Phase 5: Unleashing Bear-ific Tokens and the Wonderland";
var t6 = "Phase 6: Crafting Bear Legends and Community-led Adventures";
var p1 =
  "Welcome to the wild world of Venom Bears! Our journey kicks off by selecting the fantastic Venom Blockchain as our home sweet home. We've got our paws busy creating a Twitter presence and a hopping Discord community where bear lovers unite! Together, we'll weave a tapestry of art that captures the essence of these adorable creatures. Get ready to dive into the bear-tastic realm of Venom Bears!";
var p2 =
  "As our bear tribe grows, we're thrilled to collaborate with other amazing projects within the Venom realm. We're putting our paws together to enhance the ecosystem, creating a delightful token inside Discord for some playful community games. Ever heard of the legendary \"Bear Shop\"? It's our exclusive spot where you can snag Whitelist spots for Venom Bears and other cool projects. Let's become the OGs of Venom, spreading joy and unity along the way!";
var p3 =
  "The bears are about to make a splash in the NFT world! Minting our unique collection on the testnet of Venom, we're gearing up to unveil our marvelous website. Brace yourself for mind-blowing marketing campaigns that'll have the whole digital realm buzzing with excitement. The world will witness the charm of Venom Bears firsthand, captivating hearts and sparking a wave of bear mania!";
var p4 =
  "It's showtime! As the mainnet of Venom beckons, we'll proudly mint our enchanting Venom Bears. Within our lively Discord realm, special roles and channels will be crafted, providing exclusive havens for our cherished bear holders to connect and thrive. But here's the best part—our community's voice matters! We'll establish a democratic DAO, where you have a say in how we shape our bear-y awesome future.";

var p5 =
  "Introducing the mighty $BEAR token! It's time for our bears to roam freely in the Venom Mainnet. Get ready to step into the incredible \"Bear Shop,\" where you can snag Whitelist spots and precious NFTs using the delightful $BEAR token. We've created a bustling marketplace, filled with endless wonders and boundless opportunities. Let the bear revolution take center stage!";

var p6 =
  "Our story doesn't end here; it's just the beginning of an ever-evolving adventure! The Venom Bears project is built upon the spirit of our community. You, the bear enthusiasts, hold the reins to our future. Together, we'll continue to shape new horizons, embark on thrilling escapades, and create a legacy that celebrates the magic of bears. Let's paint the digital realm with our joyful bear vibes and leave a mark that'll last forever!";

//   phase1
document.querySelector("#open-popup1").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t1;
  p.innerText = p1;
});
//  phase 2
document.querySelector("#open-popup2").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t2;
  p.innerText = p2;
});

// phase 3
document.querySelector("#open-popup3").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t3;
  p.innerText = p3;
});
// phase 4
document.querySelector("#open-popup4").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t4;
  p.innerText = p4;
});
// phase 5
document.querySelector("#open-popup5").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t5;
  p.innerText = p5;
});
// phase 5
document.querySelector("#open-popup6").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t6;
  p.innerText = p6;
});
// close btn
document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.body.classList.remove("active-popup");
    document.body.classList.remove("blur-filter");
  });
