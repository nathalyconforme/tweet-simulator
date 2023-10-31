import {v4 as uuidv4} from 'uuid';
/** PARA TRABAJAR CON LODASH HAY QUE HACER UN YARN ADD LODASH
 * UNA VEZ HECHO ESTO SE HACE UN IMPORT:
*/
import { size,remove } from "lodash";

import { TWEETS } from '../utils/constants';

//PARA USAR LA FUNCIÓN HAY QUE PONERLE EXPORT PARA PODER EXPORTARLA
export function saveTweetApi (tweet, username) {
    const tweets = getTweetsApi();

    if(size(tweets) === 0){
        const tweetTemp = [{
            id: uuidv4(),
            tweet,
            username,
            createdAt : new Date()
        },
        ]
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
        console.log(tweetTemp);
    }else{
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            createdAt : new Date(),
        });
        localStorage.setItem(TWEETS, JSON.stringify(tweets));
    }



}
export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEETS);
    if(tweets){
        return JSON.parse(tweets);
    }
    return [];
}

export function deleteTweetApi(idTweet){
    const tweets = getTweetsApi();

    remove(tweets,function(tweet){
        return tweet.id === idTweet;
    });

    localStorage.setItem(TWEETS, JSON.stringify(tweets));

}
