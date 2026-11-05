
export function metersToFeet(meters: number) {
    return ((meters *  3.28084).toFixed(2)).toString().replace(".","'");
}

export function kgToLbs(kg: number) {
    return (kg * 2.20462).toFixed(1);
}



