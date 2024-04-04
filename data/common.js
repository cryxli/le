const toId = (name) => name.toLowerCase().replace(/ /g, '-').replace(/[^a-z-]/g, '').trim();

$(document).ready(() => {

    $('passive, skill-mod').each((_,elem) => {
        const text = $(elem).text();
        const id = toId(text);
        
        $(elem).replaceWith('<a href="'+icons.getUrl(id)+'"><div class="icon '+icons.getShape(id)+' icon-'+id+'"></div>'+text+'</a>'); 
    });
    $('skill').each((_,elem) => {
        const text = $(elem).text();
        const id = toId(text);
        $(elem).replaceWith('<a href="'+icons.getUrl(id)+'"><div class="icon icon-node-square icon-'+id+'"></div>'+text+'</a>'); 
    });

    $('.level').each((_,elem)=>{
        const prop = $(elem).attr('data-start')||'0';
        var sum = parseInt(prop);
        $(elem).find('li').not('.info,.warn').each((_,li)=>{
            const text = $(li).text();
            const lv = parseInt(text.substring(0, text.indexOf(' ')));
            sum += lv;
            $(li).prop('title', 'Level '+sum);
        });
    });
});

const toggleClosable = (evt) => {
    const element = $(evt.currentTarget);
    const div = element.parent();
    
    var newState = 'true' === (div.attr('data-hidden')||'false');
    newState = newState ? 0 : 1;

    if (newState === 1) {
        div.children().addClass('d-none');
        element.removeClass('d-none');
        element.addClass('closed');
    } else {
        div.children().removeClass('d-none');
        element.removeClass('closed');
    }
    div.attr('data-hidden', newState === 1);
};
$(document).ready(() => {
    $('.closable > h2, .closable > h3').each((_, elem) => {
        // install listener
        $(elem).on('click', toggleClosable)
        // determine initial state
        const div = $(elem).parent();
        const state = 'true' === (div.attr('data-hidden')||'false');
        if (state) {
            // invert state
            div.attr('data-hidden', 'false');
            // toggle state back
            toggleClosable({currentTarget: $(elem)});
        }
    });
});

