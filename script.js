//! TO_DO: projects, mini_projects, posts, banner, fortune, secret, 



let about_me_txt = 
`<br> Hi! I'm Brandon Ramirez, computer science senior at the University of Houston - Clear Lake! <br>
I love to challenge myself and find creative ways to solve complex problems. I like making <br>
software that provides value to other people and the process of making/learning new and novel <br>
things. Whenever I have free time I like playing guitar, going to the gym, digital art, writing, <br>
and teaching! My technical interests include software/game development, web dev, GNU/Linux, <br>
and open source! :) <br>`;


let help_txt = 
`<br>
{  <br>
&nbsp;  "valid_commands": {  <br><br>
&nbsp;&nbsp;      "help":"print list of valid commands to standard output",   <br>
&nbsp;&nbsp;      "whoami":"short description of who I am",   <br>
&nbsp;&nbsp;      "resume":"print simple version of my resume",<br>
&nbsp;&nbsp;      "projects":"list of projects",<br>
&nbsp;&nbsp;      "mini_projects":"list of small, simple projects",<br>   
&nbsp;&nbsp;      "posts":"scientific/technical articles I've written",<br>
&nbsp;&nbsp;      "nufetch":"system information tool",   <br>
&nbsp;&nbsp;      "banner":"print ascii art name",   <br>
&nbsp;&nbsp;      "paper":"change wallpaper",<br>
&nbsp;&nbsp;      "dark":"dark website theme (default)",<br>
&nbsp;&nbsp;      "light":"light theme",<br>
&nbsp;&nbsp;      "sound":"play music",<br>
&nbsp;&nbsp;      "stop":"stop music",   <br>
&nbsp;&nbsp;      "fortune":"receive a fortune",  <br> 
&nbsp;&nbsp;      "echo <str>":"print custom text to std output",   <br>
&nbsp;&nbsp;      "secret":"easter egg",   <br>
&nbsp;&nbsp;      "hist":"show user command history",<br>
&nbsp;&nbsp;      "s":"simple version of this website [Github profile]",   <br>
&nbsp;&nbsp;      "t-repo":"Github repository for this resume",<br>
&nbsp;&nbsp;      "clear":"clear std output"<br><br>
&nbsp;  }  <br>
}  <br>
`;

let resume_txt = 

`<br>
#####################################################################################################################################<br><br>
TECHNICAL SKILLS/TECHNOLOGIES<br>
&nbsp;&nbsp;Languages: Java, C#, Python, HTML5, CSS3, & JavaScript. Experience with C++, SQL, & MASM x86<br>
&nbsp;&nbsp;Development Tools: JetBrains IDEs, VS/Code, MySQL Workbench, Node.js, Unity, Blender®, & Monday.com<br>
&nbsp;&nbsp;Frameworks/Platforms: ASP.NET Core, Arduino Uno R3<br>
&nbsp;&nbsp;Libraries/Testing: React.js, P5.js, Junit, Jest, npm<br>
&nbsp;&nbsp;Hard Skills: Git, Bash, Vim, i3wm, Emmet, SSH, Jupyter Notebooks, LaTeX, Markdown<br>
&nbsp;&nbsp;Operating Systems: Debian© based distributions (Linux Mint, Raspberry Pi), Windows 7/10<br>
&nbsp;&nbsp;Additional Skills: Spanish (Native), R/RStudio<br>
<br><br>
EDUCATION<br>
&nbsp;&nbsp;Bachelor of Science – Computer Science Graduation Date: December 2023<br>
&nbsp;&nbsp;University of Houston-Clear Lake; Houston, TX<br><br>
&nbsp;&nbsp;Associates of Science – General Studies May 2021<br>
&nbsp;&nbsp;Galveston College; Galveston, TX<br><br>
&nbsp;&nbsp;Relevant coursework: Computer Org & Assembly Lang, Advanced Data Structures & Algorithms, Web Application Development,<br>
&nbsp;&nbsp;Programming Language Concepts, Machine Learning, Enterprise Java & Frameworks, & Design of Database Systems.<br>
<br><br>
RELEVANT PROJECTS<br>
&nbsp;&nbsp;• IEEE 754 Floating Point Calculator (Final Project) | (https://tinyurl.com/mrma7yxu) Fall 2022<br>
&nbsp;&nbsp;Multi-number system floating-point calculator with .NET Core Forms app for software engineering class (SWEN 4342). Was<br>
&nbsp;&nbsp;responsible for programming, researching, prototyping, & testing. Used Waterfall methodology and held meetings with instructor.<br>
&nbsp;&nbsp;Tech stack: .NET Core, C#, & Monday.com<br>
<br><br>
PROFESSIONAL EXPERIENCE<br>
&nbsp;Code Sensei March 2023 - Present<br>
&nbsp;&nbsp;Code Ninjas - League City, TX<br>
&nbsp;&nbsp;• Learned & taught Code Ninjas® curriculum, taught basic skills in coding, engineering, & game development<br>
&nbsp;&nbsp;• Responsible for facilitating/leading workshops in applied computing, advanced game development, and robotics<br>
&nbsp;&nbsp;• Catered to needs of different students and fostered problem solving, logic, & STEM skills<br><br>
&nbsp;Website Administrator/Developer July 2022 - August 2022<br>
&nbsp;&nbsp;CoPilot - College Forward; Salesforce application<br>
&nbsp;&nbsp;• Renovated and added functionality to: https://collegeforward.org/copilot/ using WordPress & Elementor<br>
&nbsp;&nbsp;• Created and modified HTML & CSS code to comply with company style/requirements<br>
&nbsp;&nbsp;• Implemented internal training platform content for future employees<br><br>
&nbsp;IT Administrator Intern June 2021 - August 2021<br>
&nbsp;&nbsp;Moody Gardens - Galveston, TX<br>
&nbsp;&nbsp;• Restored functionality to old computers via updating software and replacing hardware components<br>
&nbsp;&nbsp;• Managed multifunction/ticketing printer repairs<br>
&nbsp;&nbsp;• Troubleshot internet issues using CLI and monitoring system processes<br><br>
#####################################################################################################################################<br>
<br><br>
Copy of full resume has been downloaded!
<br>`;

