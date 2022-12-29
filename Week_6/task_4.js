const fifa_scorers= [
    { name: "Kylian Mbappe" },
    { name: "Messi" },
    { name: "Olivier" },
    { name: "Julain" },
    { name: "Marcus" }
    ];
const f2=fifa_scorers.map(x=>JSON.parse(`{"goals":${5},"hero":"${x.name}"}`));
console.log(f2);
console.log(JSON.stringify(f2));