// Educational content for each day
const calendarContent = {
    1: {
        title: "🎅 The History of Christmas",
        content: `
            <h3>Origins of Christmas</h3>
            <p>Christmas is celebrated on December 25th to commemorate the birth of Jesus Christ. However, the exact date of Jesus's birth is not known from the Bible.</p>
            
            <h3>Interesting Facts:</h3>
            <ul>
                <li>The word "Christmas" comes from "Christ's Mass"</li>
                <li>Many Christmas traditions have roots in ancient pagan celebrations</li>
                <li>The modern celebration of Christmas emerged in the 19th century</li>
                <li>Different countries celebrate Christmas in unique ways</li>
            </ul>
        `
    },
    2: {
        title: "🎄 The Christmas Tree Tradition",
        content: `
            <h3>Origins of the Christmas Tree</h3>
            <p>The tradition of decorating evergreen trees during winter celebrations dates back to ancient times, but the modern Christmas tree tradition began in Germany in the 16th century.</p>
            
            <h3>Fun Facts:</h3>
            <ul>
                <li>The first decorated Christmas tree appeared in Riga, Latvia in 1510</li>
                <li>Queen Victoria popularized Christmas trees in Britain</li>
                <li>The Rockefeller Center tree tradition started in 1931</li>
                <li>About 25-30 million real Christmas trees are sold in the U.S. each year</li>
            </ul>
        `
    },
    3: {
        title: "🎁 The Science of Gift-Giving",
        content: `
            <h3>Psychology of Giving</h3>
            <p>Gift-giving activates the reward centers in our brain, releasing dopamine and creating feelings of happiness for both the giver and receiver.</p>
            
            <h3>Research Shows:</h3>
            <ul>
                <li>Giving gifts can strengthen social bonds</li>
                <li>The act of giving activates the same brain regions as eating food or receiving gifts</li>
                <li>Thoughtful gifts create stronger emotional connections</li>
                <li>Experience gifts often create longer-lasting happiness than material gifts</li>
            </ul>
        `
    },
    4: {
        title: "❄️ Snow Science",
        content: `
            <h3>How Snowflakes Form</h3>
            <p>Snowflakes form when water vapor in clouds freezes around tiny particles of dust or pollen. As the ice crystal falls through different temperatures and humidity levels, it grows into unique patterns.</p>
            
            <h3>Amazing Facts:</h3>
            <ul>
                <li>Every snowflake is truly unique due to its growth conditions</li>
                <li>Snowflakes always have six sides due to water molecule structure</li>
                <li>Snow appears white because it reflects all colors of light</li>
                <li>The largest snowflakes recorded were 15 inches wide!</li>
            </ul>
        `
    },
    5: {
        title: "🌟 The Christmas Star",
        content: `
            <h3>The Star of Bethlehem</h3>
            <p>The Star of Bethlehem, also called the Christmas Star, guided the Wise Men to Jesus according to the Gospel of Matthew.</p>
            
            <h3>Scientific Theories:</h3>
            <ul>
                <li>Some astronomers believe it was a conjunction of planets</li>
                <li>Others suggest it was a comet or supernova</li>
                <li>A planetary alignment of Jupiter and Saturn occurred around 7-6 BCE</li>
                <li>The phenomenon remains one of astronomy's enduring mysteries</li>
            </ul>
        `
    },
    6: {
        title: "🔔 Jingle Bells History",
        content: `
            <h3>The Famous Christmas Song</h3>
            <p>"Jingle Bells" was written by James Lord Pierpont in 1857, but it wasn't originally intended as a Christmas song! It was written for Thanksgiving.</p>
            
            <h3>Interesting Facts:</h3>
            <ul>
                <li>The original title was "One Horse Open Sleigh"</li>
                <li>It was the first song broadcast from space in 1965</li>
                <li>It's one of the most recorded songs in history</li>
                <li>The song has been translated into dozens of languages</li>
            </ul>
        `
    },
    7: {
        title: "🦌 Reindeer Biology",
        content: `
            <h3>Santa's Special Helpers</h3>
            <p>Reindeer (called caribou in North America) are well-adapted to Arctic conditions and have some amazing biological features!</p>
            
            <h3>Cool Adaptations:</h3>
            <ul>
                <li>Their noses are specially designed to warm cold air before it enters their lungs</li>
                <li>Both male and female reindeer grow antlers</li>
                <li>Their hooves adapt to seasons - soft in summer, hard in winter</li>
                <li>They can see ultraviolet light, helping them navigate in snow</li>
            </ul>
        `
    },
    8: {
        title: "🍪 Cookie Chemistry",
        content: `
            <h3>The Science of Baking</h3>
            <p>Baking Christmas cookies is actually a chemistry experiment! Each ingredient plays a specific role in creating the perfect cookie.</p>
            
            <h3>Chemistry Facts:</h3>
            <ul>
                <li>Butter creates rich flavor and tender texture through fat molecules</li>
                <li>Sugar caramelizes at high heat, creating golden-brown cookies</li>
                <li>Baking soda/powder creates carbon dioxide for rise</li>
                <li>The Maillard reaction creates complex flavors and brown color</li>
            </ul>
        `
    },
    9: {
        title: "🎵 Christmas Music Psychology",
        content: `
            <h3>Why We Love Christmas Music</h3>
            <p>Christmas music triggers powerful emotional responses and memories in our brains through associations and nostalgia.</p>
            
            <h3>Psychological Effects:</h3>
            <ul>
                <li>Familiar songs activate the brain's reward system</li>
                <li>Christmas music can reduce stress and anxiety</li>
                <li>It creates a sense of community and shared experience</li>
                <li>Nostalgia is a powerful emotion that connects us to happy memories</li>
            </ul>
        `
    },
    10: {
        title: "🌍 Christmas Around the World",
        content: `
            <h3>Global Celebrations</h3>
            <p>Different cultures celebrate Christmas in unique and fascinating ways, reflecting local traditions and customs.</p>
            
            <h3>Global Traditions:</h3>
            <ul>
                <li>Japan: Christmas is celebrated with KFC (Kentucky Fried Chicken) dinners</li>
                <li>Iceland: The Yule Cat eats people who don't receive new clothes</li>
                <li>Norway: People hide their brooms to prevent witches from stealing them</li>
                <li>Venezuela: People roller-skate to church on Christmas morning</li>
            </ul>
        `
    },
    11: {
        title: "🕯️ The Physics of Candles",
        content: `
            <h3>How Candles Work</h3>
            <p>Candles create light through combustion - a complex chemical reaction involving wax, oxygen, and heat.</p>
            
            <h3>Physics Principles:</h3>
            <ul>
                <li>Heat melts wax which travels up the wick by capillary action</li>
                <li>Vaporized wax reacts with oxygen in combustion</li>
                <li>The flame's shape is determined by gravity and convection</li>
                <li>Different wax types burn at different temperatures</li>
            </ul>
        `
    },
    12: {
        title: "📚 Dickens' Christmas Carol",
        content: `
            <h3>A Literary Classic</h3>
            <p>Charles Dickens wrote "A Christmas Carol" in just six weeks in 1843. It transformed how people celebrated Christmas!</p>
            
            <h3>Historical Impact:</h3>
            <ul>
                <li>It popularized the phrase "Merry Christmas"</li>
                <li>Helped establish Christmas as a time for charity and family</li>
                <li>Sold out its first edition in just three days</li>
                <li>Has never been out of print since publication</li>
            </ul>
        `
    },
    13: {
        title: "🎨 Color Psychology of Christmas",
        content: `
            <h3>Red and Green</h3>
            <p>The traditional Christmas colors of red and green have deep psychological and historical significance.</p>
            
            <h3>Color Meanings:</h3>
            <ul>
                <li>Red: Represents warmth, energy, and Christ's blood</li>
                <li>Green: Symbolizes eternal life and nature's renewal</li>
                <li>Gold: Signifies light, wealth, and the gifts of the Magi</li>
                <li>White: Represents purity and snow</li>
            </ul>
        `
    },
    14: {
        title: "🔬 Winter Hibernation",
        content: `
            <h3>Animals in Winter</h3>
            <p>Many animals have evolved fascinating strategies to survive cold winters, from hibernation to migration.</p>
            
            <h3>Survival Strategies:</h3>
            <ul>
                <li>True hibernation slows metabolism by up to 95%</li>
                <li>Some animals can survive being frozen solid</li>
                <li>Bears enter torpor, a lighter form of hibernation</li>
                <li>Arctic animals have special adaptations like antifreeze proteins</li>
            </ul>
        `
    },
    15: {
        title: "🌲 Evergreen Biology",
        content: `
            <h3>Why Evergreens Stay Green</h3>
            <p>Evergreen trees like pines and firs have special adaptations that allow them to keep their needles year-round.</p>
            
            <h3>Adaptations:</h3>
            <ul>
                <li>Needle-like leaves reduce water loss</li>
                <li>Waxy coating protects against freezing</li>
                <li>They can photosynthesize even in cold weather</li>
                <li>Pyramidal shape helps shed snow</li>
            </ul>
        `
    },
    16: {
        title: "🎭 The Nutcracker Ballet",
        content: `
            <h3>A Christmas Tradition</h3>
            <p>Tchaikovsky's Nutcracker premiered in 1892 and has become synonymous with Christmas celebrations worldwide.</p>
            
            <h3>Musical Facts:</h3>
            <ul>
                <li>The ballet was not initially successful</li>
                <li>It became popular in America in the 1960s</li>
                <li>Uses the celesta, a rare keyboard instrument</li>
                <li>Generates about 40% of annual revenue for many ballet companies</li>
            </ul>
        `
    },
    17: {
        title: "☃️ Physics of Snowman Building",
        content: `
            <h3>The Perfect Snow</h3>
            <p>Building a snowman requires snow at just the right temperature - around 0°C (32°F) - when it's wet enough to stick together.</p>
            
            <h3>Engineering Principles:</h3>
            <ul>
                <li>Temperature affects snow's bonding properties</li>
                <li>Pressure melts snow slightly, creating ice bonds</li>
                <li>The spherical shape distributes weight evenly</li>
                <li>Fresh snow has more air, making it harder to pack</li>
            </ul>
        `
    },
    18: {
        title: "🌙 Winter Solstice",
        content: `
            <h3>The Shortest Day</h3>
            <p>The winter solstice (around December 21) marks the shortest day of the year in the Northern Hemisphere.</p>
            
            <h3>Astronomical Facts:</h3>
            <ul>
                <li>Earth's axis is tilted 23.5 degrees from vertical</li>
                <li>Ancient monuments like Stonehenge align with the solstice</li>
                <li>Many ancient cultures celebrated this astronomical event</li>
                <li>After the solstice, days gradually get longer</li>
            </ul>
        `
    },
    19: {
        title: "🎪 Santa Claus History",
        content: `
            <h3>Evolution of Santa</h3>
            <p>Santa Claus evolved from Saint Nicholas, a 4th-century Greek bishop known for his generosity to children and the poor.</p>
            
            <h3>Historical Development:</h3>
            <ul>
                <li>Dutch settlers brought Sinterklaas to America</li>
                <li>The modern image was created by cartoonist Thomas Nast</li>
                <li>Coca-Cola ads popularized the red suit in the 1930s</li>
                <li>Different countries have different gift-bringers</li>
            </ul>
        `
    },
    20: {
        title: "🌡️ Temperature and Weather",
        content: `
            <h3>Winter Weather Science</h3>
            <p>Winter weather patterns are influenced by complex atmospheric conditions, jet streams, and temperature gradients.</p>
            
            <h3>Meteorology Basics:</h3>
            <ul>
                <li>Cold air is denser and creates high-pressure systems</li>
                <li>Moisture + freezing temperatures = snow formation</li>
                <li>The jet stream guides weather systems</li>
                <li>Wind chill makes temperature feel colder than it is</li>
            </ul>
        `
    },
    21: {
        title: "🎁 Wrapping Paper Math",
        content: `
            <h3>The Geometry of Gift Wrapping</h3>
            <p>Mathematicians have studied the most efficient ways to wrap gifts, minimizing paper waste while maximizing coverage.</p>
            
            <h3>Mathematical Insights:</h3>
            <ul>
                <li>The optimal wrapping method depends on box dimensions</li>
                <li>Diagonal wrapping can use less paper than traditional methods</li>
                <li>The "square wrap" is often most efficient for cubes</li>
                <li>Americans use approximately 2.6 billion pounds of wrapping paper annually</li>
            </ul>
        `
    },
    22: {
        title: "🍬 Candy Cane Origins",
        content: `
            <h3>The Striped Treat</h3>
            <p>The candy cane's distinctive shape and colors may have symbolic meaning, though some stories are apocryphal.</p>
            
            <h3>Sweet History:</h3>
            <ul>
                <li>First documented in 1670 in Cologne, Germany</li>
                <li>Originally white, stripes were added later</li>
                <li>The "J" shape may represent Jesus or a shepherd's crook</li>
                <li>About 1.76 billion candy canes are made annually in the US</li>
            </ul>
        `
    },
    23: {
        title: "📖 Christmas Literacy",
        content: `
            <h3>Famous Christmas Stories</h3>
            <p>Christmas has inspired countless beloved stories that teach values of generosity, kindness, and family.</p>
            
            <h3>Literary Classics:</h3>
            <ul>
                <li>"The Night Before Christmas" (1823) shaped modern Santa mythology</li>
                <li>"The Gift of the Magi" teaches about sacrifice and love</li>
                <li>"How the Grinch Stole Christmas" explores the true meaning of Christmas</li>
                <li>"The Polar Express" captures the magic of belief</li>
            </ul>
        `
    },
    24: {
        title: "🌟 Christmas Eve Traditions",
        content: `
            <h3>The Night Before Christmas</h3>
            <p>Christmas Eve has special significance in many cultures, with unique traditions and celebrations around the world.</p>
            
            <h3>Global Traditions:</h3>
            <ul>
                <li>Many European countries open gifts on Christmas Eve</li>
                <li>Midnight Mass is attended by millions worldwide</li>
                <li>Children leave treats for Santa and his reindeer</li>
                <li>Families gather for special meals and storytelling</li>
            </ul>
        `
    },
    25: {
        title: "🎉 Merry Christmas!",
        content: `
            <h3>Christmas Day Celebration</h3>
            <p>You've completed the advent calendar! Christmas celebrates love, family, generosity, and the joy of giving.</p>
            
            <h3>Key Themes:</h3>
            <ul>
                <li>Spending quality time with loved ones</li>
                <li>Showing kindness and generosity to others</li>
                <li>Reflecting on the year and looking forward with hope</li>
                <li>Creating lasting memories and traditions</li>
            </ul>
            
            <p style="margin-top: 2rem; font-size: 1.3rem; text-align: center;">
                🎄 Wishing you a Merry Christmas and a Happy New Year! 🎆
            </p>
        `
    }
};

