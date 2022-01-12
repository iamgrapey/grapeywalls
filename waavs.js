const dw = [
  {
    name: "Deep Seas",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1741.PNG?v=1631067755890"
  },
  {
    name: "Deep Seas Alt",
    url: "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG-1748.PNG?v=1631067763609"
  },
  {
    name: "Lemonade Stand",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1739.PNG?v=1631067756056"
  },
  {
    name: "Lemonade Stand Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1739.PNG?v=1631067756056"
  },
  {
    name: "Pretty Dull",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1743.PNG?v=1631067756565"
  },
  {
    name: "Pretty Dull Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG-1750.PNG?v=1631067761258"
  },
  {
    name: "Turquoise",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1740.PNG?v=1631067756608"
  },
  {
    name: "Turquoise Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG-1747.PNG?v=1631067764956"
  },
  {
    name: "Freshly Squeezed",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1738.PNG?v=1631067756781"
  },
  {
    name: "Freshly Squeezed Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG-1745.PNG?v=1631067760309"
  },
  {
    name: "Dead Grape",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1742.PNG?v=1631067758124"
  },
  {
    name: "Dead Grape Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1749.PNG?v=1631067762267"
  },
  {
    name: "Pinky",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1737.PNG?v=1631067758470"
  },
  {
    name: "Pinky Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG-1744.PNG?v=1631067762937"
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

wallpapers(dw, document.getElementById("dw"));
