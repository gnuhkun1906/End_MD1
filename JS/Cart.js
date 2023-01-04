class Cart {
    image;
    name
    message;
    price;

    // buyName
    // phone
    // address
    // time


    constructor(image, name, message, price ) {
        this.image = image;
        this.name = name;
        this.message = message;
        this.price = price;

        // this.buyName = buyName;
        // this.phone = phone;
        // this.address = address;
        // this.time = time;
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
        this._name = name;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this._message = message;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }




// getBuyName() {
    //     return this.buyName;
    // }
    //
    // setBuyName(buyName) {
    //     this.buyName = buyName;
    // }
    //
    // getPhone() {
    //     return this.phone;
    // }
    //
    // setPhone(phone) {
    //     this.phone = phone;
    // }
    //
    // getAddress() {
    //     return this.address;
    // }
    //
    // setAddress(address) {
    //     this.address = address;
    // }
    //
    // getTime() {
    //     return this.time;
    // }
    //
    // setTime(time) {
    //     this.time = time;
    // }
}