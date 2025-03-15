export const remData = Array(100).fill().map((_, index) => ({
    id: (index + 1).toString(),
    image: [
        "/images/act1.png",
        "/images/ani1.png",
        "/images/cmd2.png",
        "/images/ani1.png",
        "/images/ani2.png",
        "/images/cmd2.png",
        "/images/act3.png",
        "/images/act4.png",
        "/images/act6.png",
        "/images/cmd4.png",
        "/images/cmd8.png",
        "/images/cmd3.png"
    ][index % 12] // Repeat every 12 items
}));
