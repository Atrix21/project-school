const dog = {
    name: "Gabar",
    activities: ["play", "eat dog food"],
    dogFriends: [
        {
            name: "Ira",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "Snowy",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }
    ]};
console.log(dog);
dog.weight=3;
dog.height=4;
dog.name="Gabbar";
let d1=dog.dogFriends;
console.log("DOG FRIENDS:");
d1.forEach(x=>console.log(x.name));
console.log("\n");
let w=0;
d1.forEach(y=>w=w+y.weight);
console.log("TOTAL WEIGHT = "+w+"\n");
console.log("ACTIVITIES:");
dog.activities.forEach(x=>console.log(x));
d1.forEach(x=>x.activities.forEach(y=>console.log(y)));
console.log("\n");
d1.forEach(x=>x.activities.push("walk","post-sleep naps"));
console.log(dog.dogFriends[0].activities);
dog.dogFriends[0].furcolor="brown";
console.log(dog);
let dog2=JSON.stringify(dog);
console.log(dog2);