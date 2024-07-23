const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const relevantWords = ["5u7p1A", "s3DgP9", "j6HkL2", "aR4qV8", "9xTbF7", "g2WmE5", "y1NzR6", "d8XoG4", "P7cJv9", "L3iQs6", "m9FtZ1", "U5aRp3", "H4bYe7", "n6KlD2", "C2wSf9", "e7VzL4", "A1sTd8", "k3GxQ6", "W9oPj2", "v4RbM5", "Q6yLn9", "z8XkH1", "F5uJg3", "o7IwE6", "B2tNy7", "r9PcF4", "T3mZv8", "i1SdQ6", "D7gLa9", "f2KxO3", "Y4nWe7", "q6HjT2", "V9bMr5", "x5FzP1", "J3lXo9", "p7CaR2", "N1sBt6", "l9GwQ4", "O2yUf8", "h8QxE6", "M6zVi3", "e4RbS7", "I1tXn9", "u7WlG2", "G3oFj5", "w9NcH1", "Z2qPk8", "s5LdM6", "Q8xIv3", "y2TbF7", "E4rOp9", "a9JzR6", "H6wE5", "d2XoG4", "R7cJv9", "L4iQs6", "m1FtZ1", "U6aRp3", "j4bYe7", "k7KlD2", "sanuka"];

    
    let userName;
    let userInput;

    while (true) {
        userName = prompt("Please enter your name:");
        if (userName === null || userName.trim() === "") {
            alert("You must enter your name.");
            continue; // Prompt again if user cancels or doesn't enter a name
        } else {
            break; // Exit the loop when a valid name is entered
        }
    }

    while (true) {
        userInput = prompt("Please enter your password.");
        if (userInput === null || userInput.trim() === "") {
            alert("You must enter your password.");
            continue; // Prompt again if user cancels or doesn't enter a word
        }

        userInput = userInput.trim(); // Trim whitespace from input

        if (relevantWords.includes(userInput)) {
            const now = new Date();
            const entry = `Name: ${userName}, Word: ${userInput}, Date and Time: ${now.toLocaleString()}`;

            let entries = JSON.parse(localStorage.getItem('entries')) || [];
            entries.push(entry);

            localStorage.setItem('entries', JSON.stringify(entries));

            alert("Entry saved successfully!");
            break; // Exit the loop when correct word is entered
        } else {
            alert("Incorrect password entered. Please try again with your correct password..");
        }
    }
});
let data = [
    {
        "id": "a1",
        "title": "video 1",
        "name": "video 1.mp4"
    },
    {
        "id": "a2",
        "title": "video 2",
        "name": "video 2.mp4"
    },
    {
        "id": "a3",
        "title": "video 3",
        "name": "video 3.mp4"
    },
    {
        "id": "a4",
        "title": "video 4",
        "name": "video 4.mp4"
    },
    {
        "id": "a5",
        "title": "video 5",
        "name": "video 5.mp4"
    },
    {
        "id": "a6",
        "title": "video 6",
        "name": "video 6.mp4"
    },
    {
        "id": "a7",
        "title": "video 7",
        "name": "video 7.mp4"
    },
    {
        "id": "a8",
        "title": "video 8",
        "name": "video 8.mp4"
    },
    {
        "id": "a9",
        "title": "video 9",
        "name": "video 9.mp4"
    },
    {
        "id": "a10",
        "title": "video 10",
        "name": "video 10.mp4"
    },
    {
        "id": "a11",
        "title": "video 11",
        "name": "video 11.mp4"
    },
    {
        "id": "a12",
        "title": "video 12",
        "name": "video 12.mp4"
    },
    {
        "id": "a13",
        "title": "video 13",
        "name": "video 13.mp4"
    },
    {
        "id": "a14",
        "title": "video 14",
        "name": "video 14.mp4"
    },
    {
        "id": "a15",
        "title": "video 15",
        "name": "video 15.mp4"
    },
    {
        "id": "a16",
        "title": "video 16",
        "name": "video 16.mp4"
    },
    {
        "id": "a17",
        "title": "video 17",
        "name": "video 17.mp4"
    },
    {
        "id": "a18",
        "title": "video 18",
        "name": "video 18.mp4"
    },
    {
        "id": "a19",
        "title": "video 19",
        "name": "video 19.mp4"
    },
    {
        "id": "a20",
        "title": "video 20",
        "name": "video 20.mp4"
    },
    {
        "id": "a21",
        "title": "video 21",
        "name": "video 21.mp4"
    },
    {
        "id": "a22",
        "title": "video 22",
        "name": "video 22.mp4"
    },
    {
        "id": "a23",
        "title": "video 23",
        "name": "video 23.mp4"
    },
    {
        "id": "a24",
        "title": "video 24",
        "name": "video 24.mp4"
    },
    {
        "id": "a25",
        "title": "video 25",
        "name": "video 25.mp4"
    },
    {
        "id": "a26",
        "title": "video 26",
        "name": "video 26.mp4"
    },
    {
        "id": "a27",
        "title": "video 27",
        "name": "video 27.mp4"
    },
    {
        "id": "a28",
        "title": "video 28",
        "name": "video 28.mp4"
    },
    {
        "id": "a29",
        "title": "video 29",
        "name": "video 29.mp4"
    },
    {
        "id": "a30",
        "title": "video 30",
        "name": "video 30.mp4"
    },
    {
        "id": "a31",
        "title": "video 31",
        "name": "video 31.mp4"
    },
    {
        "id": "a32",
        "title": "video 32",
        "name": "video 32.mp4"
    },
    {
        "id": "a33",
        "title": "video 33",
        "name": "video 33.mp4"
    },
    {
        "id": "a34",
        "title": "video 34",
        "name": "video 34.mp4"
    },
    {
        "id": "a35",
        "title": "video 35",
        "name": "video 35.mp4"
    },
    {
        "id": "a36",
        "title": "video 36",
        "name": "video 36.mp4"
    },
    {
        "id": "a37",
        "title": "video 37",
        "name": "video 37.mp4"
    },
    {
        "id": "a38",
        "title": "video 38",
        "name": "video 38.mp4"
    },
    {
        "id": "a39",
        "title": "video 39",
        "name": "video 39.mp4"
    },
    {
        "id": "a40",
        "title": "video 40",
        "name": "video 40.mp4"
    },
    {
        "id": "a41",
        "title": "video 41",
        "name": "video 41.mp4"
    },
    {
        "id": "a42",
        "title": "video 42",
        "name": "video 42.mp4"
    },
    {
        "id": "a43",
        "title": "video 43",
        "name": "video 43.mp4"
    },
    {
        "id": "a44",
        "title": "video 44",
        "name": "video 44.mp4"
    },
    {
        "id": "a45",
        "title": "video 45",
        "name": "video 45.mp4"
    },
    {
        "id": "a46",
        "title": "video 46",
        "name": "video 46.mp4"
    },
    {
        "id": "a47",
        "title": "video 47",
        "name": "video 47.mp4"
    },
    {
        "id": "a48",
        "title": "video 48",
        "name": "video 48.mp4"
    },
    {
        "id": "a49",
        "title": "video 49",
        "name": "video 49.mp4"
    },
    {
        "id": "a50",
        "title": "video 50",
        "name": "video 50.mp4"
    },
    {
        "id": "a51",
        "title": "video 51",
        "name": "video 51.mp4"
    },
    {
        "id": "a52",
        "title": "video 52",
        "name": "video 52.mp4"
    },
    {
        "id": "a53",
        "title": "video 53",
        "name": "video 53.mp4"
    },
    {
        "id": "a54",
        "title": "video 54",
        "name": "video 54.mp4"
    },
    {
        "id": "a55",
        "title": "video 55",
        "name": "video 55.mp4"
    },
    {
        "id": "a56",
        "title": "video 56",
        "name": "video 56.mp4"
    },
    {
        "id": "a57",
        "title": "video 57",
        "name": "video 57.mp4"
    },
    {
        "id": "a58",
        "title": "video 58",
        "name": "video 58.mp4"
    },
    {
        "id": "a59",
        "title": "video 59",
        "name": "video 59.mp4"
    },
    {
        "id": "a60",
        "title": "video 60",
        "name": "video 60.mp4"
    },
    {
        "id": "a61",
        "title": "video 61",
        "name": "video 61.mp4"
    },
    {
        "id": "a62",
        "title": "video 62",
        "name": "video 62.mp4"
    },
    {
        "id": "a63",
        "title": "video 63",
        "name": "video 63.mp4"
    },
    {
        "id": "a64",
        "title": "video 64",
        "name": "video 64.mp4"
    },
    {
        "id": "a65",
        "title": "video 65",
        "name": "video 65.mp4"
    },
    {
        "id": "a66",
        "title": "video 66",
        "name": "video 66.mp4"
    },
    {
        "id": "a67",
        "title": "video 67",
        "name": "video 67.mp4"
    },
    {
        "id": "a68",
        "title": "video 68",
        "name": "video 68.mp4"
    },
    {
        "id": "a69",
        "title": "video 69",
        "name": "video 69.mp4"
    },
    {
        "id": "a70",
        "title": "video 70",
        "name": "video 70.mp4"
    },
    {
        "id": "a71",
        "title": "video 71",
        "name": "video 71.mp4"
    },
    {
        "id": "a72",
        "title": "video 72",
        "name": "video 72.mp4"
    },
    {
        "id": "a73",
        "title": "video 73",
        "name": "video 73.mp4"
    },
    {
        "id": "a74",
        "title": "video 74",
        "name": "video 74.mp4"
    },
    {
        "id": "a75",
        "title": "video 75",
        "name": "video 75.mp4"
    },
    {
        "id": "a76",
        "title": "video 76",
        "name": "video 76.mp4"
    },
    {
        "id": "a77",
        "title": "video 77",
        "name": "video 77.mp4"
    },
    {
        "id": "a78",
        "title": "video 78",
        "name": "video 78.mp4"
    },
    {
        "id": "a79",
        "title": "video 79",
        "name": "video 79.mp4"
    },
    {
        "id": "a80",
        "title": "video 80",
        "name": "video 80.mp4"
    },
    {
        "id": "a81",
        "title": "video 81",
        "name": "video 81.mp4"
    },
    {
        "id": "a82",
        "title": "video 82",
        "name": "video 82.mp4"
    },
    {
        "id": "a83",
        "title": "video 83",
        "name": "video 83.mp4"
    },
    {
        "id": "a84",
        "title": "video 84",
        "name": "video 84.mp4"
    },
    {
        "id": "a85",
        "title": "video 85",
        "name": "video 85.mp4"
    },
    {
        "id": "a86",
        "title": "video 86",
        "name": "video 86.mp4"
    },
    {
        "id": "a87",
        "title": "video 87",
        "name": "video 87.mp4"
    },
    {
        "id": "a88",
        "title": "video 88",
        "name": "video 88.mp4"
    },
    {
        "id": "a89",
        "title": "video 89",
        "name": "video 89.mp4"
    },
    {
        "id": "a90",
        "title": "video 90",
        "name": "video 90.mp4"
    },
    {
        "id": "a91",
        "title": "video 91",
        "name": "video 91.mp4"
    },
    {
        "id": "a92",
        "title": "video 92",
        "name": "video 92.mp4"
    },
    {
        "id": "a93",
        "title": "video 93",
        "name": "video 93.mp4"
    },
    {
        "id": "a94",
        "title": "video 94",
        "name": "video 94.mp4"
    },
    {
        "id": "a95",
        "title": "video 95",
        "name": "video 95.mp4"
    },
    {
        "id": "a96",
        "title": "video 96",
        "name": "video 96.mp4"
    },
    {
        "id": "a97",
        "title": "video 97",
        "name": "video 97.mp4"
    },
    {
        "id": "a98",
        "title": "video 98",
        "name": "video 98.mp4"
    },
    {
        "id": "a99",
        "title": "video 99",
        "name": "video 99.mp4"
    },
    {
        "id": "a100",
        "title": "video 100",
        "name": "video 100.mp4"
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
