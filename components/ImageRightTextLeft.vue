<template>
  <section class="flat-row">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="inner-box-about">
            <div class="title-box">
              <div class="title" style="margin-top: 40px;">
                <span>{{ title }}</span>
              </div>
            </div>
            <p>{{ description }}</p>
            <div class="empty-space height30"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="video-thumbnail">
            <img
              :src="image"
              alt="Video Thumbnail"
              width="100%"
              height="45vh"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: {
      type: String,
      default: 'https://img.youtube.com/vi/WcUfcP1l0gg/maxresdefault.jpg',
    },
  },
};
</script>
