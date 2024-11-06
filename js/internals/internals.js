// const heroesTest = [
//   {
//     name: "SF",
//     mainAttribute: "agility",
//     attackType: "ranged",
//   },
//   {
//     name: "Pudge",
//     mainAttribute: "strength",
//     attackType: "melee",
//   },
//   {
//     name: "Sniper",
//     mainAttribute: "agility",
//     attackType: "ranged",
//   },
//   {
//     name: "Necrophos",
//     mainAttribute: "intelligence",
//     attackType: "ranged",
//   },
//   {
//     name: "Bounty Hunter",
//     mainAttribute: "agility",
//     attackType: "melee",
//   },
// ];

// const heroesHelper = (heroes) => {
//   return {
//     value: heroes,
//     getHeroesByAttackType: (attackType) => {
//       const result = [];
//       for (const hero of heroes) {
//         if (hero.attackType === attackType) {
//           result.push(hero);
//         }
//       }
//       return heroesHelper(result);
//     },
//     getHeroesByMainAttribute: (mainAttribute) => {
//       const result = [];
//       for (const hero of heroes) {
//         if (hero.mainAttribute === mainAttribute) {
//           result.push(hero);
//         }
//       }
//       return heroesHelper(result);
//     },
//   };
// };

// const heroes = heroesHelper(heroesTest);

// console.log(
//   heroes.getHeroesByAttackType("ranged").getHeroesByMainAttribute("agility")
//     .value
// );

function counter(initValue) {
  let state = initValue;
  function increment(incrementBy) {
    state += incrementBy;
    return {
      value: state,
      increment,
    };
  }
  return {
    value: state,
    increment,
  };
}

const count = counter(10);

console.log(count.increment(5).increment(200).value);
