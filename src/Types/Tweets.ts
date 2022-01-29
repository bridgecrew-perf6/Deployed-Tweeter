// type tweet = {
//     avatar: string,
//     firstName: string,
//     lastName: string,
//     username: string,
//     tweetContent: string
// }

type tweeter = {
    first: string,
    last: string,
    image_url: string,
    username: string
}

type tweet = {
    tweeter: tweeter,
    content: string,
    likes: number,
    posted_on: string
}

type tweetArray = Array<tweet>
export type {tweet, tweetArray}