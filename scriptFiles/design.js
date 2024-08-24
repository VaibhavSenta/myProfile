console.log("Design Script.......");

let SeeResume = document.getElementById('SeeResume')
let abouteMeNav = document.getElementById('abouteMeNav')
SeeResume.addEventListener('click',showAbout)
abouteMeNav.addEventListener('click',showAbout)

// Show about page
function showAbout() {
    
    console.log("Show Hide called");
    
    let resumeContainer = document.getElementById('resumeContainer')
    let main = document.getElementById('main')

    resumeContainer.style.display = 'flex'
    
    setTimeout(() => {
        
        resumeContainer.style.height = '90vh'
        resumeContainer.style.width = '99vw'
        main.style.width = '98vw'
        // Scroll to top
        resumeContainer.scrollTo(0,0)
    }, 20);
    
    resumeContainer.style.boxShadow = '0px -10px 15px rgb(0, 0, 0)'
}

let backTo = document.getElementById('backTo')
backTo.addEventListener('click',()=>{
    
    let resumeContainer = document.getElementById('resumeContainer')
    
    resumeContainer.style.height = '0vh'
    setTimeout(() => {
        
        resumeContainer.style.boxShadow = "none"
        main.style.width = '99vw'
        
    }, 500);
    
    setTimeout(() => {
        
        resumeContainer.style.display = 'none'
    }, 1000);
    
})



function projectDemo(project) {
    
    console.log(this);
    console.log("Project demo opening");
    

    // let project = document.getElementById('project1')
    let main = document.getElementById('main')

    let projectDemoBox = document.getElementById('projectDemoBox')
    

        if (projectDemoBox.style.display === 'flex') {
            setTimeout(() => {
                
                projectDemoBox.style.opacity = '0'
                setTimeout(() => {
                    
                    projectDemoBox.style.display = 'none'
                }, 100);
            }, 100);
        } else {
            projectDemoBox.style.display = 'flex'
            setTimeout(() => {
                projectDemoBox.style.opacity = '1'
                
            }, 400);
        }
}