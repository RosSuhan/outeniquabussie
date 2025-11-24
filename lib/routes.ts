'use client'
export type routesList = {
    town: string
    price: string
    locationName: string
    locationAddress: string
    locationLink: string
    destination: string
    time: string
}

export const routes = [
    {
        town: 'George',
        locationName: 'Engen Multi Motors',
        locationAddress: '41 Knysna Rd, Levallia, George, 6529',
        locationLink: 'https://maps.app.goo.gl/zpPhSHs6oqdQ2MPf9',
        directionTo: [
            {
                destination: 'CT',
                time: '5h20'
            },{
                destination: 'George',
                time: '19h40'
            }]
    },{
        town: 'George',
        locationName: 'Engen Convenience Centre',
        locationAddress: '10 York St, George South, George, 6529',
        locationLink: 'https://maps.app.goo.gl/YPhgXkXjfFBYn1fY6',
        directionTo: [
            {
                destination: 'CT',
                time: '5h30'
            },{
                destination: 'George',
                time: '19h30'
            }]
    },{
        town: 'Great Brak River',
        locationName: 'Total Garage',
        locationAddress: 'R102, Bergsig, Groot Brakrivier, 6525',
        locationLink: 'https://maps.app.goo.gl/VFZAGHsKJdz7HCfz9',
        directionTo: [
            {
                destination: 'CT',
                time: '6h00'
            },{
                destination: 'George',
                time: '19h00'
            }]
    },{
        town: 'Mossel Bay',
        locationName: 'Shell Garage',
        locationAddress: 'Voorbaai, Louis Fourie Rd, Voorbaai, Mossel Bay, 6500',
        locationLink: 'https://maps.app.goo.gl/FwafYzARcqz9kc1K7',
        directionTo: [
            {
                destination: 'CT',
                time: '6h20'
            },{
                destination: 'George',
                time: '18h45'
            }]
    },{
        town: 'Albertinia',
        locationName: 'Shell Garage',
        locationAddress: 'Station St, Albertinia, 6695',
        locationLink: 'https://maps.app.goo.gl/A4Ktiv8XB9pYs8Z58',
        directionTo: [
            {
                destination: 'CT',
                time: '7h00'
            },{
                destination: 'George',
                time: '18h15'
            }]
    },{
        town: 'Riversdale',
        locationName: 'Engen 1Stop Garage',
        locationAddress: 'N2, Riversdale, 6670',
        locationLink: 'https://maps.app.goo.gl/NsJHgjz6Cc2nA8iU7',
        directionTo: [
            {
                destination: 'CT',
                time: '7h30'
            },{
                destination: 'George',
                time: '17h45'
            }]
    },{
        town: 'Heidelberg',
        locationName: 'Engen 1 Stop Garage',
        locationAddress: 'Eksteen St, Heidelberg - Wc, Heidelberg, 6665',
        locationLink: 'https://maps.app.goo.gl/QVSq8ZGYJGzPC18K7',
        directionTo: [
            {
                destination: 'CT',
                time: '8h00'
            },{
                destination: 'George',
                time: '17h15'
            }]
    },{
        town: 'Swellendam',
        locationName: 'Buffeljags BP Garage',
        locationAddress: 'N 2 National Road N 42, Buffeljagsrivier, 6742',
        locationLink: 'https://maps.app.goo.gl/C4rv6dtyrq34iiDEA',
        directionTo: [
            {
                destination: 'CT',
                time: '8h30'
            },{
                destination: 'George',
                time: '16h45'
            }]
    },{
        town: 'Ashton',
        locationName: 'Total Energies',
        locationAddress: '65 Main Rd, Ashton, 6715',
        locationLink: 'https://maps.app.goo.gl/9vWbP5Kivdh8J9rD7',
        directionTo: [
            {
                destination: 'CT',
                time: '9h15'
            },{
                destination: 'George',
                time: '16h15'
            }]
    },{
        town: 'Robertson',
        locationName: 'Total Expressmark',
        locationAddress: 'Voortrekker Ave, Robertson, 6705',
        locationLink: 'https://maps.app.goo.gl/jJ66bXaidhdT8iyx7',
        directionTo: [
            {
                destination: 'CT',
                time: '9h30'
            },{
                destination: 'George',
                time: '15h45'
            }]
    },{
        town: 'Worcester',
        locationName: 'Total Energies, Expressmark',
        locationAddress: '15 High St, Worcester, 6850',
        locationLink: 'https://maps.app.goo.gl/wHQNqDYqL5xYbdaS9',
        directionTo: [
            {
                destination: 'CT',
                time: '10h15'
            },{
                destination: 'George',
                time: '15h00'
            }]
    },{
        town: 'Paarl',
        locationName: 'Shell Garage, Monument Motors',
        locationAddress: '25 Main Rd, Southern Paarl, Paarl, 7646',
        locationLink: 'https://maps.app.goo.gl/XN39dnkHRBQS8pkF7',
        directionTo: [
            {
                destination: 'CT',
                time: '11h15'
            },{
                destination: 'George',
                time: '14h00'
            }]
    },{
        town: 'Stellenbosh',
        locationName: 'Die Braak Parking',
        locationAddress: 'Stellenbosch Central, Stellenbosch, 7600',
        locationLink: 'https://maps.app.goo.gl/sC7UJb355ogTuqLP8',
        directionTo: [
            {
                destination: 'CT',
                time: '11h45'
            }]
    },{
        town: 'Somerset West',
        locationName: 'Sasol Garage R44',
        locationAddress: 'R44, Firgrove Rural, 7130',
        locationLink: 'https://maps.app.goo.gl/DCVjoDVFn4ZB4zjF7',
        directionTo: [
            {
                destination: 'CT',
                time: '12h15'
            }]
    },{
        town: 'Klapmuts',
        locationName: 'Exotic Animal World',
        locationAddress: 'R44, Stellenbosch, 7600',
        locationLink: 'https://maps.app.goo.gl/oPvgjHw6yh2GBhmi6',
        directionTo: [
            {
                destination: 'George',
                time: '13h50'
            }
        ]
    },{
        town: 'Bellville',
        locationName: 'Engen Garage',
        locationAddress: '13 Carl Cronje Dr, Bellville, Cape Town, 7530',
        locationLink: 'https://maps.app.goo.gl/HNSYbCqUpmU9Ms728',
        directionTo: [
            {
                destination: 'George',
                time: '13h30'
            }
        ]
    },{
        town: 'Cape Town',
        locationName: 'Cape Town International Airport',
        locationAddress: 'Matroosfontein, Cape Town, 7490',
        locationLink: 'https://maps.app.goo.gl/SVrqsnSzmkyRuahV9',
        directionTo: [
            {
                destination: 'CT',
                time: '13h00'
            },{
                destination: 'George',
                time: '13h00'
            }
        ]
    }
]