// Formula for minute hand
// 12hour=360 degree
// 1hour=360/12 degree
// 1hour=30 degree

// 60min=30degree
// 1min=1/2degree
// m minute=m/2 degree

// h hour=30h+m/2


// Formula for minute hand
// 60 min=360 degree
// 1min=6 degree
// m minute=6m

// formula for second hand
// 60 sec=360degree
// 1 sec=6 degree
// s sec=6s


setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
  minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${srotation}deg)`;
},1000);