let socials_txt = `<br> Show a nice version of media (use banner shields)<br>`;
let date_cal_weather_txt = `<br> Show local weather and time information<br>`;
let projects_txt = `<br> List of projects, links, and instructions<br>`;
let mini_projects_txt = ` <br> List/Redirect to mini-projects<br>`;
let technical_posts_txt = `<br> Papers, scientific documents, technical posts, its all fun!<br>`;



let preBanner = document.createElement('pre');
preBanner.textContent = `
                                                                       ________ 
$$$$$$$\                                     $$\                      |        \  $$$$$$$\		            $$\                                
$$  __$$\                                    $$ |                     | $$$$$$$$  $$  __$$\                         \__|                               
$$ |  $$ | $$$$$$\  $$$$$$\  $$$$$$$\   $$$$$$$ | $$$$$$\  $$$$$$$\   | $$__      $$ |  $$ | $$$$$$\  $$$$$$\$$$$\  $$\  $$$$$$\   $$$$$$\  $$$$$$$$\  
$$$$$$$\ |$$  __$$\ \____$$\ $$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\  | $$  \     $$$$$$$  | \____$$\ $$  _$$  _$$\ $$ |$$  __$$\ $$  __$$\ \____$$  | 
$$  __$$\ $$ |  \__|$$$$$$$ |$$ |  $$ |$$ /  $$ |$$ /  $$ |$$ |  $$ | | $$$$$     $$  __$$<  $$$$$$$ |$$ / $$ / $$ |$$ |$$ |  \__|$$$$$$$$ |  $$$$ _/  
$$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ | | $$___     $$ |  $$ |$$  __$$ |$$ | $$ | $$ |$$ |$$ |      $$   ____| $$  _/    
$$$$$$$  |$$ |     \$$$$$$$ |$$ |  $$ |\$$$$$$$ |\$$$$$$  |$$ |  $$ | | $$     \  $$ |  $$ |\$$$$$$$ |$$ | $$ | $$ |$$ |$$ |      \$$$$$$$\ $$$$$$$$\  
\_______/ \__|      \_______|\__|  \__| \_______| \______/ \__|  \__|  \$$$$$$$$  \__|  \__| \_______|\__| \__| \__|\__|\__|       \_______|\________| v1.0.2 
`;

// Create the main banner text

let banner_txt = `<br>
Hello world! Welcome to my beautiful website fellow humans and bots...<br>
<br>
This is an interactive retro terminal portfolio! Please type in commands and press "Enter" to<br>
uncover more information about its creator and work. Here you will find my personal projects,<br>
technical blog posts, and other random stuff I've been working on lately...feel free to reach out to me!<br>
<br>
Type "help" for a list of available commands<br>
This project is now open source, type 't-repo' to check it out<br>
For a simplified version, type 's'<br>
`;





