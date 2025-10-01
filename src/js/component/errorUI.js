function getError(error){
    if(error >= 400 && error <= 500){
        return 'Country or City not found!'
    } else if(error >= 500 && error <= 600){
        return 'Server Error! Come again later...'
    }
    return 'Kesalahan jaringan, Coba lagi.'
}

function displayErrorUI(error) {

    const errorMessage = getError(error);

    document.getElementById("mainDisplay").innerHTML = `
            <div class="text-center">
                <h1 class="font-instrument text-4xl font-semibold max-md:text-3xl">${errorMessage}</h1>
            </div>  
    `
}

export { displayErrorUI };