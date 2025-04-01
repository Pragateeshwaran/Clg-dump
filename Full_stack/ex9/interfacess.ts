import * as readlineSync from 'readline-sync';

interface Product {
    id: number;
    name: string;
    price: number;
}

const getProductFromUser = (): Product => {
    const id = parseInt(readlineSync.question('Enter product ID: '), 10);
    const name = readlineSync.question('Enter product name: ');
    const price = parseFloat(readlineSync.question('Enter product price: '));
    return { id, name, price };
};

const findProduct = (products: Product[], id: number): string => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            const product = products[i];
            return `Product found: ${product.name}, Price: $${product.price}`;
        }
    }
    return 'Product not found';
};

const main = (): void => {
    const products: Product[] = [];

    for (let i = 0; i < 3; i++) {
        console.log(`Enter details for product ${i + 1}:`);
        const product = getProductFromUser();
        products.push(product);
    }

    const idToSearch = parseInt(readlineSync.question('Enter product ID to search: '), 10);
    const result = findProduct(products, idToSearch);
    console.log(result);
};

main();
