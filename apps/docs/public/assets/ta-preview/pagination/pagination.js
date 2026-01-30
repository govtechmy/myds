const totalPages = 10;
const pageSize = 10;
let currentPage = 1;

const paginationList = document.getElementById("pagination-list");
const pageInfo = document.getElementById("page-info");

const prevDefault = document.getElementById("prevDefaultBtn");
const nextDefault = document.getElementById("nextDefaultBtn");

const prevSimple = document.getElementById("prevSimpleBtn");
const nextSimple = document.getElementById("nextSimpleBtn");

const prevFull = document.getElementById("prevFullBtn");
const nextFull = document.getElementById("nextFullBtn");

function createPageButton(page) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.className = "button-myds button-myds-secondary number";
  btn.dataset.page = page;
  btn.textContent = page;

  if (page === currentPage) {
    btn.classList.add("selected");
  }

  btn.addEventListener("click", () => {
    currentPage = page;
    renderPagination();
  });

  li.appendChild(btn);
  return li;
}

function createEllipsis() {
  const li = document.createElement("li");
  li.classList.add("ellipsis");
  li.innerHTML = `<svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/options">
        <g id="Vector">
          <path
            d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z"
            fill="currentColor"
          ></path>
          <path
            d="M17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10Z"
            fill="currentColor"
          ></path>
          <path
            d="M5 10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9C4.55228 9 5 9.44772 5 10Z"
            fill="currentColor"
          ></path>
          <path
            d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M5 10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9C4.55228 9 5 9.44772 5 10Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </g>
      </g>
    </svg>`;

  return li;
}

function renderPagination() {
  const nextLi = paginationList.lastElementChild;

  paginationList
    .querySelectorAll(".number, .ellipsis")
    .forEach((el) => el.closest("li").remove());

  const EDGE_COUNT = 4;
  const MID_COUNT = 3;
  const HALF = Math.floor(MID_COUNT / 2);

  // Always show the first page
  paginationList.insertBefore(createPageButton(1), nextLi);

  if (totalPages <= EDGE_COUNT) {
    for (let i = 2; i <= totalPages; i++) {
      paginationList.insertBefore(createPageButton(i), nextLi);
    }
  } else {
    // START RANGE
    if (currentPage <= EDGE_COUNT) {
      for (let i = 2; i <= EDGE_COUNT; i++) {
        paginationList.insertBefore(createPageButton(i), nextLi);
      }

      if (totalPages > EDGE_COUNT + 1) {
        paginationList.insertBefore(createEllipsis(), nextLi);
        paginationList.insertBefore(createPageButton(totalPages), nextLi);
      }
    }

    // END RANGE
    else if (currentPage > totalPages - EDGE_COUNT) {
      paginationList.insertBefore(createEllipsis(), nextLi);

      for (let i = totalPages - EDGE_COUNT + 1; i <= totalPages; i++) {
        paginationList.insertBefore(createPageButton(i), nextLi);
      }
    }

    // MIDDLE RANGE
    else {
      paginationList.insertBefore(createEllipsis(), nextLi);

      let start = currentPage - HALF;
      let end = currentPage + HALF + 1;

      for (let i = start; i < end; i++) {
        paginationList.insertBefore(createPageButton(i), nextLi);
      }

      paginationList.insertBefore(createEllipsis(), nextLi);
      paginationList.insertBefore(createPageButton(totalPages), nextLi);
    }
  }

  prevDefault.disabled =
    prevSimple.disabled =
    prevFull.disabled =
      currentPage === 1;
  nextDefault.disabled =
    nextSimple.disabled =
    nextFull.disabled =
      currentPage === totalPages;
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  console.log(`Fetching data: page=${currentPage}, size=${pageSize}`);
}

function goPrev() {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
  }
}

function goNext() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
  }
}

prevDefault.addEventListener("click", goPrev);
nextDefault.addEventListener("click", goNext);
prevSimple.addEventListener("click", goPrev);
nextSimple.addEventListener("click", goNext);
prevFull.addEventListener("click", goPrev);
nextFull.addEventListener("click", goNext);

renderPagination(); //Initial render
