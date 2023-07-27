//looping in javascript

//for loop

// for (let i=1; i<= 10; i++)
// {
//     document.write("   "+ "Rupesh" )
// }

// while loop

// let i=0;
// while (i<10){
//     document.write(" "+ i);
//     i++;
// }

//do while loop
// let a=0;
// do{
//     document.write(" "+ a);
//     a++;
// }
// while(a<=10) 

//Array

//  const days =['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// document.write( " "+ days, "<br>")

// // days.forEach (function (abc){

// //     document.write(" "+ abc)
// // })
// days.shift ();
//    document.write(" "+ days, "<br>")

// days.unshift ( "Janaury");
//    document.write(" <br>"+ days)

// days.pop();
//    document.write( "<br>"+ days)

// days.push("December");
//    document.write( "<br>"+ days)

function si (){
    let principle = document.getElementById ('p').value;
    let time = document.getElementById ('t').value;
    let rate = document.getElementById ('r').value;

    let si = principle * rate * time /100;
    document.getElementById ('result') .innerHTML=si;
}


