<template>
  <section class="flat-row">
    <div class="container">
      <div class="row">
        <div class="col-md-6">      
          <div class="video-thumbnail" >
            <img
              :src="image"
              alt="Video Thumbnail"
              width="100%"
              height="45vh"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="inner-box-about" style="margin-top: 40px;">
            <div class="title-box">
              <div class="title">
                <span>{{ title }}</span> 
              </div>
            </div>
            <p>{{ description }}</p>
            <div class="empty-space height30"></div>
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
    },
  },
};
</script>
