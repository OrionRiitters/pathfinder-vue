<template>
  <div id="left-box">
    <div id="left-header">
      <p>Details</p>
    </div>

    <!-- These elements are contained in the left box and contain the trail details -->
    <div id="left-details">
      <div v-if="detailsTrail.id">
        <h2 class="trail-attr">{{ detailsTrail.name }}</h2>
        <p class="trail-attr">Location: {{ detailsTrail.location }}</p>
        <p class="trail-attr">Stars: {{ detailsTrail.stars }}</p>
        <p class="trail-attr">
          Difficulty: {{ this.capitalize(detailsTrail.difficulty) }}
        </p>
        <p class="trail-attr">Length: {{ detailsTrail.length }} Miles</p>
        <p class="trail-attr">Summary: {{ detailsTrail.summary }}</p>
        <p class="trail-attr" v-if="detailsTrail.hasHiked">Hiked!</p>
        <p class="trail-attr" v-else>Not Hiked!</p>
        <button
          v-if="detailsTrail.hasOwnProperty('hasHiked')"
          class="btn btn-secondary"
          v-on:click="changeHiked"
        >
          Changed Hiked Status
        </button>

        <button class="btn btn-secondary" v-on:click="saveTrail">
          Save Trail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftBox',
  props: {
    detailsTrail: {
      type: Object,
    },
  },
  methods: {
    capitalize(attr) {
      if (attr) {
        return attr[0].toUpperCase() + attr.slice(1)
      } else {
        return attr
      }
    },
    changeHiked() {
      this.$emit('changeHiked', this.detailsTrail)
      console.log(this.detailsTrail)
    },
    // Call api service in order to save trail to database
    saveTrail() {
      this.$trail_api
        .saveNewTrail(this.detailsTrail)
        .then(res => {
          this.$emit('newTrail', res)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
