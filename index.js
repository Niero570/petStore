var shop = [
   {
       title: 'Tigers',
       protectorImage: './images/proTiger.jpeg',
       dissonantImage: '.images/disTiger.jpeg',
       price: '$7,500-35,000',
       proDescription: 'Majestic big cat with a powerful presence.',
       disDescription: 'A cunning hunter, feared among other Dissonant PETS.'
   },
   {
       title: 'Birds',
       protectorImage: '.images/proEagle.jpeg',
       dissonantImage: '.images/disEagle.jpeg',
       price: '$2,500-5,000',
       proDescription: 'Graceful creatures of the sky, soaring with precision.',
       disDescription: 'A far worse enemy than he could ever be friend, he is the bane of other Dissonant PETS.'
   },
   {
       title: 'Polar Bears',
       protectorImage: '.images/proPolar.jpeg',
       dissonantImage: '.images/disPolar.jpeg',
       price: '$10,000-20,000',
       proDescription: 'Fierce yet majestic Arctic predator, unmatched in endurance.',
       disDescription: 'A relentless force of nature that dominates its icy domain.'
   },
   {
       title: 'Arabian',
       protectorImage: '.images/proArabian.jpeg',
       dissonantImage: '.images/disArabian.jpeg',
       price: '$2,500-5,000',
       proDescription: 'An elegant and swift horse breed known for endurance.',
       disDescription: 'No known dissonant traits.'
   },
   {
       title: 'Panda',
       protectorImage: '.images/proPanda.jpeg',
       dissonantImage: '.images/disPanda.jpeg',
       price: '$2,500-5,000',
       proDescription: 'Lovable but elusive, a symbol of balance in nature.',
       disDescription: 'Something or someone has awoken a somber creature, and now she will have her vengeance!'
   },
   {
       title: 'Chimpanzee',
       protectorImage: '.images/proChimp.png',
       dissonantImage: '.images/disChimp.png',
       price: '$5,000-25,000',
       proDescription: 'Highly intelligent and resourceful primate.',
       disDescription: 'A cunning manipulator, unpredictable in its dissonant form.'
   },
   {
       title: 'Wolf',
       protectorImage: '.images/proWolf.jpeg',
       dissonantImage: '.images/disWolf.jpeg',
       price: '$5,000-25,000',
       proDescription: 'A loyal and strategic hunter, thriving in packs.',
       disDescription: 'A ruthless predator, feared even by other Dissonant PETS.'
   },
   {
       title: 'Flamingo',
       protectorImage: '.images/proPink.png',
       dissonantImage: '.images/disPink.jpeg',
       price: '$2,500-5,000',
       proDescription: 'A symbol of grace and balance, known for striking colors.',
       disDescription: 'A deceptive presence, masking an unpredictable nature.'
   },
   {
       title: 'Lion',
       protectorImage: '.images/proLion.jpeg',
       dissonantImage: '.images/disLion.jpeg',
       price: '$2,500-5,000',
       proDescription: 'A powerful and respected ruler of the wild.',
       disDescription: 'A commanding force, even as a Tier 1 PET.'
   }
];

let postHTML = "";

for (let i = 0; i < shop.length; i++) {
   let pet = shop[i];

   let petHTML = `
   <div class="flip-card mb-3">
       <div class="flip-card-inner">
           <div class="flip-card-front position-relative">
               <img src="${pet.protectorImage}" class="img-fluid" alt="Protector ${pet.title}">
               <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2"
                   data-bs-toggle="collapse"
                   data-bs-target="#collapse-info-${i}"
                   aria-expanded="false"
                   aria-controls="collapse-info-${i}"
                   onclick="event.stopPropagation();">
                   Overview Info
               </button>
           </div>
           <div class="flip-card-back">
               <img src="${pet.dissonantImage}" class="img-fluid" alt="Dissonant ${pet.title}">
           </div>
       </div>
   </div>
   <div class="collapse" id="collapse-info-${i}">
       <div class="card card-body">
           <h5>${pet.title}</h5>
           <p><strong>Price:</strong> ${pet.price}</p>
           <p>${pet.proDescription}</p>
           <p>${pet.disDescription}</p>
       </div>
   </div>
   `;

   postHTML += petHTML;
}

document.getElementById("market").innerHTML = postHTML;