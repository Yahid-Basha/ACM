let track1 = document.getElementById("track1");
let track2 = document.getElementById("track2");

const itemsData = {
    track1: [
      {
        sessionName: "Mastering DOM Manipulation",
        imgSrc: "assets/js-logo.png",
        date: "January 29, 2024",
        time: "9:30 AM → 10:30 AM",
        duration: 1
      },
      {
        sessionName: "Responsive Design & Deployment",
        imgSrc: "assets/css-img.png",
        date: "January 29, 2024",
        time: "10:45 AM → 12:15 PM",
        duration: 1.5
      },
      {
        sessionName: "Advanced JavaScript & API Mastery",
        imgSrc: "assets/postman-api.png",
        date: "January 29, 2024",
        time: "2:00 PM → 4:00 PM",
        duration: 2
      },
      {
        sessionName: "Mastering React Framework",
        imgSrc: "assets/react-js-img.png",
        date: "January 30, 2024",
        time: "9:30 AM → 11:30 AM",
        duration: 2
      }
    ],
    track2: [
      {
        sessionName: "Advanced Git Techniques",
        imgSrc: "assets/git-image1.png",
        date: "January 29, 2024",
        time: "9:30 AM → 10:30 AM",
        duration: 1
      },
      {
        sessionName: "Deploying Your ML Models",
        imgSrc: "assets/ml-host.png",
        date: "January 29, 2024",
        time: "2:00 PM → 4:00 PM",
        duration: 1
      },
      {
        sessionName: "Building your own URL Shortener",
        imgSrc: "assets/url-shortner-img.png",
        date: "January 29, 2024",
        time: "10:45 AM → 12:15 PM",
        duration: 2
      },
      {
        sessionName: "Exploring Open Source World",
        imgSrc: "assets/OpenSource-img.png",
        date: "January 30, 2024",
        time: "9:30 AM → 11:30 AM",
        duration: 1
      },
      {
        sessionName: "Magical Internet",
        imgSrc: "assets/T2E-img.png",
        date: "January 30, 2024",
        time: "11:45 AM → 12:45 PM",
        duration: 1
      }
    ]
  };
  
  

// const itemsData = {
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

track1.addEventListener("click", () => {
    console.log("clicked");
    track2.classList.remove("track-click-change");
    track1.classList.add("track-click-change");
    filterItems("track1");
});

track2.addEventListener("click", () => {
    console.log("clicked");
    track1.classList.remove("track-click-change");
    track2.classList.add("track-click-change");
    filterItems("track2");
});


function filterItems(track) {
    const workshopList = document.getElementById('workshop-list');
    const selectedItems = itemsData[track];
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
                <h3 id="session-name">${item.sessionName}</h3>
                <p><strong>Date</strong>: ${item.date}</p>
                <p><strong>Time</strong>: ${item.time}</p>
                <p><strong>Duration</strong>: ${item.duration} hour${item.duration > 1 ? 's' : ''}</p>
                <a href="#" id="main-heading">Learn more</a>
            </div>
        `;
        workshopList.appendChild(workshopCard);
    });
}












// Function to filter and display items
// function filterItems(track) {
//     const workshopList = document.getElementById('workshop-list');

//     const selectedItems = itemsData[track];
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