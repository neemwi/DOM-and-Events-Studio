// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){


    let takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight');
    let landButton = document.getElementById("landing");
    let abortButton = this.document.getElementById('missionAbort');
    let upButton = this.document.getElementById('up');
    let downButton = this.document.getElementById('down');
    let rightButton = this.document.getElementById('right');
    let leftButton = this.document.getElementById('left');
    let rocket = this.document.getElementById("rocket");

    
    takeOffButton.addEventListener('click', function(){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
    if (response){
        
    
        status.innerText = "Shuttle in flight";
        background.style.background = 'blue';
        height.innerText = 10000
      
    }
    
    
    })

    landButton.addEventListener('click', function(){
        let popup = window.alert("The Shuttle is landing. Landing gear engaged.");
        status.innerText = "The shuttle has landed.";
        background.style.background = 'green'
        height.innerText = 0;


        
    })
    
    abortButton.addEventListener('click', function(){
        let cancelMission = window.confirm( "Confirm that you want to abort the mission." );
        if(cancelMission){
            status.innerText = "Mission Aborted";
            background.style.background = 'green';
            height.innerText = 0;
        }
    })


   rocket.style.left="0px";
   rocket.style.top="0px";

    upButton.addEventListener('click', function(){
        let heightAmount = Number(height.innerText);
        heightAmount += 10000;
        height.innerText = heightAmount;
        rocket.style.top= parseInt(rocket.style.top) - 10+"px";
       
    })

    downButton.addEventListener('click', function(){
        let heightAmount = Number(height.innerText);
        if (heightAmount == 0){
            heightAmount = 0;
        } else {
            heightAmount = heightAmount-10000
        }
        
        height.innerText = heightAmount;
        rocket.style.top= parseInt(rocket.style.top) + 10+"px";
    })

    leftButton.addEventListener('click', function(){
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';

        //rocket.style.left=10+"px";
    })

    rightButton.addEventListener('click', function(){
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';

        //rocket.style.right=10+="px";
    })
    
    
    
    })
    