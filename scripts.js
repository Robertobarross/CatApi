const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // Url da Api
const catBtn = document.getElementById('change-cat'); // Elemento change-cat da pasta html
const catImg = document.getElementById('cat'); // Elemento cat da pasta html

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL); // Chamada da Api em json
        const json = await data.json(); 

        return json.webpurl; // Retorn da Api
    }   catch (e) {
        console.log(e.message);
    }
};

const loadIMG = async () => { // Chamada da imagem
    catImg.src = await getCats(); 
}

catBtn.addEventListener('click', loadIMG); // Comando para o botão
 
loadIMG(); // Pra página entrar com uma imagem quando for acessada