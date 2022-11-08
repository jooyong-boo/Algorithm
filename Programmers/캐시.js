function solution(cacheSize, cities) {
    // 모두 소문자로 변환
    cities = cities.map((city) => city.toLowerCase());
    let result = 0;
    let cache = [];
    // cacheSize가 0이면
    if (cacheSize === 0) {
        result = cities.length * 5;
        return result;
    }
    let i = 0;
    while (i < cities.length) {
        let newCache = cities[i];
        let search = cache.indexOf(newCache);

        if (search >= 0) {
            // 중복되는 값이 있으면
            cache.splice(search, 1);
            result += 1;
        } else if (cache.length >= cacheSize) {
            // 중복되는 값이 없는데 cacheSize보다 cache의 길이가 크거나 같으면
            cache.shift();
            result += 5;
        } else {
            result += 5;
        }
        i++;
        cache.push(newCache);
    }
    return result;
}
