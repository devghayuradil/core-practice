const search = document.getElementById("search");
const normal = document.getElementById("normal");
const debounceTxt = document.getElementById("debounce");
const throttleTxt = document.getElementById("throttle");

const normalSearch = (e) => {
  normal.textContent = `Normal: ${e.target.value}`;
};

const debounce = (func, delay) => {
  let timeoutId;
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
};

const throttle = (func, delay) => {
  let last = 0;
  return () => {
    if (Date.now() - last < delay) {
      return;
    }
    last = Date.now();
    setTimeout(() => {
      func();
    }, delay);
  };
};

const debounceSearch = debounce(() => {
  debounceTxt.textContent = `Debounce: ${search.value}`;
}, 1000);

const throttleSearch = throttle(() => {
  throttleTxt.textContent = `Throttle: ${search.value}`;
}, 1000);

search.addEventListener("keydown", (e) => {
  normalSearch(e);
  debounceSearch();
  throttleSearch();
});
