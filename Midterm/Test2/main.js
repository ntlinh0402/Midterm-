let weather=prompt("Insert temperature:")
if (weather>40||weather<-12){
    console.log("Can't live")
}else if(weather>=25){
    console.log("hot")
}else if(weather>=15){
    console.log("cool")
}else if(weather>=0){
    console.log("cold")
}else{
    console.log("extra cold")
}