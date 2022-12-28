class Product{
    id;
    image;
    name;
    message;
    price;

    constructor(id,image, name, message, price) {
        this.image = image;
        this.name = name;
        this.message = message;
        this.price = price;
        this.id=id
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id=id
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}