import { from, map, mergeMap, Observable } from "rxjs";

interface ItemToSell {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  id: number;
  amount: number;
  item: ItemToSell;
}

// Single source of truth - na temat koszyka w naszej aplikacji
export class CartService {
  // to poprawimy na subject:
  private item$: Observable<CartItem[]> = from([
    [
      { id: 1, amount: 2, item: { name: "laptop", id: 1, price: 2000 } },
      { id: 12, amount: 1, item: { name: "smartphone", id: 12, price: 200 } },
    ],
  ]);

  addItem(item: ItemToSell) {
    // 1. weź aktualne items
    // 2. sprawdź czy nie ma już item w koszyku ?
    // 2.1 jeśli jest to zwiększ amount +1
    // 2.2. jeśli nie ma - to DODAJ
    // items = [ CartItem, CartItem, +CartItem ]
    // this.item$ ??? jak to modyfikować ?!
    // tl;dr -> Subjects !!!
  }

  getCount(): Observable<number> {
    return this.item$.pipe(
      map((items) => items.map((i) => i.amount).reduce((a, b) => a + b))
    );
  }

  getTotalPrice(): Observable<number> {
    return this.item$.pipe(
      map((items) =>
        items.map((i) => i.amount * i.item.price).reduce((a, b) => a + b)
      )
    );
  }
}

// TODO:
// 1. dodać Subjects!
// 2. sprawdzic działanie / przetestować:

const myCartService = new CartService();

myCartService.getCount().subscribe((v) => {
  console.log(v);
});

myCartService.getTotalPrice().subscribe((v) => {
  console.log(v);
});
