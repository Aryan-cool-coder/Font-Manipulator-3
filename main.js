difference =0;

function preload() {

}

function draw() {

}

function setup() {
video = createCapture(VIDEO);
video.size(500, 500);
canvas = createCanvas(500, 500);
canvas.position(600, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    document.getElementById('size').innerHTML = "current size of the word is: " + difference;
    }
} 

function modelLoaded() {
    console.log('Pose net is initialized');
}

function draw() {
    background("navy");
    textSize(difference);
    fill('cyan');
    text('Aryan', 100, 250);
}