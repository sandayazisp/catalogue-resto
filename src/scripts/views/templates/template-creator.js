import CONFIG from '../../globals/config';

const createRestauranDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <div class="infor">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <h4>Catagories</h4>
        <p>${restaurant.categories.map((name) => name.name).join(', ')}</p>
    </div>
    <div class="menu__food">
        <h4>Menu</h4>           
        <ul>
            <div id="foods">
                <li>Foods</li>
            </div>              
            <div id="drinks">
                <li>Drinks</li>   
            </div>                          
        </ul>  
    </div> 
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__komentar">
    <h3>Komentar</h3>    
    <div id="comment">    
    </div>
    <div class="rest__container">
        <form action="">
            <label for="fname">Name</label>
            <input type="text" id="fname" name="name" placeholder="Your name..">
        
            <label for="freview">Review</label>
            <textarea name="review" id="freview" cols="30" rows="5"></textarea>            
        
            <label for="date">Date</label>
            <input type="text" id="fdate" name="date" placeholder="Ex : 1 Januari 2020...">                        

            <input type="submit" value="Comment">
        </form>
    </div>    
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
    <p class="post-item_kota">${restaurant.city}</p>
    <img class="post-item_thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="Restaurant ${restaurant.name}" srcset="" >
    <p class="post-item_rating">⭐️ <span class="post-item_rate">${restaurant.rating}</span></p>
    <div class="post-item_content">
        <h1 class="post-item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p class="post-item_description">${restaurant.description}</p>
    </div>
    </article>
  `;
const createCommentRestaurantTemplate = (restaurant) => `
    <div class="review">
        <div class="profil__image">
            <img src="pp.jpg" alt="" srcset="">
            <p>${restaurant.name}</p>    
            <p>${restaurant.date}</p>    
        </div>    
        <p>${restaurant.review}</p>    
    </div>
  `;

const createFoodsItem = (restaurant) => `            
        <dl>                
            <dd>- ${restaurant.name}</dd>                            
        </dl>
  `;

const createDrinksItem = (restaurant) => `            
        <dl>                
            <dd>- ${restaurant.name}</dd>                            
        </dl>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createEmpetyTemplate = () => `
    <p>Tidak Ada Resto yang Di Sukai</p>
`;

export {
  createRestaurantItemTemplate,
  createRestauranDetailTemplate,
  createCommentRestaurantTemplate,
  createFoodsItem,
  createDrinksItem,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createEmpetyTemplate,
};
