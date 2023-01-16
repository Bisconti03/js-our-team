const domPrint = document.getElementById('grid');

const ourTeam = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }
];







for (let i = 0; i < ourTeam.length; i++) {


    console.log(ourTeam[i].name, ourTeam[i].role, ourTeam[i].image);

    generateProfile(ourTeam[i].name, ourTeam[i].role, ourTeam[i].image);

}





function generateProfile(name, role, image) {
    let profile = 
    `<div>
        
       
        <h3>${name}</h3>
        <p>${role}</p>
        <p>${image}</p>

        
    </div>`;

    domPrint.innerHTML += profile;
};

