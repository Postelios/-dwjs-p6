// Création de la lightbox

export default function lightBoxDOM() {
    // HTML lightbox
    const lightboxSection = document.querySelector('#lightbox');
    const closeLightbox = document.createElement('button');
    closeLightbox.setAttribute('aria-label', 'Close dialog');
    closeLightbox.classList.add('close__lightbox');
    const prevLightbox = document.createElement('button');
    prevLightbox.setAttribute('aria-label', 'Previous image');
    prevLightbox.setAttribute('class','fas fa-chevron-left fa-2x');
    prevLightbox.classList.add('prev__lightbox');
    const nextLightbox = document.createElement('button');
    nextLightbox.setAttribute('aria-label','Next image');
    nextLightbox.setAttribute('class','fas fa-chevron-right fa-2x');
    nextLightbox.classList.add('next__lightbox');
    const containerLightbox = document.createElement('div');
    containerLightbox.classList.add('container__lightbox');
    const link = document.createElement('a');
    link.classList.add('link');
    //const imgLightbox = document.createElement('img');
    //imgLightbox.classList.add('img__lightbox');


    lightboxSection.appendChild(closeLightbox);
    lightboxSection.appendChild(prevLightbox);
    lightboxSection.appendChild(nextLightbox);
    lightboxSection.appendChild(containerLightbox);
    containerLightbox.appendChild(link);
    //link.appendChild(imgLightbox);

    // Fermeture lightBox
    closeLightbox.addEventListener('click', close);

    return lightboxSection;
};

function close() {
    document.querySelector('#lightbox').style.display= "none";
};


export function lightBox() {
    // Liste des médias
    const srcMedias = document.querySelectorAll('.src-media');
    console.log(srcMedias);
   
    // AddEventListener sur chaque média
    srcMedias.forEach(media => {
        media.addEventListener('click', (e) => {

            const lightBoxType = document.querySelector('.container__lightbox > .link');
            lightBoxType.innerHTML = "";

            const lightboxSection = document.querySelector('#lightbox');
            lightboxSection.style.display ="block";
    // src lightbox = src media
    let type = e.target.localName;
    if (type == 'img'){
        const image = document.createElement('img');
            image.setAttribute('src', e.target.src);
            image.setAttribute('alt',e.target.alt);
            console.log(image);
            lightBoxType.appendChild(image);
            image.setAttribute('class', 'img__lightbox')
            const srcLightbox = document.querySelector('.img__lightbox');
            //srcLightbox.src = media.src;
            srcLightbox.setAttribute('alt', media.alt );
    }
    else{
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute('src', e.target.src);
        source.setAttribute('type','video/mp4');
        video.setAttribute('class', 'img__lightbox');
        video.appendChild(source);
        lightBoxType.appendChild(video);
        video.controls = true;
        console.log(lightBoxType,source,video);
    }
    
    ligthBoxNext(lightBoxType);
    ligthBoxPrev(lightBoxType);
})
    })
}

function ligthBoxNext(lightBoxType) {
    const srcMedias = document.querySelectorAll('.src-media');
    const nextLightbox = document.querySelector('.next__lightbox');
    const srcLightbox = document.querySelector('.img__lightbox');
    nextLightbox.addEventListener('click', () => {
        console.log(srcLightbox.src);
        // Node list = Array;
       const arrayMedias = Array.from(srcMedias);
       console.log(arrayMedias);
        const compare = ((element) => element.src == srcLightbox.src);
        let index = arrayMedias.findIndex(compare);
        console.log(index,'indexElement');
         if (index == srcMedias.length -1) {
             index = -1;
        }
        if (arrayMedias[index+1].localName != 'img'){
            console.log ('video')
            lightBoxType.innerHTML = "";
            const video = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute('src', arrayMedias[index+1].src);
        source.setAttribute('type','video/mp4');
        video.setAttribute('class', 'img__lightbox');
        video.appendChild(source);
        lightBoxType.appendChild(video);
        video.controls = true;
        console.log(lightBoxType,source,video);
            
        };
        srcLightbox.setAttribute('src',  arrayMedias[index+1].src );
        srcLightbox.setAttribute('alt', arrayMedias[index+1].alt );
     })

}


function ligthBoxPrev(lightBoxType) {
    const srcMedias = document.querySelectorAll('.src-media');
    const prevLightbox = document.querySelector('.prev__lightbox');
    const srcLightbox = document.querySelector('.img__lightbox');
    console.log("furtur");
    prevLightbox.addEventListener('click', () => {
        const arrayMedias = Array.from(srcMedias);
       console.log(arrayMedias);
       const compare = ((element) => element.src == srcLightbox.src);
        let index = arrayMedias.findIndex(compare);
        console.log(index,'indexElement');
        if (index == 0 ) {
            index = srcMedias.length ;
            console.log(index);
        }
        srcLightbox.setAttribute('src', arrayMedias[index-1].src);
        srcLightbox.setAttribute('alt', arrayMedias[index-1].alt );
    })
}



