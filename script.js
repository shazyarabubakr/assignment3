async function fetchPromise() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    //agar link aka eshy nakrd error aka blet
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    //file aka xoy string a abe bikainawa ba json bo away eshy lasar bkain
    const data = await response.json();

    //marj da anein bas awana bgarenetawa ka azhin
    // const filter = data.results.filter((stat) => {
    //   return stat.status == "Alive";
    // });
    // console.log(filter);

    //datakan ba javascript pshan bainawa
    let data1 = ``;

    data.results
      .filter((filter) => {
        if (filter.status === "Alive") return filter;
      })
      .map((datas) => {
        if (datas.episode.length > 25) {
          datas.property = "main";
        } else {
          datas.property = "side";
        }

        data1 =
          data1 +
          `
        <div class="card">
        <h1>${datas.name}</h1>
        <img src=${datas.image} />
        <h3>${datas.status}</h3>
        <h3>${datas.gender}</h3>
        <h3>${datas.species}</h3>
         <h3>${datas.property}</h3>

      </div>
       `;
      });

    //console.log(data1);
    const sections = document.querySelector(".cards");
    sections.innerHTML = data1;
  } catch (error) {
    console.error(`could not get datas ${error}`);
  }
}
//call y function bkainawa
fetchPromise();
