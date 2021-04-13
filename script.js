//always https

if(location.protocol=='http:') location.protocol='https:'

// define wallpapers

const phone = [
  {
    name: "Dark Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%2010.jpg?v=1608790908221"
  },
  {
    name: "Light Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%2011.jpg?v=1608790908853"
  },
  {
    name: "Black Sunrise",
    url:
      "https://cdn.glitch.com/d0fa6b61-e860-4765-97ea-a5311c63565b%2FIMG_1062.PNG?v=1611711151289"
  },
  {
    name: "River Rise",
    url:
      "https://cdn.glitch.com/d0fa6b61-e860-4765-97ea-a5311c63565b%2FUntitled_Artwork.png?v=1613525257199"
  },
  {
    name: "Pixel Hills",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%205.png?v=1613899171504"
  },
  {
    name: "Simple Pastels",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%201.png?v=1613899171768"
  },
  {
    name: "Beach Gradient I",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%202.png?v=1613899172212"
  },
  {
    name: "Beach Gradient II",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%207.png?v=1613899175334"
  },
  {
    name: "Simple Sur Hills",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_1151.png?v=1614115555034"
  },
  {
    name: "African Sunrise",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_1157.png?v=1614115555722"
  },
  {
    name: "Pastel Blobs Alt",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork_1.png?v=1615598528054"
  },
  {
    name: "Blurple Hills",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork_2.png?v=1616627001439"
  }
];

const tablet = [
  {
    name: "Rainbow Strips",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_0644.JPG?v=1607662904105"
  },
  {
    name: "Beach Gradient",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%203.png?v=1613899175676"
  },
  {
    name: "Pastel Blobs I",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_0802.JPG?v=1607662906294"
  },
  {
    name: "Pastel Blobs II",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_0803.JPG?v=1607662907551"
  },
  {
    name: "Dark Circles",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%203.jpg?v=1608607302992"
  },
  {
    name: "Light Circles",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%202.jpg?v=1608607292234"
  },
  {
    name: "Dark Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%207.jpg?v=1608790911027"
  },
  {
    name: "Light Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%206.jpg?v=1608790911151"
  },
  {
    name: "Pastel Waves",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FPastel_Ultimate.jpg?v=1608607220771"
  },
  {
    name: "Ocean Sunset",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork.jpg?v=1608607219937"
  },
  {
    name: "Paper Cut",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%201.jpg?v=1608607225371"
  },

  {
    name: "Green Circle",
    url:
      "https://cdn.glitch.com/d0fa6b61-e860-4765-97ea-a5311c63565b%2FIMG_1061.PNG?v=1611711162116"
  },
  {
    name: "Blurple Hills",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork.png?v=1615598526766"
  }
];

const desktop = [
  {
    name: "Blurple Hills",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork_3.png?v=1616627027286"
  },
  {
    name: "Dark Circles",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%205.jpg?v=1608609039720"
  },
  {
    name: "Light Circles",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%204.jpg?v=1608609040012"
  },
  {
    name: "Dark Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%209.jpg?v=1608790910325"
  },
  {
    name: "Light Mountains",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FUntitled_Artwork%208.jpg?v=1608790910034"
  },
  {
    name: "Cloudy Hills",
    url:
      "https://cdn.glitch.com/d0fa6b61-e860-4765-97ea-a5311c63565b%2FIMG_1059.PNG?v=1611711155003"
  },
  {
    name: "Colorful Eclipse",
    url:
      "https://cdn.glitch.com/d0fa6b61-e860-4765-97ea-a5311c63565b%2FIMG_1063.PNG?v=1611711152705"
  },
  {
    name: "Simple Sur",
    url:
      "https://cdn.glitch.com/7525577f-9680-4324-9540-3ef3c7eb588d%2FIMG_1153.png?v=1614115555399"
  },
  {
    name: "Weather",
    url:
      "https://cdn.glitch.com/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883%2FUntitled_Artwork_3.png?v=1615598527317"
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
            style="border-radius: 3px;"
            alt="${wallpaper.name}"
          /><br />
          <span>${wallpaper.name}</span>
        </button></a
      >`;
  }
}

wallpapers(phone, document.getElementById("phone"));
wallpapers(tablet, document.getElementById("tablet"));
wallpapers(desktop, document.getElementById("desktop"));
