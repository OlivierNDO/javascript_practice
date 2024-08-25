// Classes

let products = [
    { name: "apple", price: 1.25 },
    { name: "banana", price: 0.75 },
    { name: "cherry", price: 3.00 },
    { name: "date", price: 2.50 },
    { name: "elderberry", price: 5.00 },
    { name: "fig", price: 2.00 },
    { name: "grape", price: 1.75 }
];



class ProductQuery {
    constructor(product_array) {
        this.product_array = product_array;
        this.product_names = this.get_product_names()
    }

    get_product_names() {
        return this.product_array.map(x => x.name)
    }

    get_price_of(product_name) {
        if (!this.product_names.includes(product_name)) {
            let error_msg = `${product_name} is not found in your input array`;
            console.log(error_msg);
            throw new Error(error_msg);
        }
        return this.product_array.filter(obj => obj.name == product_name)
    }

    get_products_by_price(min = null, max = null) {
        return this.product_array.filter(
            product => (product.price <= max || max === null) &&
                (product.price >= min || min === null)
        )
    }

    summarize_products_in_price_range(min = null, max = null) {
        let products_in_range = this.get_products_by_price(min, max);
        return products_in_range.map(
            product => `${product.name.charAt(0).toUpperCase() + product.name.slice(1)}: $${product.price}`
        ).sort().join(', ');


    }
}


let grocery_query = new ProductQuery(product_array = products);
//let banana_price = grocery_query.get_price_of('banana');
//console.log(banana_price);

//let cheap_products = grocery_query.get_products_by_price(min = null, max = 0.99);
//console.log(cheap_products)

let two_dollar_summary = grocery_query.summarize_products_in_price_range(min = 2, max = 2.99);
console.log(two_dollar_summary);



//console.log(grocery_query.get_product_names())


