const fix = [
    {name:'of the Feast',type:'Suffix',desc:'Increased Leech Rate',url:'https://www.lastepochtools.com/db/suffixes/AAwFmQ',apply:['Gloves']},
    {name:'Scholar\'s',type:'Prefix',desc:'Intelligence',url:'https://www.lastepochtools.com/db/prefixes/AKwBgTEA',apply:['Helmet','Body Armour','Boots','Ring','Gloves','Relic']},
    {name:'Toxic',type:'Prefix',desc:'Poison Damage',url:'https://www.lastepochtools.com/db/prefixes/AAwNgjEA',apply:['Any accessory','One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Quiver','Off-Hand Catalyst','Belt','Bow']},
    {name:'of the Giant',type:'Suffix',desc:'Hybrid Health',url:'https://www.lastepochtools.com/db/suffixes/AAwZgbEA',apply:['Gloves','Boots','Belt']},
    {name:'Blighted',type:'Prefix',desc:'Damage Over Time',url:'https://www.lastepochtools.com/db/prefixes/AAwdgTEA',apply:['Any accessory','One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Wand','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Off-Hand Catalyst','Quiver','Bow','Gloves']},
    {name:'of Deflection',type:'Suffix',desc:'Physical Resistance',url:'https://www.lastepochtools.com/db/suffixes/AAwFgrEA',apply:['Any armor','Any accessory','Shield','Quiver']},
    {name:'Vital',type:'Prefix',desc:'Vitality',url:'https://www.lastepochtools.com/db/prefixes/AKwBmQ',apply:['Helmet','Body Armour','Boots']},
    {name:'of Sparks',type:'Suffix',desc:'Lightning Resistance',url:'https://www.lastepochtools.com/db/suffixes/AAwJgLEA',apply:['Any armor','Any accessory','Shield','Off-Hand Catalyst','Quiver']},
    {name:'of the Scorpio',type:'Suffix',desc:'Poison Penetration and Minion Poison Penetration',url:'https://www.lastepochtools.com/db/suffixes/AOwJgrEA',apply:['One-Handed Axe','Dagger','Sceptre','One-Handed Sword','Wand','Two-Handed Axe','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Bow']},
    {name:'of Sanctuary',type:'Suffix',desc:'Critical Strike Avoidance',url:'https://www.lastepochtools.com/db/suffixes/AAwTg7EA',apply:['Boots','Gloves','Belt','Ring','Helmet']},
    // {name:'Sealed',type:'Prefix',desc:'Seconds to Sigils of Hope Duration',url:'https://www.lastepochtools.com/db/prefixes/AEwTgHEA',apply:['Huge Idol']},
    {name:'Witch\'s',type:'Prefix',desc:'Spell Critical Strike Chance',url:'https://www.lastepochtools.com/db/prefixes/AAwDgLEA',apply:['Wand','Sceptre','Two-Handed Staff','Amulet','Relic','Off-Hand Catalyst']},
    {name:'of Life',type:'Suffix',desc:'Health',url:'https://www.lastepochtools.com/db/suffixes/AAwJgrEA',apply:['Any armor','Any accessory','Shield']},
    {name:'of Insulation',type:'Suffix',desc:'Elemental Resistance',url:'https://www.lastepochtools.com/db/suffixes/AAwDmQ',apply:['Any armor','Any accessory','Off-Hand Catalyst','Shield','Quiver']},
    {name:'of Endurance',type:'',desc:'Suffix',url:'https://www.lastepochtools.com/db/suffixes/AAwTgTEA',apply:['Gloves','Helmet','Shield','Belt','Ring','Relic']},
    {name:'Eviscerating',type:'Prefix',desc:'Critical Strike Multiplier',url:'https://www.lastepochtools.com/db/prefixes/AAzBsQ',apply:['Relic','Amulet','One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Bow','Wand','Off-Hand Catalyst']},
    {name:'Cleansing',type:'Prefix',desc:'Ward and Ailment Cleansing on Potion Use',url:'https://www.lastepochtools.com/db/prefixes/AAwdgrEA',apply:['Belt']},
    {name:'Assassin\'s',type:'Prefix',desc:'Critical Strike Chance',url:'https://www.lastepochtools.com/db/prefixes/AAzCsQ',apply:['Any accessory','One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Wand','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Off-Hand Catalyst','Bow','Quiver','Gloves']},
    {name:'Warrior\'s',type:'Prefix',desc:'Physical Damage',url:'https://www.lastepochtools.com/db/prefixes/AAwZmQ',apply:['Any accessory','One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Wand','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Quiver','Belt','Bow','Shield']},
    {name:'Dexterous',type:'Prefix',desc:'Dexterity',url:'https://www.lastepochtools.com/db/prefixes/AKwBgzEA',apply:['Helmet','Body Armour','Boots','Ring','Gloves','Relic','Quiver']},
    {name:'Piercing',type:'Prefix',desc:'Physical Penetration',url:'https://www.lastepochtools.com/db/prefixes/AAwZhQ',apply:['Amulet']},
    {name:'of the Ox',type:'Suffix',desc:'Health',url:'https://www.lastepochtools.com/db/suffixes/AAwVgTEA',apply:['Body Armour','Helmet','Belt']},
    {name:'Deadeye\'s',type:'Prefix',desc:'Crit Chance and Bow Attack Speed',url:'https://www.lastepochtools.com/db/prefixes/AGwdgTEA',apply:['Bow']},
    {name:'of Sleet',type:'Suffix',desc:'Chance to Chill on Hit',url:'',apply:['One-Handed Axe','Dagger','One-Handed Mace','Sceptre','One-Handed Sword','Wand','Two-Handed Axe','Two-Handed Mace','Two-Handed Spear','Two-Handed Staff','Two-Handed Sword','Bow','Quiver']},
    {name:'Swift',type:'Prefix',desc:'Bow Attack Speed',url:'https://www.lastepochtools.com/db/prefixes/ACwZgTEA',apply:['Bow','Quiver']},
    {name:'Rejuvenating',type:'Prefix',desc:'Mana Regeneration',url:'https://www.lastepochtools.com/db/prefixes/AMzAMQ',apply:['Any accessory','Belt']},
    {name:'of Meditation',type:'Suffix',desc:'All Resistances While Channelling',url:'https://www.lastepochtools.com/db/suffixes/AIwBgLEA',apply:['Relic']},
    {name:'Mighty',type:'Prefix',desc:'Strength',url:'https://www.lastepochtools.com/db/prefixes/AKwBgjEA',apply:['Helmet','Body Armour','Boots','Ring','Gloves','Relic']},
    // {name:'',type:'',desc:'',url:'',apply:[]},
];
$(document).ready(() => {
    $('fix').each((_,elem) => {
        const text = $(elem).text();
        const match = fix.filter(f => f.name === text);

        if (match.length > 0) {
            const f = match[0];
            $(elem).replaceWith('<a class="item" href="'+f.url+'" title="'+f.desc+'">'+f.name+'</a>')
        } else {
            $(elem).replaceWith('<i>'+text+'</i>');
        }
    });
});
