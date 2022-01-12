const monti = [
  {
    name: "Simpler Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fkfgljhsdlfkjh'.png?v=1628209258798"
  },
  {
    name: "Blue Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fwehflajdshf.png?v=1628209259029"
  },
  {
    name: "Red Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fsfdkghlskjdfg.png?v=1628209261157"
  },
  {
    name: "Camo Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Ffsdkjgdfkjgsf.png?v=1628209257607"
  },
  {
    name: "Tropical Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fdsfgsdfgsfdg.png?v=1628209256785"
  },
  {
    name: "Jaded Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fgfiudgskfljdsglksjdfg.png?v=1628209258059"
  },
  {
    name: "Deserted Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Fdfsgdsfgsdfg.png?v=1628209256520"
  },
  {
    name: "Blurple Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2Ffsgfdgsdf.png?v=1628209257353"
  },
  {
    name: "Playful Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2014.png?v=1625970745675"
  }
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

wallpapers(monti, document.getElementById("monti"));
