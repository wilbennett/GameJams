export const PieceTypeData = [
    {
        name: 'Square',
        color:'#FF1111',
        blockLocations: [
            [{ xRel:1, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:0 }, { xRel:2, yRel:1 }],
        ]
    },
    {
        name: 'Line',
        color:'#1111FF',
        blockLocations: [
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:2, yRel:3 }],
            [{ xRel:0, yRel:2 }, { xRel:1, yRel:2 }, { xRel:2, yRel:2 }, { xRel:3, yRel:2 }],
            [{ xRel:1, yRel:0 }, { xRel:1, yRel:1 }, { xRel:1, yRel:2 }, { xRel:1, yRel:3 }],
            [{ xRel:0, yRel:1 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }],
        ]
    },
    {
        name: 'LBlock',
        color:'#00CCFF',
        blockLocations: [
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:3, yRel:2 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:1, yRel:2 }],
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:1, yRel:0 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:3, yRel:0 }],
        ]
    },
    {
        name: 'ReverseLBlock',
        color:'#00FFCC',
        blockLocations: [
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:3, yRel:0 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:3, yRel:2 }],
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:1, yRel:2 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:1, yRel:0 }],
        ]
    },
    {
        name: 'Squiggly',
        color:'#FFCC00',
        blockLocations: [
            [{ xRel:2, yRel:0 }, { xRel:3, yRel:0 }, { xRel:1, yRel:1 },  { xRel:2, yRel:1 }],
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 },  { xRel:3, yRel:2 }],
            [{ xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:1, yRel:2 },  { xRel:2, yRel:2 }],
            [{ xRel:1, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 },  { xRel:2, yRel:2 }],
        ]
    },
    {
        name: 'ReverseSquiggly',
        color:'#CCFF00',
        blockLocations: [
            [{ xRel:1, yRel:0 }, { xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }],
            [{ xRel:3, yRel:0 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:2, yRel:2 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }, { xRel:3, yRel:2 }],
            [{ xRel:2, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:1, yRel:2 }],
        ]
    },
    {
        name: 'TeeBlock',
        color:'#CC00CC',
        blockLocations: [
            [{ xRel:2, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }],
            [{ xRel:2, yRel:0 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:2, yRel:2 }],
            [{ xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:3, yRel:1 }, { xRel:2, yRel:2 }],
            [{ xRel:2, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }, { xRel:2, yRel:2 }],
        ]
    },
];
