export function checkForDublicate(item, db) {
    let noCopy = true;

    db.forEach((pass) => {
        if (pass.content.trim() === item.trim()) {
            noCopy = false;
        }

    });

    return noCopy;
}