let track1 = document.getElementById("track1");
let track2 = document.getElementById("track2");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");

const tracksItemsData = {
    track1: [
      {
        sessionName: "The Beauty of JavaScript",
        imgSrc: "assets/js-logo.png",
        dateTime: "Jan 29, 9:30am",
        date: "Jan 29, 2024",
        time: "9:30 AM to 10:30 AM",
        duration: 1,
        pageLink: "js.html"
      },
      {
        sessionName: "Responsive Design & Deployment",
        imgSrc: "assets/css-img.png",
        dateTime: "Jan 29, 10:45am",
        date: "Jan 29, 2024",
        time: "10:45 AM to 12:15 PM",
        duration: 1.5,
        pageLink: "responsiveDesign.html"
      },
      {
        sessionName: "Advanced JavaScript & API Mastery",
        imgSrc: "assets/postman-api.png",
        dateTime: "Jan 29, 2pm",
        date: "Jan 29, 2024",
        time: "2:00 PM to 4:00 PM",
        duration: 2,
        pageLink: "advJS.html"
      },
      {
        sessionName: "React JS: The Jump Start",
        imgSrc: "assets/react-js-img.png",
        dateTime: "Jan 30, 9:30am",
        date: "Jan 30, 2024",
        time: "9:30 AM to 11:30 AM",
        duration: 2,
        pageLink: "react.html"
      }
    ],
    track2: [
      {
        sessionName: "Git & All of it",
        imgSrc: "assets/git-image1.png",
        dateTime: "Jan 29, 9:30am",
        date: "Jan 29, 2024",
        time: "9:30 AM to 10:30 AM",
        duration: 1,
        pageLink: "git.html"
      },
      {
        sessionName: "DIY URL Shortener",
        imgSrc: "assets/url-shortner-img.png",
        dateTime: "Jan 29, 10:45am",
        date: "Jan 29, 2024",
        time: "10:45 AM to 12:15 PM",
        duration: 1.5,
        pageLink: "url.html"
      },
      {
        sessionName: "Deploy ML Models",
        imgSrc: "assets/ml-host.png",
        dateTime: "Jan 29, 2am",
        date: "Jan 29, 2024",
        time: "2:00 PM to 4:00 PM",
        duration: 2,
        pageLink: "deployML.html"
      },
      
      {
        sessionName: "Open Source & GSOC",
        imgSrc: "assets/OpenSource-img.png",
        dateTime: "Jan 30, 9:30am",
        date: "Jan 30, 2024",
        time: "9:30 AM to 11:30 AM",
        duration: 1,
        pageLink: "openSource.html"
      },
      {
        sessionName: "Special Session",
        imgSrc: "assets/mystery.jpeg",
        dateTime: "Jan 30, 11:45am",
        date: "Jan 30, 2024",
        time: "11:45 AM to 12:45 PM",
        duration: 1,
        pageLink: "coolestThings.html"
      }
    ]
  };


  const daysItemsData = {
    day1: [
      {
        sessionName: "The Beauty of JavaScript",
        imgSrc: "assets/js-logo.png",
        track: "Track 1",
        time: "9:30 AM to 10:30 AM",
        duration: 1,
        pageLink: "js.html"
      },
      {
        sessionName: "Responsive Design & Deployment",
        imgSrc: "assets/css-img.png",
        track: "Track 1",
        time: "10:45 AM to 12:15 PM",
        duration: 1.5,
        pageLink: "responsiveDesign.html"
      },
      {
        sessionName: "Advanced JavaScript & API Mastery",
        imgSrc: "assets/postman-api.png",
        track: "Track 1",
        time: "2:00 PM to 4:00 PM",
        duration: 2,
        pageLink: "advJS.html"
      },
      {
        sessionName: "Git & All of it",
        imgSrc: "assets/git-image1.png",
        track: "Track 2",
        time: "9:30 AM to 10:30 AM",
        duration: 1,
        pageLink: "git.html"
      },
      {
        sessionName: "Deploy ML Models",
        imgSrc: "assets/ml-host.png",
        track: "Track 2",
        time: "2:00 PM to 4:00 PM",
        duration: 2,
        pageLink: "deployML.html"
      },
      {
        sessionName: "DY URL Shortener",
        imgSrc: "assets/url-shortner-img.png",
        track: "Track 2",
        time: "10:45 AM to 12:15 PM",
        duration: 2,
        pageLink: "url.html"
      }
    ],
    day2: [
      {
        sessionName: "React JS Jump Start",
        imgSrc: "assets/react-js-img.png",
        track: "Track 1",
        time: "9:30 AM to 11:30 AM",
        duration: 2,
        pageLink: "react.html"
      },
      {
        sessionName: "Open Source & GSOC",
        imgSrc: "assets/OpenSource-img.png",
        track: "Track 2",
        time: "9:30 AM to 11:30 AM",
        duration: 1,
        pageLink: "openSource.html"
      },
      {
        sessionName: "Special Session",
        imgSrc: "assets/T2E-img.png",
        track: "Track 2",
        time: "11:45 AM to 12:45 PM",
        duration: 1,
        pageLink: "mystery.jpeg"
      }
    ]
  };
  
  

