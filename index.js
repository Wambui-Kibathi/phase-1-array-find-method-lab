function superbowlWin(list) {
    const win = list.find(function(game){
        return game.result === "W";
    });
    return win ? win.year : undefined;
}
superbowlWin.find(findResult)

function findResult(object){
    if(object.result === "W")
        console.log(year)
}
