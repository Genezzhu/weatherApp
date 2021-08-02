import { ILocation } from '@/interfaces/weather';

// get current user location in coordinate
export const getLocation = async (): Promise<ILocation> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location: ILocation = {
                    latitude: position.coords.latitude,
                    longtitude: position.coords.longitude,
                };
                resolve(location);
            },
            (err) => reject(err)
        );
    });
};

//conver degree into direction
export const getCardinalDirection = (angle: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(angle / 45) % 8];
}

//conver Celsius to Fahrenheit
export const convertCelsiusToFahrenheit = (celsius: number): number => {
    return celsius * 9 / 5 + 32;
}