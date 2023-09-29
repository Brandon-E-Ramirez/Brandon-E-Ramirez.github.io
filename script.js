//! TO_DO: projects, mini_projects, posts, fortune, secret, print
//programming quotes, calculator, weather.

function replaceNewlinesWithBreaks(text) {
  return text.replace(/\n/g, '<br>');
}

let about_me_txt = replaceNewlinesWithBreaks("\n Hi! I'm Brandon Ramirez, computer science senior at the University of Houston - Clear Lake!\n" +
  "I love to challenge myself and find creative ways to solve complex problems. I like making \n" +
  "software that provides value to other people and the process of making/learning new and novel \n" +
  "things. Whenever I have free time I like playing guitar, going to the gym, digital art, writing,\n" +
  "and teaching! My technical interests include software/game development, web dev, GNU/Linux,\n" +
  "and open source! :)\n");


let help_txt = 
`<br>
{  <br>
&nbsp;  "valid_commands": {  <br><br>
&nbsp;&nbsp;      "help" : "print list of valid commands to standard output",   <br>
&nbsp;&nbsp;      "whoami" : "short description of who I am",   <br>
&nbsp;&nbsp;      "resume" : "print simple version of my resume",<br>
&nbsp;&nbsp;      "projects" : "list of projects",<br>
&nbsp;&nbsp;      "mini_projects" : "list of small, simple projects",<br>   
&nbsp;&nbsp;      "posts" : "scientific/technical articles I've written",<br>
&nbsp;&nbsp;      "banner" : "print ascii art name + site instructions",   <br>
&nbsp;&nbsp;      "nufetch" : "system information tool",   <br>
&nbsp;&nbsp;      "paper" : "change wallpaper",<br>
&nbsp;&nbsp;      "dark" : "dark website theme(default)",<br>
&nbsp;&nbsp;      "light" : "light website theme",<br>
&nbsp;&nbsp;      "sound" : "play music",<br>
&nbsp;&nbsp;      "stop" : "stop music",   <br>
&nbsp;&nbsp;      "fortune" : "receive a fortune",  <br> 
&nbsp;&nbsp;      "echo [str]" : "print custom text to std output",   <br>
&nbsp;&nbsp;      "secret" : "mystery",   <br>
&nbsp;&nbsp;      "hist" : "show user command history",<br>
&nbsp;&nbsp;      "s" : "simple version of this website [Github profile]",   <br>
&nbsp;&nbsp;      "t-repo" : "Github repository for this resume",<br>
&nbsp;&nbsp;      "clear" : "clear std output"<br><br>
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
//let secret_txt = `<br> Easter egg? Cicada type stuff coming soon <br>`;
let clear_text = `The terminal has been cleared!`;

let ok = "[   OK    ]        "
let dot = "..." + "<br>";
let loading_txt = 
`<br>
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

UNIX OS 22.04.1. LTS localhost <br>

<br> Easter egg? Cicada type stuff coming soon <br>
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

