function toggleMode() {
    /*     
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.removeAttribute('class')
    } else {
        document.documentElement.setAttribute('class', 'light')
    } 
    */

    // O método toggle já faz isso altomaticamente
    // note: o toggle trabalha com a existência ou não
    // de determinada CLASSE
    document.documentElement.classList.toggle('light')

    // mudando imagem
    const img = document.querySelector('#profile img')

    if (document.documentElement.classList.contains('light')) {
        img.setAttribute('src', './src/assets/avatar-light.png')
    } else {
        img.setAttribute('src', './src/assets/avatar.png')
    }
}