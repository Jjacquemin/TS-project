// Déclaration et never
function infinitLoop(): never{
    while(true){

    }
}

function error(): never{
    throw new Error('blabla');
}
