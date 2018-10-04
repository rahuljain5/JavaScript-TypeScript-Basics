Customer = {
    id: "id",
    fname: "fname",
    lname: "lname",
    phone: "phone",
    addr1: "addr1",
    addr2: "addr2",
    city: "city",
    state: "state",
    code: "code",
    country: "country",
    creditLimit: "creditLimit",
    Order: {
        id: "id",
        custId: "custId",
        orderDate: "orderDate",
        requiredDate: "requiredDate",
        shippedDate: "shippedDate",
        comments: "comments",
        Payment: {
            checkNum: "checkNum",
            customerId: "customerId",
            paymentDate: "paymentDate",
            amt: "amt"
        }
    },
    Product: {
        code: "",
        pid: '',
        name: 'name',
        scale: 'scale',
        vendor: 'vendor',
        pdtDesc: 'pdtDesc',
        Qty: 'Qty',
        buyPrice: 'buyPrice',
        msrp: 'msrp'
    }
}