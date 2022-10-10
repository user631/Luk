const bolygok=[
    {   id:1,
        name:'Merkúr',
        img:'merkur.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010301Merkur/merkur.html' },
    {   id:2,
        name:'Vénusz',
        img:'venusz.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010302Venusz/venusz.html' },
    {   id:3,
        name:'Föld',
        img:'fold.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/01030301Fold/fold.html' },
    {   id:4,
        name:'Mars',
        img:'mars.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010304Mars/Mars.html' },
    {   id:5,
        name:'Jupiter',
        img:'jupiter.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010305Jupiter/Jupiter.html' },
    {   id:6,
        name:'Szaturnusz',
        img:'saturn.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010306Szaturnusz/Szaturnusz.html' },
    {   id:7,
        name:'Uránusz',
        img:'uranus.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010308Neptunusz/Neptunusz.html' },
    {   id:8,
        name:'Neptunusz',
        img:'neptun.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010308Neptunusz/Neptunusz.html' },
]
const modal = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".close");

function imageClick(e) {
    modal.style.display = "block";
    document.querySelector("#modal-img").src = e.target.src;
    document.querySelector("#link-btn").href = bolygok[e.target.id].descr;
}

function loadImages() {
    const main = document.querySelector(".imagetiles");

    bolygok.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("col-lg-3");
        div.classList.add("col-md-4");
        div.classList.add("col-sm-6");
        div.classList.add("col-xs-12");
        div.classList.add("img-container");

        const img = document.createElement("img");
        img.classList.add("img-responsive");
        img.src = item.img;
        img.id = item.id;
        img.title = item.name;
        img.alt = item.name;
        img.onclick = imageClick;

        const hr = document.createElement("hr");

        const p = document.createElement("p");
        p.textContent = item.name;

        div.appendChild(img);
        div.appendChild(hr);
        div.appendChild(p);
        main.appendChild(div);
    });
}

loadImages();

closeBtn.onclick = () => {
    modal.style.display = "none";
};