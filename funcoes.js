// 1 - Crie uma função chamada sort que ordene o array abaixo do menor para o maior e retorne um novo
//array ordenado. var array_to_sort = [9,3,2,19,3,4,10,34,-99,99] Não utilize a função sort
//nativa do ordenamento de arrays

const array_to_sort = [9, 3, 2, 19, 3, 4, 10, 34, -99, 99];

function short(array) {

    for (var i = 1; i < array.length - 1; i++) {  //tamanho real das posições, numero de ciclos que executarei o for interno

        for (var j = 0; j < array.length - 1; j++) {  //percorro ate a pnultima posição pois, aultima sera comparada no pnultimo ciclo

            if (array[j] > array[j + 1]) {              //se a posição do cliclo for menor que o valor a frente troco os valores de posição

                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;

            }
        }
    }

}
short(array_to_sort);
console.log('array ordenado usando bobbleShort');
console.log(array_to_sort);



//2) Crie uma função que calcule qualquer o fatorial de um número natural e retorne o resultado
function calculaFatorial(n) {

    var aux = 1;
    for (var i = n; i > 1; i--) {     // percorro todos os algorismos ate o o numero chagar a 1, ex para 5: 5, 4.... 1
        aux = aux * i
    }
    console.log('o fatorial de ' + n + ' eh ' + aux);

}
calculaFatorial(4);





//4) Crie uma função chamada estatistica que retorne a média aritmética de um array, a moda e a mediana.
// Deve ser retornado como um objeto. var dataset = [193,123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780]
dataset = [193, 123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780];

function estatistica(arr) {
    var media = 0;
    var moda = 0;
    var mediana = 0;

    //media
    for (var i = 0; i < arr.length; i++) {
        media += arr[i];
    }
    media /= arr.length;

    //moda
    var vezes = 0;
    var aux1 = 0;

    for(var i = 0; i < arr.length; i++){           //percorro o vetor inteiro

        vezes = 0;                              

        for(var j = i; j < arr.length; j++){    //percorro todos os indices cada vez que percorro o indice "i"
            if(arr[i] == arr[j + 1]){          //se o valor do indice "i" for igual valor do indice "j + 1", adiciono ao contador
                vezes++;
            }                               
        }

        if(vezes > aux1){                     // se o contador for maior que aux, (o que vai acontecer no primeiro laço de "j")                                   
            moda = arr[i];                    //moda recebe o valor do primeiro indice de "i"          
            aux1 = vezes                      //agora aux recebe o valor do contador para comparar com a proxima interação de "i"
        }

    }

    //mediana
    short(dataset);  //função do primeiro exercicio
    if(arr.length % 2 == 0){               
        let aux2 = arr.length / 2;         
        mediana = arr[aux2 -1] + arr[aux2];
        mediana /= 2;
    }else{
        let aux2 = (arr.length + 1) / 2;
        mediana = arr[aux2 - 1];
    }

    var obj = {
        media: media,
        moda: moda,
        mediana: mediana
    }

    return obj;


}

const resultado = estatistica(dataset);
console.log(resultado);

//var ok = estatistica(dataset);
