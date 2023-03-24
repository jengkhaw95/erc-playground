import {ethers} from "ethers";

const target = [
  /0x951114/g,
  /0x1110/g,
  /0x2220/g,
  /0x3330/g,
  /0x4440/g,
  /0x5550/g,
  /0x6660/g,
  /0x7770/g,
  /0x8880/g,
  /0x9990/g,
];
let isComplete = false;
let iteration = 0;

while (!isComplete) {
  const wallet = ethers.Wallet.createRandom();
  iteration++;
  if (target.some((regex) => wallet.address.match(regex))) {
    isComplete = true;
    console.log(wallet);
  }
  console.log(iteration);
}