let fortune_txt = `<br> Receive a ✨fortune✨<br>`;
let secret_txt = `<br> Easter egg? Cicada type stuff coming soon <br>`;
let clear_text = `The terminal has been cleared!`;

let ok = "[   OK    ]        "
let dot = "..." + "<br>";
let loading_txt = 
`<br><br>
${ok}Starting GRUB boot detection${dot}
${ok}Setting console scheme${dot}
${ok}Running diagnostics${dot}
${ok}Started User Login Management${dot}
${ok}Started Console Daemon${dot}
${ok}Loading UNIX Secure Shell Server${dot}
${ok}Started LSB: automatic crash report generation${dot}
${ok}Initializing Boot Sections${dot}
${ok}Implementing Routine Directories${dot}
${ok}Reached Target Login Prompts${dot}
${ok}Started Time & Date Service${dot}
${ok}Waiting on seed regeration${dot} <br> 

UNIX OS 22.04.1. LTS localhost <br><br>
`
//banner art: https://patorjk.com/software/taag/#p=testall&f=Crawford2&t=Ramirez
/***
 *     /$$$$$$$                                     /$$                           /$$$$$$$$       /$$$$$$$                          /$$
 *    | $$__  $$                                   | $$                          | $$_____/      | $$__  $$                        |__/
 *    | $$  \ $$  /$$$$$$  /$$$$$$  /$$$$$$$   /$$$$$$$  /$$$$$$  /$$$$$$$       | $$            | $$  \ $$  /$$$$$$  /$$$$$$/$$$$  /$$  /$$$$$$   /$$$$$$  /$$$$$$$$
 *    | $$$$$$$  /$$__  $$|____  $$| $$__  $$ /$$__  $$ /$$__  $$| $$__  $$      | $$$$$         | $$$$$$$/ |____  $$| $$_  $$_  $$| $$ /$$__  $$ /$$__  $$|____ /$$/
 *    | $$__  $$| $$  \__/ /$$$$$$$| $$  \ $$| $$  | $$| $$  \ $$| $$  \ $$      | $$__/         | $$__  $$  /$$$$$$$| $$ \ $$ \ $$| $$| $$  \__/| $$$$$$$$   /$$$$/
 *    | $$  \ $$| $$      /$$__  $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      | $$            | $$  \ $$ /$$__  $$| $$ | $$ | $$| $$| $$      | $$_____/  /$$__/
 *    | $$$$$$$/| $$     |  $$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$/| $$  | $$      | $$$$$$$$      | $$  | $$|  $$$$$$$| $$ | $$ | $$| $$| $$      |  $$$$$$$ /$$$$$$$$
 *    |_______/ |__/      \_______/|__/  |__/ \_______/ \______/ |__/  |__/      |________/      |__/  |__/ \_______/|__/ |__/ |__/|__/|__/       \_______/|________/
*/

//*Everything above this line is "content", logic below...

console.log("Hello world!");
const validCommands = ["load", "whoami", "resume", "nufetch", "paper", "banner", "help", "fortune", "secret", "projects", "dark", "light","posts", "mini_projects", "t-repo", "clear", "s", "sound", "stop", "echo", "hist"];
var nfetch = document.getElementById("nuFetchDiv");
var textArt = document.getElementById("text-art");
var textArtClone = textArt.cloneNode(true);


nfetch.style.display = "none"; //does not exist on the page at all

var body = document.querySelector("body");
var input = document.getElementById("inputField");
var output = document.getElementById("outputField");
var button = document.getElementById("myBtn");
var cmnd = document.getElementById("cmnd-prompt");

 // Get a reference to the audio element
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

//this code checks if enter is ever pressed at any time(button is pressed), in this case the selected text is printed 
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

function rstInput(){
        let div = document.createElement('div');
        div.innerHTML = "";
        commandStack.push(input.value);    
        input.value = "";
        output.append(div);
        window.scrollTo(0, document.body.scrollHeight);
        removeDiv();
}

function cmndHist(){
        let div = document.createElement('div');
        div.innerHTML = `<br>`;

  const node = cmnd;
  const clone = node.cloneNode(true);//copy of command prompt
  output.append(div);
  output.append(clone);
  output.append(input.value);
}

