export const Label = ["Travel",
   "Food Theory",
   "Recipes",
   "Restaurants"]

export interface Article {
    id: number;
    imageUrl: string;
    label: string;
    title: string;
    author: string;
    authorInitials: string;
    date: string;
    read_time: number;
    excerpt: string;
    tags: string[];
}

export const articles: Article[] =[
    {
        id: 1,
        imageUrl: "/src/components/img/greece-travel.png",
        label: Label[0],
        title: "What Traveling Greece For 2 Weeks Taught Me About Life",
        author: "James Doe",
        authorInitials: "JD",
        date: "Jun 21, 2021",
        read_time: 11,
        excerpt: "Hidden coves, ancient ruins, and meals that redefine what food means",
        tags: ["Travel", "Greece", "Food culture", "Islands"],
    },
    {
        id: 2,
        imageUrl: "/src/components/img/chicken-nuggets-fries.png",
        label: Label[1],
        title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
        author: "Sarah Kim",
        authorInitials: "SK",
        date: "Aug 1, 2021",
        read_time: 7,
        excerpt: "The math, the science, and the dark truth behind combo meal pricing.",
        tags: ["Food Theory", "Fast food", "Pricing"],
    },
    {
        id: 3,
        imageUrl: "/src/components/img/ramen-broth.png",
        label: Label[2],
        title: "The Perfect Homemade Ramen Broth Recipe",
        author: "Yuki Tanaka",
        authorInitials: "YT",
        date: "Sep 14, 2021",
        read_time: 9,
        excerpt: "Twelve hours of simmering and a tare that will ruin all other broths for you.",
        tags: ["Recipes", "Ramen", "Japanese"],
    },
    {
        id: 4,
        imageUrl: "/src/components/img/tokyo-restaurants.png",
        label: Label[3],
        title: "The Best Hidden Restaurants in Tokyo You Need to Visit",
        author: "Marco Rossi",
        authorInitials: "MR",
        date: "Oct 3, 2021",
        read_time: 6,
        excerpt: "Down unmarked alleys — the izakayas that locals keep to themselves.",
        tags: ["Restaurants", "Tokyo", "Japan"],
    },
    {
        id: 5,
        imageUrl: "/src/components/img/vietnam-food-diary.png",
        label: Label[0],
        title: "Eating My Way Through Vietnam: A 10-Day Food Diary",
        author: "Linh Nguyen",
        authorInitials: "LN",
        date: "Nov 18, 2021",
        read_time: 14,
        excerpt: "From banh mi carts at 6am to midnight pho in Hanoi.",
        tags: ["Travel", "Vietnam", "Street food"],
    },
    {
        id: 6,
        imageUrl: "/src/components/img/olive-oil.png",
        label: Label[1],
        title: "Why Expensive Olive Oil Is Almost Never Worth It",
        author: "Elena Papadopoulos",
        authorInitials: "EP",
        date: "Dec 5, 2021",
        read_time: 5,
        excerpt: "Blind taste tests, industry fraud, and what the label is actually telling you.",
        tags: ["Food Theory", "Olive oil", "Ingredients"],
    }
];
