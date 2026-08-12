export const Label = ["Travel", 
   "Food Theory", 
   "Recipes", 
   "Restaurants"]

export interface Article {
    id: number;
    imageUrl: string;
    label: string;
    title: string;
    date: string;
    read_time: number;
    excerpt: string;
}

export const articles: Article[] =[
    {
        id: 1,
        imageUrl: "/img/greece-travel.png",
        label: Label[0],
        title: "What Traveling Greece For 2 Weeks Taught Me About Life",
        date: "Jun 21, 2021",
        read_time: 11,
        excerpt: "Hidden coves, ancient ruins, and meals that redefine what food means"
    },
    {
        id: 2,
        imageUrl: "/img/chicken-nuggets.png",
        label: Label[1],
        title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
        date: "Aug 1, 2021",
        read_time: 7,
        excerpt: "The math, the science, and the dark truth behind combo meal pricing.",
    },
    {
        id: 3,
        imageUrl: "/img/ramen-broth.png",
        label: Label[2],
        title: "The Perfect Homemade Ramen Broth Recipe",
        date: "Sep 14, 2021",
        read_time: 9,
        excerpt: "Twelve hours of simmering and a tare that will ruin all other broths for you.",
    },
     {
        id: 4,
        imageUrl: "/img/tokyo-restaurants.png",
        label: Label[3],
        title: "The Best Hidden Restaurants in Tokyo You Need to Visit",
        date: "Oct 3, 2021",
        read_time: 6,
        excerpt: "Down unmarked alleys — the izakayas that locals keep to themselves.",
    },
    {
        id: 5,
        imageUrl: "/img/vietnam-food-diary.png",
        label: Label[0],
        title: "Eating My Way Through Vietnam: A 10-Day Food Diary",
        date: "Nov 18, 2021",
        read_time: 14,
        excerpt: "From banh mi carts at 6am to midnight pho in Hanoi.",
    },
    {
        id: 6,
        imageUrl: "/img/olive-oil.png",
        label: Label[1],
        title: "Why Expensive Olive Oil Is Almost Never Worth It",
        date: "Dec 5, 2021",
        read_time: 5,
        excerpt: "Blind taste tests, industry fraud, and what the label is actually telling you.",
    }
];
