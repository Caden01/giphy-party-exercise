let input = $("#search");
let gifs = $("#gifs");

$("form").on("submit", async function (e) {
  e.preventDefault();

  let search = input.val();
  input.val("");
  console.log(search);

  let res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  createGif(res.data);
});

function createGif(res) {
  console.log(res);
  let results = res.data.length;
  let index = Math.floor(Math.random() * results);
  let col = $("<div>", { class: " col-md-4 col-12 mb-4" });
  let newGif = $("<img>", {
    src: res.data[index].images.original.url,
    class: "w-100",
  });
  col.append(newGif);
  gifs.append(col);
}

$("#remove-btn").on("click", function () {
  gifs.empty();
});