function displayText(str) {
  let div = document.createElement('div');
  let span = document.createElement('span');

  if(input.value.includes("echo", 0)){
    cmndHist();
    span.innerHTML = `<br><br>` + input.value.substring(5) + `<br>`;
    output.append(span);
    rstInput();
  }else{
  switch (str) {
    case "load":
      cmndHist();
      span.innerHTML = loading_txt;
      output.append(span);
      rstInput();
      break;
    /*Add CLI audio control rather than with buttons. Hide buttons
    sound: plays sound, stop_sound: stops sound
    */
    case "sound":
      cmndHist();
      div.innerHTML = `<br>Loading sound module...<br>`;
      output.append(div);
      playButton.click();
      rstInput();
      break;
    case "stop":
      cmndHist();
      div.innerHTML = `<br>Stopping audio...<br>`;
      output.append(div);
      audio.pause();
      playButton.innerHTML = "audio null";
      rstInput();
      break;      
    case "paper":
      cmndHist();
      selectWallpaper();
      div.innerHTML = `<br> new wallpaper! <br>`;
      output.append(div);
      rstInput();
    break;
    case "whoami":
      cmndHist();
      div.innerHTML = about_me_txt;
      output.append(div); 
      rstInput(); 
      break;
    case "resume":
      cmndHist();
      var link = document.createElement('a');
      link.href = 'assets/documents/Brandon E Ramirez Resume Summer 2023.pdf';
      //link.target = '_blank'; // Open the PDF in a new tab/window
      link.download = 'Brandon_Ramirez_Resume' || 'document.pdf'; // Set the default filename if not provided
      link.click();
      div.innerHTML = resume_txt;
      div.style.color = "#1da1f2";
      output.append(div);
      rstInput();
      break;
      case "nufetch":
      cmndHist();
      var newDiv = document.createElement("div");
      newDiv = nfetch;
      newDiv.style.display = "block"
      output.append(newDiv);
      rstInput();
      break;
    case "banner":
      cmndHist();

      var tArt = document.createElement("div");
      tArt = textArtClone;
      tArt.style.display = "block"
      output.append(tArt);

      div.innerHTML = banner_txt;
      output.append(div)

      rstInput();
      break;
    case "help":  
      cmndHist();
    div.innerHTML = help_txt;
      output.append(div); 
      rstInput(); 
      break;
    case "fortune":
      cmndHist();
    div.innerHTML = fortune_txt;
        output.append(div);
        rstInput();
        break;
    case "dark":
      cmndHist()
      output.style.color = "#c3e510";
      body.style.backdropFilter = "brightness(20%) blur(5px)";
      rstInput();
      break;
    case "light":
      cmndHist();
      output.style.color = "#ebdbb2";
      body.style.backdropFilter = "blur(10px) brightness(50%)";
      rstInput();
      break;
    case "secret":
      cmndHist();
    div.innerHTML = secret_txt;
        output.append(div);
        rstInput();
        break;
    case "projects":
      cmndHist();
      div.innerHTML = projects_txt;
      output.append(div); 
      rstInput(); 
      break;
    case "posts":
      cmndHist();
      div.innerHTML = technical_posts_txt;
      output.append(div); 
      rstInput(); 
      break;
    case "mini_projects":
      cmndHist();
        div.innerHTML = mini_projects_txt;
        output.append(div);
        rstInput();
        break;
    case "t-repo":
      cmndHist();
      window.open("https://github.com/Brandon-E-Ramirez/terminal_portfolio", "_blank");//will send user to repo for this website;
      div.innerHTML = `<br> Redirecting to website...\"https://github.com/Brandon-E-Ramirez/terminal_portfolio\"<br>`;
      output.append(div);
      rstInput();
      break;
    case "clear":
      cmndHist();
      div.innerHTML = `<br><br><br><br><br><br>` +  clear_text + `<br><br><br><br><br><br><br><br>`;
      output.replaceChildren(div);
      //let ds = document.getElementById("divSpace");
      //const lineBreak = document.createElement('br');
      //ds.appendChild(lineBreak);

      rstInput();
      break;
    case "hist":
    cmndHist();
    div.innerHTML = `<br> user command history: [${commandStack}]`;
    output.append(div);
    rstInput();
    break;
    case "s": //this will send the guest to my Github page
      cmndHist();
      window.open("https://github.com/Brandon-E-Ramirez", "_blank");
      div.innerHTML = `<br> Redirecting to website...\"https://github.com/Brandon-E-Ramirez\"`;
      output.append(div)
      rstInput();
      break;
    case "Stack has been cleared!":
      cmndHist();
      div.innerHTML = "<br>The command buffer is has been reset, enter new command(s)";
      output.append(div);
      rstInput;
      break;
    case "":
      cmndHist();
      div.innerHTML = " <br> Error, field is empty. For a list of commands, type \"help\"" + "\n";
      output.append(div); 
      rstInput(); 
      break;
    default:
      cmndHist();
      let errorQuery = input.value;
      div.innerHTML = `<br> Command not found, "${errorQuery}" is not a valid command. For a list of valid commands, type "help"\n`;
      output.append("");
      output.append(div); 
      rstInput(); 
      break;
    }
  }
}

