noseX=0;
noseY=0;

function preload()
{
    mus= loadImage("https://i.postimg.cc/mrThgLVk/mus-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mus, noseX - 25, noseY-5, 50, 50)
}

function take_snapshot()
{
   save('my_funny_pic.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY); 
    }
}

