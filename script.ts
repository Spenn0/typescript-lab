// 1
interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

//2
interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "roland go keys",
    price: 400,
  },
  {
    name: "la prie parlor guitar",
    price: 500,
  },
  {
    name: "1960s ludwig kit",
    price: 600,
  },
  {
    name: "Pink Sparkle Epiphone Casino",
    price: 900,
  },
  {
    name: "two egg shakers",
    price: 5,
  },
];

//3
interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1 },
    quantity: 20,
  },
];

//1
let findNameOfTallestMountain = (anArrayOfMountains: Mountain[]): string => {
  let tallestMountain = anArrayOfMountains[0];
  if (anArrayOfMountains === []) {
    return "";
  }
  anArrayOfMountains.forEach((item) => {
    if (item.height > tallestMountain.height) {
      tallestMountain = item;
    }
  });
  return tallestMountain.name;
};
let tallestMountainEver = findNameOfTallestMountain(mountains);
console.log(tallestMountainEver);

//JOHNS SOLUTION ---------------------------------------------------
// let findNameOfTallestMountain = (anArrayOfMountains: Mountain[]): string | undefined => {
//   let largest = anArrayOfMountains[0];
//   for(let i = 0; i <= anArrayOfMountains.length; i++)
//     if (anArrayOfMountains[i].height > largest.height) {
//       largest= anArrayOfMountains[i];
//     }
// });
// return largest.name;
// };

// let tallestMountain = findNameOfTallestMountain(mountains);
//------------------------------------------------------------------

//
//2
const calcAverageProductPrice = (products: Product[]): number => {
  if (products === []) {
    return 0;
  } else {
    return (
      products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      ) / products.length
    );
  }
};

let AveragePrice = calcAverageProductPrice(products);

console.log(AveragePrice);

//MITCHES SOLUTION ---------------------------------------------------
// const calcAverageProductPrice = (products: Product[]): number => {
//   return (
//     products.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue.price;
//     }, 0) / products.length
//   );
// };
//--------------------------------------------------------------------
//NATHANS SOLUTION ---------------------------------------------------
// const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
//   let sum = 0;
//   products.forEach((value) => {
//     sum += value.price;
//   });
//   let average = sum / arrayOfProducts.length;
//   return average;
// };
// console.log(calcAverageProductPrice(products));
//------------------------------------------------------------------

//
//3
const calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let num = 0;
  if (arrayOfInventoryItems === []) {
    return 0;
  } else {
    arrayOfInventoryItems.forEach((item) => {
      num += item.product.price * item.quantity;
    });
  }
  return num;
};

let inventoryValue = calcInventoryValue(inventory);

console.log(inventoryValue);

//NOT IT ---------------------------------------------------
// const calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
//   if (products === []) {
//     return 0;
//   } else {
//     return arrayOfInventoryItems.reduce(
//       (accumulator, currentValue) => accumulator + currentValue.price,
//       0
//     );
//   }
// };

// let inventoryValue = calcInventoryValue(inventory);

// console.log(inventoryValue);
//------------------------------------------------------------------
