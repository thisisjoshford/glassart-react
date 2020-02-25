import request from 'superagent';
export function getGlassArt(){
    return request.get('https://cryptic-journey-67632.herokuapp.com/api/products')
}

export function getGlassItem(productId){
    const URL = `https://cryptic-journey-67632.herokuapp.com/api/product`
    return request.get(`${URL}/${productId}`)
}

export function getTypes(){
    return request.get('https://cryptic-journey-67632.herokuapp.com/api/types')
}

export function insertNewProduct(product){
    return request.post('https://cryptic-journey-67632.herokuapp.com/api/products', product)
}

export function deleteGlassItem(productId){
    const URL = `https://cryptic-journey-67632.herokuapp.com/api/product`
    return request.delete(`${URL}/${productId}`)
}

export function updateGlassItem(product){
    return request.put('https://cryptic-journey-67632.herokuapp.com/api/products', product)

}