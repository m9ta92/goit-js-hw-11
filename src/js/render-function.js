// функції для відображення елементів інтерфейсу

export const createGalleryCardTemplate = imgInfo => {
  return ` 
<li class="gallery-item">
  <div>
    <a
      class="gallery-link"
      href="${imgInfo.largeImageURL}"
      onclick="return false"
    >
      <img
        class="gallery-image"
        src="${imgInfo.webformatURL}"
        alt="${imgInfo.tags}"
      />
    </a>

    <ul class="card">
      <li class="card-item">
        <h3 class="card-item-title">Likes</h3>
        <p class="card-item-inf">${imgInfo.likes}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Views</h3>
        <p class="card-item-inf">${imgInfo.views}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Comments</h3>
        <p class="card-item-inf">${imgInfo.comments}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Downloads</h3>
        <p class="card-item-inf">${imgInfo.downloads}</p>
      </li>
    </ul>
  </div>
</li>
    `;
};
