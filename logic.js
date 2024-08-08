document.getElementById("closei").addEventListener("click",function (){
    document.getElementById("hidenmenu").style.display="none";
});
document.getElementById("menui").addEventListener("click",function (){
    document.getElementById("hidenmenu").style.display="block";
});

const data=[
    {
        img: 'imgs/vivah.png',
        title: 'Vivah',
        description: 'Vivah is a traditional Hindu wedding ceremony. wedding is contains different kind of celebretions.'
    },
    {
        img: 'imgs/ganesha.png',
        title: 'Ganesh Puja',
        description: 'Ganpati Puja is a Hindu festival celebrating the god Ganesha, the son of Shiva and Parvati.'
    },
    {
        img: 'imgs/saraswati_maa.png',
        title: 'Saraswati puja',
        description: 'Saraswati Puja is a Hindu festival that is dedicated to the goddess of knowledge and wisdom, Saraswati'
    },
    {
        img: 'imgs/Vishwakarma Puja.png',
        title: 'Vishwakarma Puja',
        description: 'Vishwakarma Puja is celebrated to mark the birth of Lord Vishwakarma, the architect.'
    },
    {
        img: 'imgs/janew.png',
        title: 'Brata Upanayana',
        description: 'The Janeu ceremony is a Hindu ritual of initiation into the sacred thread, also known as the "yajñopavītam". '
    },
    {
        img: 'imgs/GreihPravesh.png',
        title: 'Griha Pravesh',
        description: 'Griha Pravesh, also known as "Housewarming," is a Hindu ritual performed when a person moves into a new home. '
    },
    {
        img: 'imgs/satyanarayan.png',
        title: 'Satyanarayan Katha',
        description: 'Satyanarayan Katha is a Hindu religious ritual performed to worship Lord Vishnu, who is also known as Satyanarayan. '
    },
    {
        img: 'imgs/saradham.png',
        title: 'Sradham',
        description: 'Shraddham Puja is a Hindu ritual performed to pay homage to one ancestors or departed loved ones. '
    },
];
const section=document.getElementById('section3');
// const divs=section.querySelectorAll('div');
// console.log(divs.length);

data.forEach(element => {
    const card= document.createElement('div');
    card.innerHTML = `
            <div id="poojaimg">
                <img src="${element.img}" alt="puja image">
            </div>
            <div>
                <span id="poojatitle">${element.title}</span>
                <p id="aboutpooja">${element.description}</p>
            </div>`;
    section.appendChild(card);
});

function scrollCard(){
    section.scrollLeft += 1;
    if(section.scrollLeft >= section.scrollWidthn-section.clientWidth){
        section.clientLeft = 0;
    }
}

setInterval(scrollCard, 20)