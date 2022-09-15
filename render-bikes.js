export function renderBike(bike) {
    const li = document.createElement('li');
    li.classList.add('bike-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = bike.name;

    const pEl = document.createElement('p');
    pEl.textContent = bike.position + ' ' + bike.speed;

    li.append(headerEl, pEl);

    return li;
}
