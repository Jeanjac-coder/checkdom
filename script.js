

// let number = [ 15,85,36,25]

// let resultat = number.map((x) => {
//     return x * x
// })
// console.log(resultat)

let nom = [1,2,3,4,5];
let nom2 = [6,7,8,9,10];

// let relierv = nom.concat(nom2)
// console.log(relierv)

// const rassemble = (a,b) => a.concat(b);
// console.log(rassemble (nom, nom2));



// nom2.splice(2,3, 'jack', 'kiki');
// console.log(nom2)

// let index = nom2.lastIndexOf("lyly")
// console.log(index);


// let nums = [18, 5, 8, 25, 1];

// let sorted = nums.sort((a,b) => b - a );
// console.log(sorted);

// let n = 10;
// let sup = num.some((n) => n == 3);
// console.log(sup)



// let total = num.reduce((tota, value) => tota + value, );
// console.log(total);
 

// let count = 2;
// num.forEach((n) => {
//     console.log(n)
// });

// let count = 0;
// nom2.forEach((n) => {
//     count ++
// })
// console.log(count)

// for (let i = 0; i < num.length; i ++) {
//     console.log(num)
// }

// let double = num.map((n) => n * 8);
// console.log(double);

// let post = [
//     { titre : 'art 1', auteur: 'jack'},
//     { titre : 'art 2', auteur: 'lolo'},
//     { titre : 'art 3', auteur: 'kiki'},
// ];

// let monPosti = post.filter((p)=> p.auteur !='jack');
// console.log(monPosti);




// let stock = [
//     { items:'ketchup', quantity: 20},
//     { items:'mayo', quantity: 78},
//     { items:'mourtade', quantity: 8},
// ];

// // let set = stock.find((z) => z.items === 'ketchup');
// // console.log(set);

// console.log(Object.keys(stock))
// console.log(Object.values(stock))



// const gens = [
//     {name : "marc", age:23},
//     {name : "marc", age:63},
//     {name : "marc", age:43},
//     {name : "marc", age:32},
//     {name : "marc", age:22},
//     {name : "marc", age:24}
// ]

// const gensFiltres = gens.filter(obj => obj.age > 30)

// console.log(gensFiltres)





//  const boot = ['fw','fx','fy','fz'];
//  const boot6 = ['fw',['fx'],['fy',['fz'],'ff']];

// const nvTab = [];

// for ( let i = 0; i < boot6.length; i++ ) {
//     nvTab[i] = boot6[i].slice()
// }




// const cleantab2 = {
//     truc : 25, 
//     chose : 85, 
//     ordi :23, 
//     psiton : 10
// }

// const cleantab1 = {
//     mayo : 5, 
//     chili : 8, 
//     mourtade :3, 
//     ketchup : 17
// }



// // const compare = (a,b) => a.length === b.length && a.every((v, i) => v === b[i]);
// // console.log(compare(cleantab, cleantab2))

// // const rassemble = (a,b) => a.concat(b)
// // console.log(rassemble(cleantab, cleantab2))

// const fau = arr => arr.filter(Boolean)
// console.log(fau (cleantab))

// const LierLesTrucs = {
//     ...cleantab2,
//     ...cleantab1
// }

// console.log(LierLesTrucs);


// const depense = {
//     chauffage : 100,
//     internet : 30,
//     sodeci : 700,
//     impot : 500,
//     loisirs : 10,
//     mutuelle: 78,
// }
 
// const props = Object.values(depense)
// console.log(props);

  
// const total =Object.values(depense).reduce((acc,depense) =>  acc + depense, 100);
// console.log(total)


// const buttons = document.querySelectorAll('button');

// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         alert(e.target.getAttribute('data-action'))
//     })
// })

// const num = [14,1,22,3,41,5,16,7,18,9,12,17];

// const moyen = num.reduce((a,b) => a + b) / num.length
// console.log(moyen)


// function reversestring (str) {
//     console.log(str.split('').reverse().join(''));
// }

// const string = 'hello les gens';

// reversestring(string)

// Sélectionnez la balise <div> de l'horloge
// const clock = document.getElementById('clock');

// // Fonction pour mettre à jour l'heure de l'horloge
// function updateClock() {
//   const now = new Date(); // Obtenir l'heure actuelle

//   // Formatage de l'heure au format HH:MM:SS
//   const time = now.getHours().toString().padStart(2, '0') + ':' +
//                now.getMinutes().toString().padStart(2, '0') + ':' +
//                now.getSeconds().toString().padStart(2, '0');

//   // Affichage de l'heure dans la balise <div> de l'horloge
//   clock.textContent = time;
// }

// // Mettre à jour l'horloge toutes les secondes
// setInterval(updateClock, 1000);

// Récupérez les boutons et les articles

// Fonction pour ajuster la quantité d'un article



// Fonction pour ajuster la quantité d'un fruit
function adjustQuantity(element, change) {
  const quantityElement = element.querySelector('.quantity');
  let quantity = parseInt(quantityElement.textContent);
  quantity += change;
  if (quantity >= 0) {
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
}

// Fonction pour supprimer un fruit du panier
function removeItem(element) {
  element.remove();
  updateTotal();

}


// Fonction pour mettre à jour le prix total
function updateTotal() {
  const items = document.querySelectorAll('#item-list li');
  let total = 0;
  items.forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    total += quantity;
  });
  document.querySelector('#total span').textContent = total;
}

// les boutons du panier
const cart = document.querySelector('#cart');
cart.addEventListener('click', event => {
  const target = event.target;
  const listItem = target.closest('li');
  if (target.classList.contains('increase-quantity')) {
    adjustQuantity(listItem, 1);
  } else if (target.classList.contains('decrease-quantity')) {
    adjustQuantity(listItem, -1);
  } else if (target.classList.contains('remove-item')) {
    removeItem(listItem);
  } else if (target.classList.contains('like-item')) {
    toggleLike(target);
  }
});


// const priceElement = document.getElementsByClassName("price");

// let total = 0;
// for (let i = 0; i < priceElement.length; i++) {
//   const price = parseInt(priceElement[i].textContent);
//   total += price;
// }
// const totalAmountElement = document.getElementById("totalAmount");
// totalAmountElement.textContent = total;

































 