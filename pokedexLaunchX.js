$(function() {
    $("body").hide().fadeIn(2500
        );
});

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imagenes/pikachu-sad.gif")
        }
        else {
            return res.json();
        }
    })
        .then((data) => {
            if (data) {
            const pokeImage = document.getElementById("pokeImg");
            pokeImage.src = data.sprites.front_default;

            let pId = document.getElementById("pokeId");
            pId.innerHTML = 'Id: ' + data.id;

            const pNombre = document.getElementById("pokeNombre");
            pNombre.innerHTML = 'Name: ' + data.name;

            const pAltura= document.getElementById("pokeAltura");
            pAltura.innerHTML = 'Height: ' + (data.height * 0.10)  + ' mts.';

            const pPeso= document.getElementById("pokePeso");
            pPeso.innerHTML = 'Weight: ' + (data.weight * .1) + ' kg.';

            const pHP = document.getElementById("pokeHP");
            pHP.innerHTML = 'HP: ' + data.stats[0].base_stat;

            const pAttack = document.getElementById("pokeAttack");
            pAttack.innerHTML = 'Attack: ' + data.stats[1].base_stat;

            const pDefense = document.getElementById("pokeDefense");
            pDefense.innerHTML = 'Defense: ' + data.stats[2].base_stat;

            const pSpecialAttack = document.getElementById("pokeSpecialAttack");
            pSpecialAttack.innerHTML = 'Special Attack: ' + data.stats[3].base_stat;

            const pSpecialDefense = document.getElementById("pokeSpecialDefense");
            pSpecialDefense.innerHTML = 'Special Defense: ' + data.stats[4].base_stat;

            const pSpeed= document.getElementById("pokeSpeed");
            pSpeed.innerHTML = 'Speed: ' + data.stats[5].base_stat;

            const pType1 = document.getElementById("pokeTipo1");               
            pType1.innerHTML= types[0].type.name;
            }


        })
}

const buttonSearch = document.getElementById("searchPokemon")
buttonSearch.addEventListener('click', fetchPokemon)


