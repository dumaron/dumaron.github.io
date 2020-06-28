import { annotate } from 'rough-notation';

setTimeout(() => {
    const ems = document.querySelectorAll('strong, em');

    ems.forEach(em => {
        const annotation = annotate(em, { 
            type: 'highlight', 
            multiline: true, 
            iterations: 3, 
            padding: 1,
            color: '#d55',
            animate: false,
         });
        annotation.show();
    })


    const links = document.querySelectorAll('p a');

    links.forEach(em => {
        const annotation = annotate(em, { 
            type: 'underline', 
            multiline: true, 
            iterations: 2, 
            padding: 1,
            color: '#333',
            animate: false,
            strokeWidth: 1
         });
        annotation.show();
    })
}, 1000);