// Generate calendar days
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    
    // For demonstration, if it's December, use actual date; otherwise, show all days as available
    const isDecember = currentMonth === 11; // December is month 11 (0-indexed)
    
    for (let day = 1; day <= 25; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Check if day should be locked
        const isLocked = isDecember && day > currentDay;
        
        // Check if day has been opened (stored in localStorage)
        const isOpened = localStorage.getItem(`day-${day}`) === 'opened';
        
        if (isLocked) {
            dayElement.classList.add('locked');
        }
        
        if (isOpened) {
            dayElement.classList.add('opened');
        }
        
        dayElement.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="${isLocked ? 'lock-icon' : 'day-icon'}">
                ${isLocked ? '🔒' : (isOpened ? '✅' : getRandomIcon())}
            </div>
        `;
        
        if (!isLocked) {
            dayElement.addEventListener('click', () => openDay(day));
        }
        
        calendar.appendChild(dayElement);
    }
}

// Get random festive icon
function getRandomIcon() {
    const icons = ['🎁', '⭐', '🎄', '🎅', '⛄', '🔔', '🕯️', '🦌', '❄️', '🎀'];
    return icons[Math.floor(Math.random() * icons.length)];
}

// Open day modal
function openDay(day) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const content = calendarContent[day];
    
    if (content) {
        modalTitle.textContent = `Day ${day}: ${content.title}`;
        modalBody.innerHTML = content.content;
        modal.style.display = 'block';
        
        // Mark as opened
        localStorage.setItem(`day-${day}`, 'opened');
        
        // Update the calendar day appearance
        const calendarDays = document.querySelectorAll('.calendar-day');
        if (calendarDays[day - 1]) {
            calendarDays[day - 1].classList.add('opened');
        }
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Create snowflakes
function createSnowflakes() {
    const snow = document.getElementById('snow');
    const numberOfFlakes = 50;
    
    for (let i = 0; i < numberOfFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em';
        snow.appendChild(snowflake);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
    createSnowflakes();
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
});
