export function renderCamera(camera) {
    const li = document.createElement('li');
    li.classList.add('camera-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = camera.name;

    const pEl = document.createElement('p');
    pEl.textContent = camera.media + ' ' + camera.look;

    li.append(headerEl, pEl);

    return li;
}
