enum Categories {
    a, b, c, d, e, f
}

const categoriesList = () => {
    const result = [];
    for (const c in Categories) {
        if (Categories.hasOwnProperty(c) && isNaN(Number(c))) {
            result.push({ value: Categories[c], name: c });
        }
    }
    return result;
};

export { Categories, categoriesList };
