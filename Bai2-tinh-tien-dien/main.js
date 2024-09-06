document.querySelector("#my-form").onsubmit = function (event) {
    event.preventDefault();

    let price = getPrice() + " VND";

    document.querySelector("p#total").innerHTML = price;
};

function getPrice() {
    let price = 0;

    let kwCustomerUsed = document.querySelector("input#used-kw").value;
    if (kwCustomerUsed.length === 0 || kwCustomerUsed == 0) {
        return 0;
    }

    kwCustomerUsed = parseInt(kwCustomerUsed);

    if (kwCustomerUsed <= 50) {
        price = getPriceFirst50kw(kwCustomerUsed);
    }

    if (kwCustomerUsed > 50 && kwCustomerUsed <= 100) {
        price = getPriceFirst50kw() + getPriceSecond50kw(kwCustomerUsed - 50);
    }

    if (kwCustomerUsed > 100 && kwCustomerUsed <= 200) {
        price =
            getPriceFirst50kw() +
            getPriceSecond50kw() +
            getPriceNext100kw(kwCustomerUsed - 100);
    }

    if (kwCustomerUsed > 200 && kwCustomerUsed <= 350) {
        price =
            getPriceFirst50kw() +
            getPriceSecond50kw() +
            getPriceNext100kw() +
            getPriceNext150kw(kwCustomerUsed - 200);
    }

    if (kwCustomerUsed > 350) {
        price =
            getPriceFirst50kw() +
            getPriceSecond50kw() +
            getPriceNext100kw() +
            getPriceNext150kw() +
            getPriceLastKw(kwCustomerUsed - 350);
    }

    return price;
}

function getPriceFirst50kw(kw) {
    if (!kw) {
        return 50 * 500;
    }
    return kw * 500;
}

function getPriceSecond50kw(kw) {
    if (!kw) {
        return 50 * 650;
    }
    return kw * 650;
}

function getPriceNext100kw(kw) {
    if (!kw) {
        return 100 * 850;
    }
    return kw * 850;
}

function getPriceNext150kw(kw) {
    if (!kw) {
        return 150 * 1100;
    }
    return kw * 1100;
}

function getPriceLastKw(kw) {
    return kw * 1300;
}
