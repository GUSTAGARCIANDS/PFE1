let times = ["Flamengo", "Palmeiras", "São Paulo"];

times.push("Corinthians");

times.unshift("Grêmio");

delete times[4];

console.log(times.indexOf("Palmeiras"));

times.reverse();

console.log(times);