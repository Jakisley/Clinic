interface Question {
    title: string,
    questions: Array<string>
}

interface OftenAskedI {
    sectionTitle: string,
    elements: Array<Question>,
}

export interface OftenAskedDataProps{
    oftenAskedData:OftenAskedI,
}
