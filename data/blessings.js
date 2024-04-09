var blessings = {
    data:[
        {from:"Fall of the Outcasts",name:"Winds of Fortune",url:"https://www.lastepochtools.com/db/items/IIwBgzALM0rQ"},
        {from:"Fall of the Outcasts",name:"Grand Winds of Fortune",url:"https://www.lastepochtools.com/db/items/IIwBgzALMwEwvQ"},
        {from:"The Stolen Lance",name:"Grand Apex of Fortune",url:"https://www.lastepochtools.com/db/items/IIwBgzALMEBwvQ"},
        {from:"The Stolen Lance",name:"Reach of Flame",url:"https://www.lastepochtools.com/db/items/IIwBgzALCBs0vQ"},
        {from:"The Black Sun",name:"Grand Depths of Infinity",url:"https://www.lastepochtools.com/db/items/IIwBgzALCFidA"},
        {from:"The Black Sun",name:"Grand Echo of Solarum",url:"https://www.lastepochtools.com/db/items/IIwBgzALCBMDsIKA"},
        {from:"Blood, Frost, and Death",name:"Cruelty of Formosus",url:"https://www.lastepochtools.com/db/items/IIwBgzALCxSJA"},
        {from:"Blood, Frost, and Death",name:"Grand Vigilance of the Damned",url:"https://www.lastepochtools.com/db/items/IIwBgzALMEGwvQ"},
        {from:"Ending the Storm",name:"Grand Crash of the Waves",url:"https://www.lastepochtools.com/db/items/IIwBgzALCCcoiQ"},
        {from:"Ending the Storm",name:"Grand Mysteries of the Deep",url:"https://www.lastepochtools.com/db/items/IIwBgzALCAcCsIKA"},
        {from:"Fall of the Empire",name:"Grand Boon of the Scarab",url:"https://www.lastepochtools.com/db/items/IIwBgzALMFidA"},
        {from:"Fall of the Empire",name:"Grand Inevitability of the Void",url:"https://www.lastepochtools.com/db/items/IIwBgzALMUrQ"},
        {from:"Reign of Dragons",name:"Grand Resolve of Humanity",url:"https://www.lastepochtools.com/db/items/IIwBgzALMEJwvQ"},
        {from:"Reign of Dragons",name:"Survival of Might",url:"https://www.lastepochtools.com/db/items/IIwBgzALCCc0vQ"},
        {from:"The Last Ruin",name:"Grand Memory of Masters",url:"https://www.lastepochtools.com/db/items/IIwBgzALMDsYvQ"},
        {from:"The Last Ruin",name:"Remnants of the Elders",url:"https://www.lastepochtools.com/db/items/IIwBgzALMDsBsIKA"},
        {from:"The Age of Winter",name:"Bulwark of the Tundra",url:"https://www.lastepochtools.com/db/items/IIwBgzALMCcAcIKA"},
        {from:"The Age of Winter",name:"Grand Fury of the North",url:"https://www.lastepochtools.com/db/items/IIwBgzALMCcYvQ"},
        {from:"Spirits of Fire",name:"Body of Obsidian",url:"https://www.lastepochtools.com/db/items/IIwBgzALATCEvQ"},
        {from:"Spirits of Fire",name:"Grand Patience of Herkir",url:"https://www.lastepochtools.com/db/items/IIwBgzALATFYvQ"},
    ],
    getLinkHtml: (name) => {
        const blessing = blessings.data.filter(b => b.name === name);
        if (blessing.length > 0) {
            const b = blessing[0];
            return '<a href="'+b.url+'" title="from '+b.from+'">'
                +'<i class="blessing inline '+blessings.getCssClass(name)+'"></i>'
                +b.name+'</a>';
        } else {
            return '<i>'+name+'</i>';
        }
    },
    getCssClass: (name) => {
        var cssClass = toId(name);
        if (cssClass.startsWith('grand-')) { 
            cssClass = cssClass.substring(6); 
        }
        return 'blessing-'+cssClass;
    }
};

$(document).ready(() => {
    $('blessing').each( (_,elem) => $(elem).replaceWith(blessings.getLinkHtml($(elem).text())) );
});

