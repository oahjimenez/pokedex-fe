
export const getPokedex = async( pokedex ) => {

    const url = `http://mspokedex-env.eba-wvycymcp.us-east-1.elasticbeanstalk.com/pokedex`;
    const response = await fetch( url );
    const { data } = await response.json();
    console.log(data)

    const gifs = {}
    /*data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })*/

    return gifs;


}