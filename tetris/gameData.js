export const BlockTypes = [
    {
        name: 'Square',
        color:'#FF0000',
        blockLocations: [
            { xRel:0, yRel:0 },
            { xRel:0, yRel:1 },
            { xRel:1, yRel:0 },
            { xRel:1, yRel:1 },
        ]
    },
    {
        name: 'Line',
        color:'#0000FF',
        blockLocations: [
            { xRel:0, yRel:0 },
            { xRel:0, yRel:1 },
            { xRel:0, yRel:2 },
            { xRel:0, yRel:3 },
        ]
    },
    {
        name: 'LBlock',
        color:'#00CCFF',
        blockLocations: [
            { xRel:0, yRel:0 },
            { xRel:0, yRel:1 },
            { xRel:0, yRel:2 },
            { xRel:1, yRel:2 },
        ]
    },
    {
        name: 'ReverseLBlock',
        color:'#00FFCC',
        blockLocations: [
            { xRel:1, yRel:0 },
            { xRel:1, yRel:1 },
            { xRel:1, yRel:2 },
            { xRel:0, yRel:2 },
        ]
    },
];
