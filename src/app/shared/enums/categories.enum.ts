enum Categories {
    'Landscape',
    'Portrait',
    'Animals',
    'Architecture',
    'Other',
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
