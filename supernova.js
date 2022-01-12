const pf = [
  {
    name: "Peach Please",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIBYOufho.png?v=1628244031969"
  },
  {
    name: "Damn Dry",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FOIUNFH%26B.png?v=1628244034738"
  },
  {
    name: "Chernobyl Chaos",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FJHKjhkjhgdf.png?v=1628244034371"
  },
  {
    name: "Glowing Glare",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FjHHGKDUVY.png?v=1628244034317"
  },
  {
    name: "Icy Ignition",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FJHDHKFJ.png?v=1628244034246"
  },
  {
    name: "TikTok Tryhard",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FYGJHDF765.png?v=1628244034775"
  },
  {
    name: "Scape Slide",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FKJHDKLVJ.png?v=1628244034518"
  },
  {
    name: "Bath Bomb",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FJHHGDSKJFHSD.png?v=1628244032230"
  },
];

const tf = [
  /*{
    name: "Overlapping (Dark)",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1650.PNG?v=1626412455448"
  },
*/
];

const df = [
  {
    name: "Peach Please",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%206.png?v=1628207706434"
  },
  {
    name: "Damn Dry",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%207.png?v=1628207707308"
  },
  {
    name: "Chernobyl Chaos",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%208.png?v=1628207706897"
  },
  {
    name: "Glowing Glare",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%209.png?v=1628207707517"
  },
  {
    name: "Icy Ignition",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2013.png?v=1628207709375"
  },
  {
    name: "TikTok Tryhard",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2011.png?v=1628207707609"
  },
  {
    name: "Scape Slide",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2012.png?v=1628207708841"
  },
  {
    name: "Bath Bomb",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2010.png?v=1628207708073"
  },
];

// add to html
function wallpapers(json, element) {
  var i;
  for (i = 0; i < json.length; i++) {
    const wallpaper = json[i];
    console.log(wallpaper);
    element.innerHTML += `
    <a
        href="${wallpaper.url}"
        target="_blank"
        rel="noopener"
      >
        <button class="block inline">
          <img
            src="${wallpaper.url}"
            width="270px"
            style="border-radius: 10px;"
            alt="${wallpaper.name}"
          /><br />
          <span>${wallpaper.name}</span>
        </button></a
      >`;
  }
}

wallpapers(pf, document.getElementById("pf"));
wallpapers(tf, document.getElementById("tf"));
wallpapers(df, document.getElementById("df"));
