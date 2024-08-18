const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedValue => {
  const urlParams = new URLSearchParams({
    key: '45487813-fe5f6ff630a438f35d0eece69',
    q: searchedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 200,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
