
function generateYearDates() {
    const months = [
        { name: "Jan", days: 31 },
        { name: "Feb", days: 28 }, // 29 for leap year, we'll assume a non-leap year for simplicity
        { name: "Mar", days: 31 },
        { name: "Apr", days: 30 },
        { name: "May", days: 31 },
        { name: "Jun", days: 30 },
        { name: "Jul", days: 31 },
        { name: "Aug", days: 31 },
        { name: "Sep", days: 30 },
        { name: "Oct", days: 31 },
        { name: "Nov", days: 30 },
        { name: "Dec", days: 31 }
    ];

    // Starting day for January 1st, 2025 (for example, it’s a Wednesday)
    let currentDay = new Date('2025-01-01').getDay();

    const dates = [];

    // Loop through each month
    months.forEach((month) => {
        for (let date = 1; date <= month.days; date++) {
            const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][currentDay];
            dates.push({ month: month.name, date, day: dayOfWeek });

            // Move to the next day (increment day of the week)
            currentDay = (currentDay + 1) % 7;
        }
    });

    return dates;
}

export const Data = {
    movies: [
        {id:1,
            name: "Mufasa the lion king",
           img: "/images/mufasa.jpg", 
           genre: "action, drama",
           
       },
        {id:2,
             name: "viduthalai 2",
            img: "/images/viduthalai 2.jpg", 
            genre: "action, drama"
        },
        {id:3,
            name: "pushpa 2", 
            img: "/images/pushpa 2.jpg",
            genre: "action, drama"
        },
        {id:4,
            name: "Amaran",
            img:  "/images/amaran.jpg", 
            genre: "action, drama"
        },
        {id:5,
            name: "Goat",
            img: "/images/goat.jpg", 
            genre: "action, drama"
        },
        {id:6,
            name: "comedy show",
            img: "/images/comedy show.jpg", 
            
        },
        {id:7,
            name: "Standup comedy",
            img: "/images/cs 2.jpg", 
            
        },
        {id:8,
            name: "Open Mic Night",
            img: "/images/cs3.jpg", 
            
        },
        {id:9,
            name: "Johny beard Show",
            img: "/images/cs 4.jpg", 
            
        },
        {id:10,
            name: "Once Upon A Time ",
            img: "/images/music.jpg", 
            
        },
        {id:11,
            name: "Yuvan Rock",
            img: "/images/music2.jpg", 
            
        },
        {id:12,
            name: "A.R.Rahman Concert",
             img: "/images/music 3.jpg", 
            
        },
        {id:13,
            name: "Karoke",
            img: "/images/music4.jpg", 
            
        },
        {id:14,
            name: "Quinta Ninja",
            img: "/images/music5.jpg", 
            
        },
        {id:15,
            name: "Friday Frave",
            img: "/images/event.jpg", 
            
        },
        {id:16,
            name: "TalentShow",
            img: "/images/event2.jpg", 
            
        },
        {id:17,
            name: "Moulin Rougie",
            img: "/images/ks3.jpg", 
            
        },
        {id:18,
            name: "Ideas for Kids",
            img: "/images/ks4.jpg", 
            
        },
        {id:19,
            name: "Philip Magic Show",
            img: "/images/ks.jpg", 
            
        },
        {id:20,
            name: "circus",
            img: "/images/ks2.jpg", 
            
        },
        {id:21,
            name: "Indian Idol",
            img: "/images/event3.jpg", 
            
        },
        {id:22,
            name: "Talentina",
            img: "/images/event4.jpg", 
            
        },
    ],
    theaters: [
        {id:11,
            name: "Ambika Cinemas ",
            location: "anna nagar",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        },
        {id:12,
            name: "Vetri Cineams",
            location: "Mattuthavani",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        },
        {id:13,
            name: "Gopuram Cinemas",
            location: "Sellur",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        },
        {id:14,
            name: "Guru Cinemas",
            location: "Arapalayam",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        }, 
        {id:15,
            name: "MuneesWarar Cineams",
            location: "Alanganallur",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        }, 
        {id:14,
            name: "Tamil Jaya Cinemas",
            location: "Madurai ",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        }, 
        {id:14,
            name: "Vetri Cinemas",
            location: "Villapuram ",
            times:["10:30am","2:30pm","6:30pm","10:30pm"]
        }, 

    ],
    dates: generateYearDates() 
};
