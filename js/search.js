

function normalizeQuery(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function dishMatchesQuery(dish, query) {
    const haystack = [
        dish.name,
        dish.region,
        dish.regionSlug,
        dish.description,
        dish.history,
        (dish.ingredients || []).join(" ")
    ]
        .join(" ")
        .toLowerCase();

    return haystack.includes(query);
}

function searchDishes(rawQuery) {
    const query = normalizeQuery(rawQuery);

    if (!query) {
        return [];
    }

    return dishes.filter(function (dish) {
        return dishMatchesQuery(dish, query);
    });
}