//function that makes the text input be in focus when window is pressed anywhere in body
      function focusInput() {
          document.getElementById("inputField").focus();
      }


/*
Make it so that when the user types in the text input the width of the input
dynamicaly resizes, the animated green caret should move left/right at the same rate the user
types*/

//This code shifts the text to the right while typing
    input.addEventListener('input', () => {
    const textLength = input.value.length;
    const offset = 5 * textLength;
    input.style.width = offset + 'px';
  });

//color changes if command is valid
  input.addEventListener('input', () => {
    if(validCommands.includes(input.value,0)){
      input.style.color = "#fbf1c7";
    }else{
      input.style.color = "#f92672";
    }
  });

//this code checks if up-arrow is ever pressed at any time. This will invoke previous commands which can be quickly retrieved
const commandStack = [];
commandStack.push("Stack is empty!");//the command currently in the input is added to the stack

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    } 
    switch (event.key) {
      case "ArrowDown":
        // Do something for "down arrow" key press.
        commandStack.length = 0;
        input.value = "Stack has been cleared!";
        break;
        case "ArrowUp":
        // Do something for "up arrow" key press.
        prev = commandStack.pop(); //retrieve most recent command
        input.value = prev;
        if (input.value == "undefined"){
          rstInput();
        }
        break;

      case "Tab":
        window.alert("Implement auto completion!")
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  });

  const time = document.getElementById('uptime');
  const clock = document.getElementById('time');
  const calendar = document.getElementById('calendar');
  let t = 0
  setInterval(function () {
    const currentDate = new Date();
    let month = currentDate.getMonth() + 1;

    switch (month){
            case 1:
      month = "January";
      break;
            case 2:
      month = "February";
      break;
            case 3:
      month = "March";
      break;
            case 4:
      month = "April";
      break;
            case 5:
      month = "May";
      break;
            case 6:
      month = "June";
      break;
            case 7:
      month = "July";
      break;
            case 8:
      month = "August";
      break;
            case 9:
      month = "September";
      break;
            case 10:
      month = "October";
      break;
            case 11:
      month = "November";
      break;
            case 12:
      month = "December";
      break;
    }
    clock.innerText =  " Time: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    calendar.innerText = " Date: " + month + ", " + currentDate.getDate() + " " + currentDate.getFullYear();
    time.innerText = "Uptime: " + (t += 1) + " seconds";
  }, 1000);//update every second


let net = document.getElementById('network');
let pwr = document.getElementById('charge');
let cpu = document.getElementById('cpu');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

setInterval(function() {
    net.innerText = "Network: " + getRandomInt(50,100) + "%";
    pwr.innerText = "Power: " + getRandomInt(93,95) + "%";
    cpu.innerText = "CPU: " + getRandomInt(0,50) + "%";
  }, 2000)

//!generate random user id in form of 8 digit hex string
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function genHexId(){

let n = 8; //*length of the password
const alph = ["a", "b", "c", "d", "e", "f", "g"]
const nums = [0,1,2,3,4,5,6,7,8,9]

let pw = "#";
let alphLength = alph.length;
let numsLength = nums.length;

for(let x = 0; x < n; x++){
//TODO choose element type
//* Generate random number to decide if next character will be a symbol, letter, or number
let option = randomIntFromInterval(1,2);
let index = 0;
switch(option){    
    case 1://reserved for alphabet
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, alphLength - 1);
    //*if element is a letter, make it a 50/50 chance it will be upperCase
    let upperCase = randomIntFromInterval(0,1)
    pw += alph[index].toLowerCase();
    break;
    
    case 2://reserved for numbers
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, numsLength - 1)
    pw += nums[index]
    break;

    default:
        log('There is an error!')
        }
    }
  return pw;
}

