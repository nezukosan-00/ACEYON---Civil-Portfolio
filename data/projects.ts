export type Project = {
    id: string;
    title: string;
    location: string;
    year: number;
    type: string;
    image: string;
};

export const projects: Project[] = [
    {
        id: "1",
        title: "Apex Tower",
        location: "New York, USA",
        year: 2024,
        type: "Commercial Skyscraper",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "2",
        title: "Eco-Habitats Pavilion",
        location: "Oslo, Norway",
        year: 2023,
        type: "Sustainable Residential",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "3",
        title: "Nexus Cultural Center",
        location: "Tokyo, Japan",
        year: 2025,
        type: "Public Cultural",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "4",
        title: "Meridian Bridge",
        location: "London, UK",
        year: 2022,
        type: "Infrastructure",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1974&auto=format&fit=crop",
    }
];
