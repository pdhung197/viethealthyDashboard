const isValidObject = (validObject) => {
    if (!validObject || !Object.keys(validObject).length) return false;

    for (let [key, value] of Object.entries(validObject)) {
        if (!value) return false
    }

    return true;
}

const isRequiredValue = (value) => {
    return !(value === null || value === undefined || value.toString().trim() === '');
}

export default {
    isValidObject,
    isRequiredValue
}