let typeWriterRate = 10;
console.log("Hello world!");
const validCommands = ["load", "whoami", "resume", "nufetch", "paper", "banner", "help", "fortune", "secret", "projects", "dark", "light","posts", "mini_projects", "t-repo", "clear", "s", "sound", "stop", "echo", "hist"];
var nfetch = document.getElementById("nuFetchDiv");
var miniProjectsDiv = document.getElementById("mini-projects-div");
var postsDiv = document.getElementById("postsDiv");
var projects = document.getElementById("mainProjects");
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
        let preElement = document.createElement('pre');
        let brElement = document.createElement('br');
        
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
         //div.innerHTML = `<br>Loading sound module...<br>`;
         const typewriterSoundText = `<br>Loading sound module...<br>`;
         const typewriterSoundElement = div;
         output.append(div); 
      typeWriter(typewriterSoundText, typewriterSoundElement, typeWriterRate);
      output.append(div);
      playButton.click();
      rstInput();
      break;
      case "stop":
        cmndHist();
        //div.innerHTML = `<br>Stopping audio...<br>`;
        
        const typewriterStopText = `<br>Stopping audio...<br>`;
        const typewriterStopElement = div;
        output.append(div); 
        typeWriter(typewriterStopText, typewriterStopElement, typeWriterRate);
        
        output.append(div);
      audio.pause();
      playButton.innerHTML = "audio null";
      rstInput();
      break;      
      case "paper":
        cmndHist();
        selectWallpaper();
        const typewriterPaperText = `<br> new wallpaper! <br>`;
        const typewriterPaperElement = div;
        output.append(div); 
        typeWriter(typewriterPaperText, typewriterPaperElement, typeWriterRate);
        //div.innerHTML = `<br> new wallpaper! <br>`;
        output.append(div);
      rstInput();
    break;
    case "whoami":
      cmndHist();
      
      
      const typewriterText = about_me_txt;
      const typewriterElement = div;
      output.append(div); 
      typeWriter(typewriterText, typewriterElement, typeWriterRate);
      
      
      //div.innerHTML = about_me_txt;
      rstInput(); 
      break;
      case "resume":
        cmndHist();
        var link = document.createElement('a');
        link.href = 'assets/documents/Brandon E Ramirez Resume - Fall 2023.pdf';
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

      /*
      const typewriterHelpText = help_txt;
      const typewriterHelpElement = div;
      output.append(div); 
      typeWriter(typewriterHelpText, typewriterHelpElement, typeWriterRate);
      */

      rstInput(); 
      break;
      case "fortune":  
        cmndHist();
      
      let fortuneIndex = getRandomInt(0, fortuneArr.length);
      let fortuneArrSize = fortuneArr.length;
      let usrFortune = replaceNewlinesWithBreaks(`\nfortune[${fortuneIndex}/${fortuneArrSize}]: \"${fortuneArr[fortuneIndex]}\"`);

      //div.innerHTML = usrFortune;
      let typewriterFortuneElement = div;
      typeWriter(usrFortune, typewriterFortuneElement, typeWriterRate);
      output.append(div); 
      
      rstInput();
      break;
      case "dark":
        cmndHist()
        output.style.color = "#ffffff";
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
          let typewriterLoadElement = div;
          typeWriter(loading_txt, typewriterLoadElement, typeWriterRate);
          output.append(div); 


          rstInput();
          break;
    case "projects":
      cmndHist();
      /*
      div.innerHTML = projects_txt;
      output.append(div); 
      */



        newDiv = projects;
        newDiv.style.display = "block"
        div.innerHTML = `<br>`;
        output.append(div);
        output.append(newDiv);



      rstInput();
      
      






      break;
      case "posts":
        cmndHist();

        newDiv = postsDiv;
        newDiv.style.display = "block"
        div.innerHTML = `<br>`;
        output.append(div);
        output.append(newDiv);
        rstInput(); 
        break;

        case "mini_projects":
          //div.innerHTML = mini_projects_txt;
          cmndHist();
          newDiv =  miniProjectsDiv;
          newDiv.style.display = "block"
          div.innerHTML = `<br>`;
          output.append(div)
          output.append(newDiv);
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
        div.innerHTML = `<br><br><br><br><br><br>` +  clear_text + `<br><br><br><br><br><br><br>`;
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

if(input.value.length == 0){
input.style.width = '2px';
}else{
  input.style.width = 'initial';
  input.setAttribute('size', input.value.length);
}
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


function typeWriter(text, element, speed) {
  let i = 0;
  const length = text.length;

  function type() {
      if (i < length) {
          if (text.charAt(i) === '<') {
              // Find the closing '>' character for the HTML tag
              const closingIndex = text.indexOf('>', i);
              if (closingIndex !== -1) {
                  const htmlTag = text.substring(i, closingIndex + 1);
                  element.innerHTML += htmlTag;
                  i = closingIndex + 1;
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                  //window.scrollTo(0, document.body.scrollHeight);
              }
          } else {
              element.innerHTML += text.charAt(i);
              i++;
          }
          setTimeout(type, speed);
      }
  }

  type();
}













