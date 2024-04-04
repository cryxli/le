var icons = {
    getShape: (id) => (icons[id]||{shape:''}).shape === 'hex' ? 'icon-node-hex' : 'icon-node',
    getUrl: (id) => (icons[id]||{url:null}).url||'javascript:;'
};

