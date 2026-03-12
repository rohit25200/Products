namespace db;

entity Products {

    key id : UUID;
    name : String(50);
    price : Decimal(10, 2);
    category : String(100);
    
}