const hashStr = document.getElementById('id');
hashStr.innerHTML = "USR_ID: " + genHexId();

//songs that play randomly when the page loads
const songs = [
  "/assets/sound/music/Homeshake - Pareidolia Catalog.mp3",
  "/assets/sound/music/8 Bit Ocean - Random Chiptune Mix.mp3",   
  "/assets/sound/music/Space Jazz - Jazzy Beats Compilation.mp3",
  "/assets/sound/music/Heavenly breakcore, DnB & Jungle Compilation (10th).mp3",
  "/assets/sound/music/Looking Forward - Atmospheric Drum & Bass Compilation.mp3",
  "/assets/sound/music/Best Of Jazz Anime OST - Chill Mix To Study Relax To.mp3",
  "/assets/sound/music/Total Science - Volume 2 (1996).mp3",
    "/assets/sound/music/Aphex Twin - Selected Ambient Works 85-92.mp3",
    "/assets/sound/music/Perfect Piano - A Video Game Music Mix.mp3",
    "/assets/sound/music/Atmosphere Chapter 1 - Deeper Drum and Bass.mp3",
    "/assets/sound/music/Atmosphere Chapter 3 - Deeper Drum And Bass (2012).mp3",
    "/assets/sound/music/Jungle DB Gaming Mix - Ambient, Intelligent, Liquid.mp3",
    "/assets/sound/music/Modern Ambient Jungle Compilation - (Intelligent DnB).mp3",
    "/assets/sound/music/Relaxing Gran Turismo (GT2-6).mp3",
    "/assets/sound/music/Relaxing L.A. Noire Music - 1940s Smoky Jazz Bar & Rain Ambience.mp3",
    "/assets/sound/music/Relaxing Gran Turismo+ - Study, Gaming Mix.mp3",
    "/assets/sound/music/Jazz Bar in Paris - Piano Compilation.mp3"
];

//play songs in predetermined order
let o = 0;
function playRandomSong() {
o++;
  if(o < songs.length){
    const selectedSong = songs[o];
    playButton.innerText = selectedSong.substring(20, selectedSong.length - 4);
    // Set the source of the audio element to the selected song
    audio.src = selectedSong;
    // Play the selected song
    audio.volume = 0.5;
    audio.play();
  }else{
    o = 0;
    const selectedSong = songs[o];
    playButton.innerText = selectedSong.substring(20, selectedSong.length - 4);
    // Set the source of the audio element to the selected song
    audio.src = selectedSong;
    // Play the selected song
    audio.volume = 0.5;
    audio.play();
  }
}


/*'/assets/images/backgrounds/use/1.jpg',*/
const backgrounds = [
'/assets/images/backgrounds/use/0.webp',
'/assets/images/backgrounds/use/1.jpg',
'/assets/images/backgrounds/use/4.webp',
'/assets/images/backgrounds/use/17.webp',
'/assets/images/backgrounds/use/3.webp',
'/assets/images/backgrounds/use/9.webp',
'/assets/images/backgrounds/use/2.gif',
'/assets/images/backgrounds/use/6.gif',
'/assets/images/backgrounds/use/12.webp',
'/assets/images/backgrounds/use/14.webp',
'/assets/images/backgrounds/use/15.webp',
'/assets/images/backgrounds/use/10.webp',
'/assets/images/backgrounds/use/13.webp',
'/assets/images/backgrounds/use/11.gif',
'/assets/images/backgrounds/use/7.webp',
'/assets/images/backgrounds/use/8.webp',
'/assets/images/backgrounds/use/5.webp',
'/assets/images/backgrounds/use/16.gif'
];

let i = 0
function selectWallpaper(){
  //const randomIndex = Math.floor(Math.random() * backgrounds.length);
  i++;
  if(i < backgrounds.length){
    const wallpaper = backgrounds[i];
    document.body.style.backgroundImage = `url('${wallpaper}')`;
  }else{
    i = 0;
    const wallpaper = backgrounds[i];
    document.body.style.backgroundImage = `url('${wallpaper}')`; 
  }
}

let brIndex = 0;
const brElements = document.getElementsByClassName("lb");
function removeDiv(){
  if(brIndex <= 27){
    brElements[brIndex].remove();
    brElements[brIndex + 1].remove();
  }
  brIndex+=2;
}