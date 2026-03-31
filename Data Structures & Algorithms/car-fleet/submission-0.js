class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    let n = position.length;
    if (n === 0) return 0;
    
    let cars = [];
    for (let i = 0; i < n; i++) {
        let time = (target - position[i]) / speed[i];
        cars.push([position[i], time]);
    }
    
    cars.sort((a, b) => b[0] - a[0]);
    
    let fleets = 0;
    let prevTime = 0;
    
    for (let [pos, time] of cars) {
        if (time > prevTime) {
            fleets++;
            prevTime = time;
        }
    }
    
    return fleets;
}
}
