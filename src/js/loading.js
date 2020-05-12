const loading = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    `;
};

export default loading;
