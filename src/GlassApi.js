import request from 'superagent';
export function getGlassArt(){
    return request.get('https://cryptic-journey-67632.herokuapp.com/api/products')
}