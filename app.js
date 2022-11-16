/** Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene
 una propiedad llamada id (debe devolver booleano true / false ). */

/* Se comenta la propiedad id para comprobar el funcionamiento */

const customer = {
    //id: 1546,
    name: 'Jorge',
    lastname: 'Vioque',
    age: 47
}

const hasId = object => object.hasOwnProperty('id')

console.log(hasId(customer))

/** Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento. */

const myArray = ['uno', 'dos', 'tres']

const head = ([firstElement]) => firstElement

console.log(head(myArray))

/** Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
 elementos menos el primero. */

const tail = ([, ...newArray]) => newArray

console.log('Nuevo array', tail(myArray))
console.log('Array original', myArray)

/** Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array
 donde el primer elemento ha sido colocado en la última posición. */

const swapFirstToLast = ([firstElement, ...newArray]) => {
    newArray.push(firstElement)
    return newArray
}

console.log(swapFirstToLast(myArray))

/** Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado
 excepto la propiedad id si la hubiera. */

const withId = [{
    id: 2568,
    deporte: 'trail',
    genero: 'hombre',
    talla: 44
},
    {
        // id: 5478,
        deporte: 'trekking',
        genero: 'mujer',
        talla: 38
    },
]

const excludeId = objects => objects.map(({ id, ...withoutId }) => (withoutId))

console.log(excludeId(withId))

/** Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro
 array filtrado con aquellas palabras que empiecen por a. */

const wordsArray = ['Hola', 'Adios', 'anterior', 'posterior']

const wordsStartingWithA = letters => letters.filter(words => words[0] === 'a' | words[0] === 'A')

console.log(wordsStartingWithA(wordsArray))

/** Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string
 con la concatenación de todos, separados por | . */

const concat = (...strings) => strings.join('|')

console.log(concat('Esto', 'es', 'una', 'prueba'))

/** Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un
 número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x. */

const multArray = (numbers, mult) => numbers.map(number => (number * mult))

console.log(multArray([1, 3, 4, 6], 5))

/** Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como
 resultado el producto de todos ellos. */

const calcMult = (...numbers) => numbers.reduce(((result, number) => result * number), 1)

console.log(calcMult(1, 3, 6, 2, 2))

/*** Ejercicios Extra ***/

/** Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento
 ha sido intercambiado por el segundo. */

const newArray = ['tal', '¿Qué', 'estás', 'hoy?']

const swapFirstSecond = ([firstElement, secondElement, ...restElements]) => {
    // const swapArray = restElements.reverse()
    // swapArray.push(firstElement)
    // swapArray.push(secondElement)
    // swapArray.reverse()
    // return swapArray

    restElements.unshift(firstElement)
    restElements.unshift(secondElement)
    return restElements
}

console.log('Array de entrada', newArray)
console.log('Array intercambiado', swapFirstSecond(newArray))

/** Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un
 carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no. */

const firstEqual = (character, ...strings) => {
    const letters = strings.map(string => string.split('')).map(letter => head(letter))
    // Uso la función head creada en otro ejercicio para quedarme sólo con el primer elemento
    return letters.every(letter => letter === character)
}

console.log(firstEqual('L', 'Laura', 'María', 'Jorge', 'Javier', 'Dani'))
console.log(firstEqual('J', 'Jaura', 'Jaría', 'Jorge', 'Javier', 'Jani'))

/** Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo. */

const longest = (...inputArrays) => {
    const mayor = inputArrays.sort((a, b) => a.length > b.length ? -1 : 1)
    return mayor[0]
}

console.log(longest(['a', 'b', 'c', 'd', 'f'], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5, 6]))

/** Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
 devuelva cuantas veces aparece dicho carácter en el string. */

const searchInStringV1 = (character, string) => Array.from(string).reduce((acc, element) => {
    if (element === character) acc++
    return acc
}, 0)

console.log(searchInStringV1('s', 'Este es el string a comprobar cuantas eses hay'))

/** Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin
 usar reduce . */

const searchInStringV2 = (character, string) => {
    let count = Array.from(string)
    let result = 0
    count.forEach((element, i) => {
        if (element === character) {
            result += 1
        }
    })
    return result
}

console.log(searchInStringV2('s', 'Este es el string a comprobar cuantas eses hay'))

/** Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
 alfabéticamente */

const sortCharacters = string => Array.from(string).sort((a, b) => a > b ? 1 : -1)

console.log(sortCharacters('fenDio'))

/** Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
 concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones. */

const shout = (...strings) => {
    let concatened = strings.map(word => word.toUpperCase())
    concatened.unshift('¡')
    concatened.push('!')
    return concatened.join(' ')
}

console.log(shout('Qué', 'bien', 'ha', 'quedado'))

/** Dada la siguiente lista de la compra:

 A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
 B. Ordena la lista de más a menos unidades.
 C. Obtén el subtotal gastado en droguería.
 D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría. */

const shoppingCart = [
    { category: 'Frutas y Verduras', product: 'Lechuga', price: 0.8, units: 1 },
    { category: 'Carne y Pescado', product: 'Pechuga pollo', price: 3.75, units: 2 },
    { category: 'Droguería', product: 'Gel ducha', price: 1.15, units: 1 },
    { category: 'Droguería', product: 'Papel cocina', price: 0.9, units: 3 },
    { category: 'Frutas y Verduras', product: 'Sandía', price: 4.65, units: 1 },
    { category: 'Frutas y Verduras', product: 'Puerro', price: 4.65, units: 2 },
    { category: 'Carne y Pescado', product: 'Secreto ibérico', price: 5.75, units: 2 },
]

const A = products => products.map(product => ({ ...product, iva: (product.price * 0.21).toFixed(2) }))
console.log(A(shoppingCart))

const B = products => products.sort((a, b) => a.units > b.units ? 1 : -1)
console.log(B(shoppingCart))

const C = products => products.reduce((subtotal, product) => product.category === 'Droguería' ? subtotal + product.price : subtotal, 0)
console.log(C(shoppingCart))

const D = products => products.sort((a, b) => a.category > b.category ? 1 : -1).map(product => 'Producto -> ' + product.product + ' ' + (product.price * product.units) + ' €')
console.log(D(shoppingCart))