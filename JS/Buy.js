class Buy{
    buyName;
    telephone;
    address;
    time;


    constructor(buyName, telephone, address, time) {
        this.buyName = buyName;
        this.telephone = telephone;
        this.address = address;
        this.time = time;
    }

    getBuyName() {
        return this.buyName;
    }

    setBuyName(buyName) {
        this.buyName = buyName;
    }

    getTelephone() {
        return this.telephone;
    }

    setTelephone(telephone) {
        this.telephone = telephone;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getTime() {
        return this.time;
    }

    setTime(time) {
        this.time = time;
    }
}