export class Quote {
    upvotes;
    downvotes;
    constructor(public body:string, public author: string, public publisher: string){
        this.upvotes = 0;
        this.downvotes = 0;
    }
}
