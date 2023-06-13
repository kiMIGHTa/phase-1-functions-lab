// Code your solution in this file!
const scuberHq = 42
function distanceFromHqInBlocks(street){
    if(street>42){
        return street-scuberHq 
    }else {
        return scuberHq-street
    }   
}

function distanceFromHqInFeet(street){
    let blockDistance= distanceFromHqInBlocks(street)
    return blockDistance*264
}

function distanceTravelledInFeet(start, destination){
    if(start>destination){
        return (start-destination)*264
    }else{
        return (destination-start)*264
    }
}

function calculatesFarePrice(start,destination){
    let distanceCharged = distanceTravelledInFeet(start, destination)
    if(distanceCharged<=400){
        return 0
    }else if(distanceCharged>400 && distanceCharged<=2000){
        let fareInCents = (distanceCharged-400)*2 
        let fareInDollars = fareInCents/100
        return fareInDollars

    }else if(distanceCharged>2000 && distanceCharged<=2500){
        let fare = 25 
        return fare

    }else if(distanceCharged>2500){
        return `cannot travel that far`
    }

}