const fortuneArr = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
  "A friend is a present you give yourself.",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
  "A golden egg of opportunity falls into your lap this month.",
  "A good friendship is often more important than a passionate romance.",
  "A good time to finish up old tasks.",
  "A hunch is creativity trying to tell you something.",
  "A lifetime friend shall soon be made.",
  "A lifetime of happiness lies ahead of you.",
  "A light heart carries you through all the hard times.",
  "A new outlook brightens your image and brings new friends.",
  "A new perspective will come with the new year.",
  "A person is never to (sic) old to learn. ",
  "A person of words and not deeds is like a garden full of weeds.",
  "A pleasant surprise is waiting for you.",
  "A short pencil is usually better than a long memory any day.",
  "A small donation is call for. It’s the right thing to do.",
  "A smile is your personal welcome mat.",
  "A smooth long journey! Great expectations.",
  "A soft voice may be awfully persuasive.",
  "A truly rich life contains love and art in abundance.",
  "Accept something that you cannot change, and you will feel better.",
  "Adventure can be real happiness.",
  "Advice is like kissing. It costs nothing and is a pleasant thing to do. ",
  "Advice, when most needed, is least heeded.",
  "All the effort you are making will ultimately pay off.",
  "All the troubles you have will pass away very quickly.",
  "All will go well with your new project.",
  "All your hard work will soon pay off.",
  "Allow compassion to guide your decisions.",
  "An acquaintance of the past will affect you in the near future.",
  "An agreeable romance might begin to take on the appearance.",
  "An important person will offer you support.",
  "An inch of time is an inch of gold.",
  "Any day above ground is a good day.",
  "Any decision you have to make tomorrow is a good decision.",
  "At the touch of love, everyone becomes a poet.",
  "Be careful or you could fall for some tricks today.",
  "Beauty in its various forms appeals to you. ",
  "Because you demand more from yourself, others respect you deeply.",
  "Believe in yourself and others will too.",
  "Believe it can be done.",
  "Better ask twice than lose yourself once.",
  "Bide your time, for success is near.",
  "Carve your name on your heart and not on marble.",
  "Chance favors those in motion.",
  "Change is happening in your life, so go with the flow!",
  "Competence like yours is underrated.",
  "Congratulations! You are on your way.",
  "Could I get some directions to your heart? ",
  "Courtesy begins in the home.",
  "Courtesy is contagious.",
  "Curiosity kills boredom. Nothing can kill curiosity.",
  "Dedicate yourself with a calm mind to the task at hand.",
  "Depart not from the path which fate has you assigned.",
  "Determination is what you need now.",
  "Diligence and modesty can raise your social status.",
  "Disbelief destroys the magic.",
  "Distance yourself from the vain.",
  "Do not be intimidated by the eloquence of others.",
  "Do not demand for someone’s soul if you already got his heart.",
  "Do not let ambitions overshadow small success.",
  "Do not make extra work for yourself.",
  "Do not underestimate yourself. Human beings have unlimited potentials.",
  "Do you know that the busiest person has the largest amount of time?",
  "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
  "Don’t confuse recklessness with confidence. ",
  "Don’t expect romantic attachments to be strictly logical or rational.",
  "Don’t just spend time. Invest it.",
  "Don’t just think, act!",
  "Don’t let friends impose on you, work calmly and silently.",
  "Don’t let the past and useless detail choke your existence.",
  "Don’t let your limitations overshadow your talents.",
  "Don’t worry; prosperity will knock on your door soon.",
  "Each day, compel yourself to do something you would rather not do.",
  "Education is the ability to meet life’s situations.",
  "Embrace this love relationship you have!",
  "Emulate what you admire in your parents. ",
  "Emulate what you respect in your friends.",
  "Every flower blooms in its own sweet time.",
  "Every wise man started out by asking many questions.",
  "Everyday in your life is a special occasion.",
  "Everywhere you choose to go, friendly faces will greet you.",
  "Expect much of yourself and little of others.",
  "Failure is the chance to do better next time.",
  "Failure is the path of lease persistence.",
  "Fear and desire – two sides of the same coin.",
  "Fearless courage is the foundation of victory.",
  "Feeding a cow with roses does not get extra appreciation.",
  "First think of what you want to do; then do what you have to do.",
  "Follow the middle path. Neither extreme will make you happy.",
  "For hate is never conquered by hate. Hate is conquered by love.",
  "For the things we have to learn before we can do them, we learn by doing them.",
  "Fortune Not Found: Abort, Retry, Ignore?",
  "From listening comes wisdom and from speaking repentance.",
  "From now on your kindness will lead you to success.",
  "Get your mind set – confidence will lead you on.",
  "Get your mind set…confidence will lead you on.",
  "Go for the gold today! You’ll be the champion of whatever.",
  "Go take a rest; you deserve it.",
  "Good news will be brought to you by mail.",
  "Good news will come to you by mail.",
  "Good to begin well, better to end well.",
  "Happiness begins with facing life with a smile and a wink.",
  "Happiness will bring you good luck.",
  "Happy life is just in front of you.",
  "Hard words break no bones, fine words butter no parsnips.",
  "Have a beautiful day.",
  "He who expects no gratitude shall never be disappointed. ",
  "He who knows he has enough is rich.",
  "He who knows others is wise. He who knows himself is enlightened.",
  "Help! I’m being held prisoner in a chinese bakery!",
  "How many of you believe in psycho-kinesis? Raise my hand.",
  "How you look depends on where you go.",
  "I learn by going where I have to go.",
  "If a true sense of value is to be yours it must come through service.",
  "If certainty were truth, we would never be wrong.",
  "If you continually give, you will continually have.",
  "If you look in the right places, you can find some good offerings.",
  "If you think you can do a thing or think you can’t do a thing, you’re right.",
  "If you wish to see the best in others, show the best of yourself.",
  "If your desires are not extravagant, they will be granted.",
  "If your desires are not to extravagant they will be granted. ",
  "If you’re feeling down, try throwing yourself into your work.",
  "Imagination rules the world.",
  "In order to take, one must first give.",
  "In the end all things will be known.",
  "In this world of contradiction, It’s better to be merry than wise.",
  "It could be better, but its [sic] good enough.",
  "It is better to be an optimist and proven a fool than to be a pessimist and be proven right.",
  "It is better to deal with problems before they arise.",
  "It is honorable to stand up for what is right, however unpopular it seems.",
  "It is worth reviewing some old lessons.",
  "It takes courage to admit fault.",
  "It’s not the amount of time you devote, but what you devote to the time that counts.",
  "It’s time to get moving. Your spirits will lift accordingly.",
  "Keep your face to the sunshine and you will never see shadows.",
  "Let the world be filled with tranquility and goodwill.",
  "Like the river flow into the sea. Something are just meant to be.",
  "Listen not to vain words of empty tongue.",
  "Listen to everyone. Ideas come from everywhere.",
  "Living with a commitment to excellence shall take you far.",
  "Long life is in store for you.",
  "Love is a warm fire to keep the soul warm.",
  "Love is like sweet medicine, good to the last drop.",
  "Love lights up the world.",
  "Love truth, but pardon error.",
  "Man is born to live and not prepared to live.",
  "Man’s mind, once stretched by a new idea, never regains it’s original dimensions.",
  "Many will travel to hear you speak.",
  "Meditation with an old enemy is advised.",
  "Miles are covered one step at a time.",
  "Nature, time and patience are the three great physicians.",
  "Never fear! The end of something marks the start of something new.",
  "New ideas could be profitable.",
  "New people will bring you new realizations, especially about big issues. (2)",
  "No one can walk backwards into the future.",
  "Nothing is more difficult, and therefore more precious, than to be able to decide.",
  "Now is a good time to buy stock.",
  "Now is the time to go ahead and pursue that love interest!",
  "Now is the time to try something new",
  "Observe all men, but most of all yourself.",
  "One can never fill another’s shoes, rather he must outgrow the old shoes.",
  "One of the first things you should look for in a problem is its positive side.",
  "Others can help you now.",
  "Pennies from heaven find their way to your doorstep this year!",
  "People are attracted by your Delicate [sic] features.",
  "People find it difficult to resist your persuasive manner.",
  "Perhaps you’ve been focusing too much on saving.",
  "Physical activity will dramatically improve your outlook today.",
  "Pick battles big enough to matter, small enough to win.",
  "Place special emphasis on old friendship.",
  "Po Says: Pandas like eating bamboo, but I prefer mine dipped in chocolate.",
  "Practice makes perfect.",
  "Protective measures will prevent costly disasters.",
  "Put your mind into planning today. Look into the future.",
  "Remember the birthday but never the age.",
  "Remember to share good fortune as well as bad with your friends.",
  "Rest has a peaceful effect on your physical and emotional health.",
  "Resting well is as important as working hard.",
  "Romance moves you in a new direction.",
  "Savor your freedom – it is precious.",
  "Say hello to others. You will have a happier day.",
  "Self-knowledge is a life long process.",
  "Share your joys and sorrows with your family.",
  "Sift through your past to get a better idea of the present.",
  "Sloth makes all things difficult; industry all easy.",
  "Small confidences mark the onset of a friendship.",
  "Smile when you are ready.",
  "Society prepares the crime; the criminal commits it.",
  "Someone you care about seeks reconciliation.",
  "Soon life will become more interesting.",
  "Stand tall. Don’t look down upon yourself. (2)",
  "Staying close to home is going to be best for your morale today",
  "Stop searching forever, happiness is just next to you.",
  "Strong reasons make strong actions.",
  "Success is a journey, not a destination.",
  "Success is failure turned inside out.",
  "Success is going from failure to failure without loss of enthusiasm.",
  "Swimming is easy. Stay floating is hard.",
  "Take care and sensitivity you show towards others will return to you.",
  "Take the high road.",
  "Technology is the art of arranging the world so we do not notice it.",
  "The austerity you see around you covers the richness of life like a veil.",
  "The best prediction of future is the past.",
  "The change you started already have far-reaching effects. Be ready.",
  "The first man gets the oyster, the second man gets the shell.",
  "The greatest achievement in life is to stand up again after falling.",
  "The harder you work, the luckier you get.",
  "The night life is for you.",
  "The one that recognizes the illusion does not act as if it is real.",
  "The only people who never fail are those who never try.",
  "The person who will not stand for something will fall for anything.",
  "The philosophy of one century is the common sense of the next.",
  "The saints are the sinners who keep on trying.",
  "The secret to good friends is no secret to you.",
  "The small courtesies sweeten life, the greater ennoble it.",
  "The smart thing to do is to begin trusting your intuitions.",
  "The strong person understands how to withstand substantial loss.",
  "The sure way to predict the future is to invent it.",
  "The truly generous share, even with the undeserving.",
  "The value lies not within any particular thing, but in the desire placed on that thing.",
  "The weather is wonderful. ",
  "There is a time for caution, but not for fear.",
  "There is no mistake so great as that of being always right.",
  "There is no wisdom greater than kindness. ",
  "There is not greater pleasure than seeing your lived (sic) ones prosper.",
  "There’s no such thing as an ordinary cat.",
  "Things don’t just happen; they happen just.",
  "Those who care will make the effort.",
  "Time and patience are called for many surprises await you!. (sic)",
  "Time is precious, but truth is more precious than time",
  "To know oneself, one should assert oneself.",
  "To the world you may be one person, but to one person you may be the world.",
  "Today is the conserve yourself, as things just won’t budge.",
  "Today, your mouth might be moving but no one is listening.",
  "Tonight you will be blinded by passion.",
  "Use your eloquence where it will do the most good.",
  "We first make our habits, and then our habits make us.",
  "Welcome change.",
  "“Welcome” is a powerful word.",
  "Well done is better than well said.",
  "What’s hidden in an empty box?",
  "What’s that in your eye? Oh…it’s a sparkle.",
  "What’s yours in mine, and what’s mine is mine.",
  "When more become too much. It’s same as being not enough.",
  "When your heart is pure, your mind is clear.",
  "Wish you happiness.",
  "With age comes wisdom.",
  "You (sic) adventure could lead to happiness.",
  "You always bring others happiness.",
  "You are a person of another time.",
  "You are a talented storyteller. ",
  "You are admired by everyone for your talent and ability.",
  "You are almost there.",
  "You are busy, but you are happy.",
  "You are generous to an extreme and always think of the other fellow.",
  "You are going to have some new clothes. ",
  "You are in good hands this evening.",
  "You are interested in higher education, whether material or spiritual.",
  "You are modest and courteous.",
  "You are never selfish with your advice or your help.",
  "You are next in line for promotion in your firm.",
  "You are offered the dream of a lifetime. Say yes!",
  "You are open-minded and quick to make new friends. ",
  "You are solid and dependable.",
  "You are soon going to change your present line of work.",
  "You are talented in many ways.",
  "You are the master of every situation. ",
  "You are very expressive and positive in words, act and feeling.",
  "You are working hard.",
  "You begin to appreciate how important it is to share your personal beliefs.",
  "You can keep a secret.",
  "You can see a lot just by looking.",
  "You can’t steal second base and keep your foot on first.",
  "You desire recognition and you will find it.",
  "You have a deep appreciation of the arts and music.",
  "You have a deep interest in all that is artistic.",
  "You have a friendly heart and are well admired. ",
  "You have a shrewd knack for spotting insincerity.",
  "You have a yearning for perfection. ",
  "You have an active mind and a keen imagination.",
  "You have an ambitious nature and may make a name for yourself.",
  "You have an unusual equipment for success, use it properly.",
  "You have exceeded what was expected.",
  "You have had a good start. Work harder!",
  "You have the power to write your own fortune.",
  "You have yearning for perfection.",
  "You know where you are going and how to get there.",
  "You look pretty.",
  "You love challenge.",
  "You love chinese food.",
  "You make people realize that there exist other beauties in the world.",
  "You never hesitate to tackle the most difficult problems. ",
  "You never know who you touch.",
  "You only treasure what you lost.",
  "You seek to shield those you love and like the role of provider. ",
  "You should be able to make money and hold on to it.",
  "You should be able to undertake and complete anything.",
  "You should pay for this check. Be generous.",
  "You understand how to have fun with others and to enjoy your solitude.",
  "You will always be surrounded by true friends.",
  "You will always get what you want through your charm and personality.",
  "You will always have good luck in your personal affairs.",
  "You will be a great success both in the business world and society. ",
  "You will be blessed with longevity.",
  "You will be pleasantly surprised tonight.",
  "You will be sharing great news with all the people you love.",
  "You will be successful in your work.",
  "You will be traveling and coming into a fortune.",
  "You will be unusually successful in business.",
  "You will become a great philanthropist in your later years.",
  "You will become more and more wealthy.",
  "You will enjoy good health.",
  "You will enjoy good health; you will be surrounded by luxury.",
  "You will find great contentment in the daily, routine activities.",
  "You will have a fine capacity for the enjoyment of life.",
  "You will have gold pieces by the bushel.",
  "You will inherit a large sum of money.",
  "You will make change for the better.",
  "You will soon be surrounded by good friends and laughter.",
  "You will take a chance in something in near future.",
  "You will travel far and wide, both pleasure and business.",
  "Your abilities are unparalleled.",
  "Your ability is appreciated.",
  "Your ability to juggle many tasks will take you far.",
  "Your biggest virtue is your modesty.",
  "Your character can be described as natural and unrestrained.",
  "Your difficulties will strengthen you.",
  "Your dreams are never silly; depend on them to guide you.",
  "Your dreams are worth your best efforts to achieve them.",
  "Your energy returns and you get things done.",
  "Your family is young, gifted and attractive.",
  "Your first love has never forgotten you.",
  "Your goal will be reached very soon.",
  "Your happiness is before you, not behind you! Cherish it.",
  "Your hard work will payoff today.",
  "Your heart will always make itself known through your words.",
  "Your home is the center of great love.",
  "Your ideals are well within your reach.",
  "Your infinite capacity for patience will be rewarded sooner or later.",
  "Your leadership qualities will be tested and proven.",
  "Your life will be happy and peaceful.",
  "Your life will get more and more exciting.",
  "Your love life will be happy and harmonious.",
  "Your love of music will be an important part of your life.",
  "Your loyalty is a virtue, but not when it’s wedded with blind stubbornness.",
  "Your mentality is alert, practical, and analytical.",
  "Your mind is creative, original and alert.",
  "Your mind is your greatest asset.",
  "Your moods signal a period of change.",
  "Your quick wits will get you out of a tough situation.",
  "Your reputation is your wealth.",
  "Your success will astonish everyone.",
  "Your talents will be recognized and suitably rewarded.",
  "Your work interests can capture the highest status or prestige."
];
