const pf = [
  {
    name: "Sunset",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1648.PNG?v=1626412453399"
  },
  {
    name: "Sunrise",
    url: 
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1647.PNG?v=1626412455750"
  },
  {
    name: "Stripes of Pride (Dark)",
    url:
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1645.PNG?v=1626412455307"
  },
  {
    name: "Stripes of Pride (Light)",
    url:
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1646.PNG?v=1626412457352"
  },
  {
    name: "Overlapping (Dark)",
    url:
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1657.PNG?v=1626412457168"
  },
  {
    name: "Overlapping (Light)",
    url:
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1656.PNG?v=1626412456099"
  },
  {
    name: "Between The Mountains",
    url:
    "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1649.PNG?v=1626412454786"
  }
];

const tf = [
  {
    name: "Overlapping (Dark)",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1650.PNG?v=1626412455448"
  },
   {
    name: "Overlapping (Light)",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1651.PNG?v=1626412456133"
  },
   {
    name: "The Fields",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1654.PNG?v=1626412456400"
  }
];

const df = [
  {
    name: "Overlapping (Dark)",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1653.PNG?v=1626412457826"
  },
  {
    name: "Overlapping (Light)",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1652.PNG?v=1626412457986"
  },
  {
    name: "The Fields",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FIMG_1655.PNG?v=1626412457887"
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
