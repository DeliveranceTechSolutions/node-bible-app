interface Language {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: string;
}

interface Country {
    id: string;
    name: string;
    nameLocal: string;
}

interface AudioBibleSummary {
    id: string;
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
}

interface Bible {
    id: string;
    dblId: string;
    abbreviation: string;
    abbreviationLocal: string;
    copyright: string;
    language: Language;
    countries: Country[];
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
    info: string;
    type: string;
    updatedAt: string; // Assuming string format for date-time
    relatedDbl: string;
    audioBibles: AudioBibleSummary[];
}

