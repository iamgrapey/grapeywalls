const pf = [
  {
    name: "Red",
    url:
      "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Redmob.png?v=1642024994029"
  },
  {
    name: "Orange",
    url: 
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Orangemob.png?v=1642024992524"
  },
  {
    name: "Yellow",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Yellowmob.png?v=1642024997110"
  },
  {
    name: "Green",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Green%208mob.png?v=1642024991421"
  },
  {
    name: "Blue",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Bluemob.png?v=1642024991095"
  },
  {
    name: "Purple",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Purplemob.png?v=1642024992921"
  },
  {
    name: "Black",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Blackmob.png?v=1642024990340"
  },
  {
    name: "Grey",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Whitemob.png?v=1642024995977"
  }
];

const df = [
  {
    name: "Red",
    url:
      "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Red_desk.png?v=1642024993375"
  },
  {
    name: "Orange",
    url: 
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Orange_desk.png?v=1642024993001"
  },
  {
    name: "Yellow",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Yellow_desk.png?v=1642024996735"
  },
  {
    name: "Green",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Green_desk.png?v=1642024991940"
  },
  {
    name: "Blue",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Blue_desk.png?v=1642024990618"
  },
  {
    name: "Purple",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Purple_desk.png?v=1642024992822"
  },
  {
    name: "Black",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Black_desk.png?v=1642024990459"
  },
  {
    name: "Grey",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/White_desk.png?v=1642024994365"
  },
  {
    name: "Red Commander",
    url:
      "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Red_Commander.png?v=1642025008936"
  },
  {
    name: "Orange Commander",
    url: 
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Orange_Commander.png?v=1642025002380"
  },
  {
    name: "Yellow Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Yellow_Commander.png?v=1642025004996"
  },
  {
    name: "Green Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Green_Commander.png?v=1642025001700"
  },
  {
    name: "Blue Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Blue_Commander.png?v=1642025001222"
  },
  {
    name: "Purple Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Purple_Commander.png?v=1642025005454"
  },
  {
    name: "Black Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/Black_Commander.png?v=1642025000919"
  },
  {
    name: "Grey Commander",
    url:
    "https://cdn.glitch.global/a18e5a35-4fbf-4b73-b9f5-c51b2d2d5883/White_Commander.png?v=1642024996996"
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

wallpapers(pf, document.getElementById("pf"));
wallpapers(df, document.getElementById("df"));
