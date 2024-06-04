const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const indikatorLoading = () => `

<div class="indikator-loading">
  <svg class="spin" viewBox="0 0 50 50">
    <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
  <p>Loading...</p>
</div>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  indikatorLoading,
};
