export enum Rating {
    oneStar = "Bad",
    twoStar = "Under Average",
    threeStar = "Average",
    fourStar = "Above Average",
    fiveStar = "Excellent"
}

export interface Review {
    author: String,
    email: string,
    written: Date,
    rating: Rating,
    comment: Text,

}