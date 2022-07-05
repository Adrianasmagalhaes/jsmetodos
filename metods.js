function replace (){
    var nome ='Adriana de sousa magalhães  ';
//o trim() remove todos os espeços do final da frase
    console.log(`Nome original: ${nome.trim()}`)
//conta a quantidade de caracters
    console.log(`Nome original: ${nome.length}`)
    //Retira os espaços em branco e depois converte tudo para minusculo
    console.log(`Nome original: ${nome.trim().toLocaleLowerCase()}`)
   //Retira os espaços em branco e depois converte tudo para maiuscula
    console.log(`Nome original: ${nome.trim().toLocaleUpperCase()}`)
//Substitui a string a ser procurada por outra, apenas no primeiro caractere entrado
    console.log(nome.trim().replace('a', 'y'))
    //replaceAll: substitui a string em todas as ocorrências
    console.log(nome.trim().replaceAll('a', 'y'))
    //indexOf retorna a posição do elemento chamado, no meu exemplo usei 'dri'..Lembrando a contagem começa por 0,1,2...
    console.log(nome.indexOf('dri'))

    
}


replace()