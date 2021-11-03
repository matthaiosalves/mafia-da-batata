IniciarBatatas = () => {
    var containerBatatas = document.getElementById('produtos');
    var menu = 'https://mafia-da-batata.netlify.app/menu/';
    batataJson.map((val) => {
        containerBatatas.innerHTML += `
     <div class="col-lg-6 menu-item ${val.tipo}">
        <div class="menu-content">
           <a class="batatas" key="${val.id}" href="${menu}">${val.nome}</a>
           <span>R$${val.preco}</span>
        </div>
        <div class="menu-ingredients">
            ${val.ingrediente}
        </div>
     </div>
        `;
    })
}

IniciarBatatas();
