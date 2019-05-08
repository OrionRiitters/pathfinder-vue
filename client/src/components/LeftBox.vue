<template>
  <div id="left-box">
            <div id="left-header">
                <p>Details</p>
            </div>
            <div id="left-details">
              <div v-if="detailsTrail.id">
              <h2>{{ detailsTrail.name }}</h2>
              <p>Location: {{ detailsTrail.location }}</p>
              <p>Stars: {{ detailsTrail.stars }}</p>
              <p>Difficulty: {{ this.capitalize(detailsTrail.difficulty) }}</p>
              <p>Length: {{ detailsTrail.length }} Miles</p>
              <p>Summary: {{ detailsTrail.summary }}</p>
              <p>{{detailsTrail.hasHiked}}</p>
              <button v-if="detailsTrail.hasOwnProperty('hasHiked')" class="btn btn-secondary btn-left" v-on:click="changeHiked">
        Changed Hiked Status
              </button>
              <button v-on:click="saveTrail" class="btn btn-secondary btn-left" >Save Trail</button>
              </div>
            </div>
            </div>
</template>

<script>
export default {
    name: "LeftBox",
    props: {
        detailsTrail: {
            type: Object
        }
    },
    methods: {
        capitalize(attr) {
            if (attr) {
                return attr[0].toUpperCase() + attr.slice(1);
            } else { return attr }
        },
        changeHiked() {
            this.$emit('changeHiked', this.detailsTrail);
            console.log(this.detailsTrail)
        },
        saveTrail() {
            this.$trail_api.saveNewTrail(this.detailsTrail)
                .then(res => {
                    this.$emit('newTrail', res)
                })
            .catch(err => {console.log(err) });
        }
    }

};
</script>

<style>

#left-header {
    grid-row: 5 / 8;
    grid-column: 2 / 9;
    background-color: #cce6bc;
    color: #323232;
    vertical-align: center;
    text-align: center;
    font-size: 36px;
    border-radius: 5px 5px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

#left-box {
    grid-row: 5 / 36;
    grid-column: 2 / 9;
    background-color: rgba(63, 63, 63, 0.95);
    color: #f5f5f5;
    overflow: auto;
    border-radius: 0px 0px 5px 5px;
    font-family: 'Archivo', sans-serif;
    border: 2px solid rgba(63, 63, 63, 0.95);
}

p, h2 {
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 6px;
    padding-top: 6px;
    border-bottom: 1px solid rgba(63, 63, 63, 0.95);
    margin: 0px;
    
}
.btn-secondary {
    width: 25%;
    background-color: #dcdcdc;
    color: #3f3f3f;
}

.btn-secondary:hover {
    //background-color: #a2f0d0;
    background-color: #cce6bc;
    color: #3f3f3f;
}

</style>
