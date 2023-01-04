class Product{
    id;
    image;
    name;
    message;
    price;
    idUser

    constructor(id,image, name, message, price, idUser) {
        this.image = image;
        this.name = name;
        this.message = message;
        this.price = price;
        this.id=id
        this._idUser = idUser;
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

    getIdUser() {
        return this.idUser;
    }

    setIdUser(idUser) {
        this.idUser = idUser;
    }
}