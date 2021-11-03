IniciarBatatas = () => {
    var containerBatatas = document.getElementById('produtos');
    var menu = 'https://teams.microsoft.com/_#/school/conversations/Not%C3%ADcias%20de%20Tecnologia?threadId=19:8871dea9c31c475c97a95a01fcfcdee9@thread.tacv2&ctx=channel';
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
