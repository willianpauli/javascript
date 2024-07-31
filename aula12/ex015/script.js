function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulario_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto_bebe_m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto_adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto_idoso_m.png')
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
     
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto_bebe_f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto_jovem_f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto_adulto_f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto_idoso_f.png')
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
     
        } else {
            window.alert('Verifique os dados e tente novamente') 
        } 
    }
}
