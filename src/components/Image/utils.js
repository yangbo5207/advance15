export const setImageMode = (wrapElement, mode = 'scaleToFill') => {
    const image = wrapElement.children[0];
    let _mode = mode;

    return new Promise((resolve, reject) => {
        if (image.complete) {
            resolve()
        } else {
            image.onload = () => {
                resolve();
            }
            image.onerror = () => {
                resolve();
            }
        }
    }).then(() => {
        const imgAspect = image.naturalHeight / image.naturalWidth;
        const wrapAspect = wrapElement.offsetHeight / wrapElement.offsetWidth;

        switch (mode) {
            case 'aspectFit':
                _mode = imgAspect >= 1 ? 'aspectFit-y' : 'aspectFit-x'
                break;
            case 'aspectFill':
                _mode = imgAspect >= 1 ? 'aspectFill-x' : 'aspectFill-y';
                break;
            case 'wspectFill':
                _mode = wrapAspect > imgAspect ? 'aspectFill-y' : 'aspectFill-x';
                break;
            default:
                _mode = mode;
        }

        return _mode;
    })
}
