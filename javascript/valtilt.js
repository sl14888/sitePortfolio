let tilt = document.querySelectorAll('.rounded');
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  'max-glare': 0.3,
});

var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

let filterBtn = document.querySelectorAll('.filters-button .filter-btn');
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].onclick = function (click) {
    click.preventDefault();
    hideTab();
    filterBtn[i].classList.add('active');

    let filterData = event.target.getAttribute('data-filter');
    iso.arrange({
      filter: filterData,
    });
  };
}

function hideTab() {
  filterBtn.forEach((item) => {
    item.classList.remove('active');
  });
}
