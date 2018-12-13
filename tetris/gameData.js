export const PieceTypeData = [
    {
        name: 'Square',
        color:'#FF1111',
        blockLocations: [
            { xRel:0, yRel:0 }, { xRel:0, yRel:1 }, { xRel:1, yRel:0 }, { xRel:1, yRel:1 }
        ]
    },
    {
        name: 'Line',
        color:'#1111FF',
        blockLocations: [
            { xRel:0, yRel:0 }, { xRel:0, yRel:1 }, { xRel:0, yRel:2 }, { xRel:0, yRel:3 }
        ]
    },
    {
        name: 'LBlock',
        color:'#00CCFF',
        blockLocations: [
            { xRel:0, yRel:0 }, { xRel:0, yRel:1 }, { xRel:0, yRel:2 }, { xRel:1, yRel:2 }
        ]
    },
    {
        name: 'ReverseLBlock',
        color:'#00FFCC',
        blockLocations: [
            { xRel:1, yRel:0 }, { xRel:1, yRel:1 }, { xRel:1, yRel:2 }, { xRel:0, yRel:2 }
        ]
    },
    {
        name: 'Squiggly',
        color:'#FFCC00',
        blockLocations: [
            { xRel:0, yRel:1 }, { xRel:1, yRel:0 }, { xRel:1, yRel:1 },  { xRel:2, yRel:0 }
        ]
    },
    {
        name: 'ReverseSquiggly',
        color:'#CCFF00',
        blockLocations: [
            { xRel:0, yRel:0 }, { xRel:1, yRel:0 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }
        ]
    },
    {
        name: 'TeeBlock',
        color:'#CC00CC',
        blockLocations: [
            { xRel:1, yRel:0 }, { xRel:0, yRel:1 }, { xRel:1, yRel:1 }, { xRel:2, yRel:1 }
        ]
    },
];
