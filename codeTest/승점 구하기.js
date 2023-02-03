const getPoints = (games) => {
    let splitGames = games.map((game) =>
        game.split(":").map((value) => +value)
    );
    let result = 0;
    for (let i = 0; i < splitGames.length; i++) {
        let [A, B] = splitGames[i];
        if (A > B) result += 3;
        if (A === B) result += 1;
    }
    return result;
};
