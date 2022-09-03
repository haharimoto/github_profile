// fetch API
const countEl =
document.getElementById('count');

updateVisitCount();
// calling the function

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/haharimoto.github/github/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
