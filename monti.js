const monti = [
  {
    name: "Simpler Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2010.png?v=1625970228395"
  },
  {
    name: "Blue Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%207.png?v=1625970226237"
  },
  {
    name: "Red Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%209.png?v=1625970226442"
  },
  {
    name: "Camo Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%208.png?v=1625970227107"
  },
  {
    name: "Tropical Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2012.png?v=1625970227183"
  },
  {
    name: "Jaded Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2011.png?v=1625970227385"
  },
  {
    name: "Deserted Monti",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork%2013.png?v=1625970227448"
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
