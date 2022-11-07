"use strict";

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profile: '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        profile: '../img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profile: '../img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profile: '../img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        profile: '../img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profile: '../img/barbara-ramos-graphic-designer.jpg'
    }
];

for(let i = 0; i < team.length; i++) {
    const currentWorker = team[i];

    // stampo in console log

    console.log(currentWorker); 
    // Quale dei due metodi?
    // console.log(currentWorker.name); 
    // console.log(currentWorker.role);
    // console.log(currentWorker.profile);

    // stampo su html

    const listprofile =`
        <div class="card">
            <h3>Nome e Cognome: ${currentWorker.name}</h3>
            <p>Ruolo nel team: ${currentWorker.role}</p>
            <img src=${currentWorker.profile} />
        </div>    
    `;
    document.getElementById('team-list').innerHTML += listprofile;
}