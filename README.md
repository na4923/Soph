# Soph: A Curiosity-powered Fact Engine
**A project by Nicolas Alonso Castillo**

Soph is a doomscrolling alternative for people who want the feeling of understanding and identity that comes with doomscrolling, minus the constant sensation that they’re wasting time. It will adapt to each user and learn about them in order to present interesting facts appropriate to the user’s interests, personality, and level of education.

## User Profiles

* **Bee** is a STEM student with an inquisitive mind. Bee often finds her lectures too slow paced for her Gen-Z brain. Soph allows her to complement her education with fun information during her unrelated classes.
* **Luke** is a curious teenager who likes spending his time exploring the most recondite and bizarre parts of the internet. Soph makes a more educational experience out of his website-browsing.
* **Susannah** is a young woman that is having trouble with her doomscrolling addiction. She finds herself wasting too much time on social media. Soph allows for a similar experience that fulfills her TikTok cravings, without making her feel like she’s completely wasting her time.

## Algorithmic Factors

The biggest reason for doomscrolling’s addictive property is the ability of the TikTok/Reels/Shorts algorithm to connect with the user and understand what they want to see. Fine-tuning the algorithm to create a similar feel is the most important part of the project.

* The user will begin the experience by answering the question: How do you like your facts delivered?
* If needed, the user will be prompted to answer follow-up questions.
* There will be a feedback option at all times, for the user to manually fine-tune their experience.

## Topics

*(The following table outlines the topics and their corresponding categories)*

| Topic | Category 1 | Category 2 | Category 3 |
| :--- | :--- | :--- | :--- |
| Drawing | Creativity | | |
| Painting | Creativity | | |
| Photography | Creativity | | |
| Writing | Creativity | | |
| Music | Creativity | Culture | |
| Theater | Creativity | | |
| Dancing | Creativity | Culture | |
| Crafting | Creativity | | |
| Fashion | Creativity | Culture | |
| History | Humanities | | |
| Philosophy | Humanities | | |
| Psychology | Humanities | Social Sciences | |
| Politics | Social Sciences | | |
| Linguistics | Humanities | Culture | |
| Marine Biology | Science | Biology | |
| Animal Biology | Science | Biology | |
| Plant Biology | Science | Biology | |
| Physics | Science | | |
| Chemistry | Science | | |
| Global Culture | Humanities | Culture | |
| Cooking | Creativity | | |
| Religion | Humanities | | |
| Video games | Technology | Recreation | |
| Programming | Technology | | |
| Engineering | Technology | | |
| Internet Culture | Technology | Recreation | Culture |
| Exercise | Science | Wellness | Biology |
| Meditation | Wellness | | |
| Mental Health | Social Sciences | Wellness | Biology |
| Nutrition | Science | Wellness | |
| Skincare | Science | Wellness | |
| Astronomy | Science | | |
| Sustainability | Science | | |
| Sports | Recreation | | |
| Economics | Social Sciences | | |
| Architecture | Technology | | |
| Pharmacy | Science | Biology | |
| Math | Science | | |
| Gender Studies | Humanities | Social Sciences | Culture |
| Ethnic Studies | Humanities | Social Sciences | Culture |
| Comedy | Social Sciences | Culture | Creativity |

## Tones

### Philosophy vs Practicality
Some people like learning for the sake of learning, while others value the practical aspects of knowledge. The focus can be on the information itself, or on its applications to the real world.

### Buzzwords
Academics tends to create terms for commonly used concepts. This is useful for academic discourse, but makes it harder for the average person to understand their writing. Some people like learning these buzzwords, but others find them unnecessary.

### Formality
While some might learn better with a more casual, conversational style of writing, others might prefer a more serious tone that they deem a trustworthy source.

## Levels of Complexity

* **Beginner:** Aimed for kids and people with low education, beginner mode offers a simplified academic experience that requires minimal background knowledge. Complex facts will be excluded, and vocabulary will be kept simple.
* **Intermediate:** Most users are expected to fall in this category. Intermediate users are expected to be highly literate, and have moderate knowledge of their topics of interest. The content of the facts won’t deviate significantly from the information in the sources, but heavy paraphrasing will be used to take the facts out of the academic style of writing.
* **Advanced:** For scholars and academically-literate people. Academic tone might be kept, and ideas from sources will simply be summarized.

## Aesthetic

CPFE will be personified as a wise, strong looking woman. The site will feature an aged, vintage vibe that remains minimalistic, sleek, and clean. Here is the color palette for the project:

*(The following table displays the hex codes and usage)*

| Use | Color | Hex | Notes |
| :--- | :--- | :--- | :--- |
| Background | Antique Parchment | #F9F5EC | A warm, off-white with paper texture vibes |
| Text (primary) | Charcoal Ink | #2F2F2F | Deep, soft black for high readability |
| Accent text / headings | Sepia Brown | #6B4F3B | Gives a warm, old-book feel |
| Links / CTAs | Dusty Teal | #3F6963 | Muted teal with contrast and vintage charm |
| Borders / Secondary UI | Weathered Wood | #A89F91 | Aged gray-brown, non-distracting |
| Highlights / Hover | Ochre Gold | #C6A664 | Muted yellow gold for subtle attention |
| Error / Alert | Brick Red | #944E4E | Earthy, not harsh on the eyes |

## Architectural Design

### Domain Model
![Domain model for the porject](docs/domain-model.png)

### Class Diagram (Backend)
![Class diagram for the project](docs/class-diagram.png)
