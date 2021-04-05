let drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name='Johnny'){
    drivers.push(name);
}
function destructivelyPrependDriver (){
    drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver () {
    drivers.pop();
}
function destructivelyRemoveFirstDriver() {
    drivers.shift();
}
function appendDriver(name='John'){
    return [...drivers,name];
}
function prependDriver(name='John'){
    return [name,...drivers]
}
function removeFirstDriver(){
    return drivers.slice(1);
}
function removeLastDriver() {
    return drivers.slice(0,-1);
}