// const tracksItemsData = {
//     track1: [
//         {
//             imageSrc: "assessts/OpenSource-img.png",
//             sessionName: "Open Source & Making your first OS contribution & GSOC",
//             description: [
//                 "Dive into the world of open-source software and transform from a user to a contributor.",
//                 "In this interactive workshop, you'll navigate the ecosystem of open-source projects and learn how to make your mark.",
//                 "Covering the basics of choosing a project, understanding issues, and making your first pull request, this session is your stepping stone into the grand arena of open-source contributions.",
//                 "Plus, tips on how to get selected for the prestigious Google Summer of Code (GSOC)!"
//             ]
//         },
//         {
//             imageSrc: "assessts/OpenSource-img.png",
//             sessionName: "Open Source & Making your first OS contribution & GSOC",
//             description: [
//                 "Dive into the world of open-source software and transform from a user to a contributor.",
//                 "In this interactive workshop, you'll navigate the ecosystem of open-source projects and learn how to make your mark.",
//                 "Covering the basics of choosing a project, understanding issues, and making your first pull request, this session is your stepping stone into the grand arena of open-source contributions.",
//                 "Plus, tips on how to get selected for the prestigious Google Summer of Code (GSOC)!"
//             ]
//         }
//     ],
//     track2: [
//         { id: 1, name: 'Item 1 for Track 2' },
//         { id: 2, name: 'Item 2 for Track 2' },
//         // Add more items for Track 2
//     ]
// };

filterTrackItems("track1");
filterDayItems("day1");

track1.addEventListener("click", () => {
    console.log("clicked");
    track2.classList.remove("track-click-change");
    track1.classList.add("track-click-change");
    filterTrackItems("track1");
});

track2.addEventListener("click", () => {
    console.log("clicked");
    track1.classList.remove("track-click-change");
    track2.classList.add("track-click-change");
    filterTrackItems("track2");
});


day1.addEventListener("click", () => {
  console.log("clicked");
  day2.classList.remove("day-click-change");
  day1.classList.add("day-click-change");
  filterDayItems("day1");
});

day2.addEventListener("click", () => {
  console.log("clicked");
  day1.classList.remove("day-click-change");
  day2.classList.add("day-click-change");
  filterDayItems("day2");
});

function filterTrackItems(track) {
    const workshopList = document.getElementById('workshop-list');
    const selectedItems = tracksItemsData[track];
    console.log(selectedItems);

    // Clear previous items
    workshopList.innerHTML = '';

    // Display selected items
    selectedItems.forEach(item => {
        const workshopCard = document.createElement('div');
        workshopCard.className = "workshop-card";
        workshopCard.innerHTML = `
            <div class="image">
                <img src="${item.imgSrc}">
            </div>
            <div class="content">
                <h1 id="session-name">${item.sessionName}</h1>
                <p><strong>Time</strong>: ${item.dateTime}</p>
                <a href="${item.pageLink}" id="learn-more">Learn more</a>
            </div>
        `;
        workshopList.appendChild(workshopCard);
    });
}


function filterDayItems(day) {
  const workshopList = document.getElementById('schedule-list');
  const selectedItems = daysItemsData[day];
  console.log(selectedItems);

  // Clear previous items
  workshopList.innerHTML = '';

  // Display selected items
  selectedItems.forEach(item => {
      const workshopCard = document.createElement('div');
      workshopCard.className = "workshop-card";
      workshopCard.innerHTML = `
          <div class="content">
              <h1 id="session-name">${item.sessionName}</h1>
              <p><strong>Track</strong>: ${item.track}</p>
              <p><strong>Time</strong>: ${item.time}</p>
              <p><strong>Duration</strong>: ${item.duration} hour${item.duration > 1 ? 's' : ''}</p>
              <a href="${item.pageLink}" id="learn-more">Learn more</a>
          </div>
      `;
      workshopList.appendChild(workshopCard);
  });
}












// Function to filter and display items
// function filterTrackItems(track) {
//     const workshopList = document.getElementById('workshop-list');

//     const selectedItems = tracksItemsData[track];
//     console.log(selectedItems);
//     // Clear previous items
//     workshopList.innerHTML = '';

//     // Display selected items
//     selectedItems.forEach(item => {
//         const workshopCard = document.createElement('div');
//         workshopCard.className = "workshop-card";
//         workshopCard.innerHTML = `
//                 <div class="image">
//                     <img src="${item.imageSrc}">
//                 </div>
//                 <div class="content">
//                     <h3 id="session-name">${item.sessionName}</h3>
//                     ${item.description.map(para => `<p>${para}</p>`).join('')}
//                 </div>
//             `;
//         workshopList.appendChild(workshopCard);
//     });
// }