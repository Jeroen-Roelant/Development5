<script setup lang="ts">
import { ref } from 'vue'

let myNumber = ref(0);
//let checked = ref(false);

//let myNumber = 0;
// let checked = false;

function getRndInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function myRandom() {
    myNumber.value = getRndInt(1, 10)
    // myNumber = ref(getRndInt(1, 10));
    console.log(myNumber);
    // console.log(checked);
}

</script>

<template>
    <div class="Project1Component">
        <h1 class="number" 
        :class="{ green: myNumber == 3, red: myNumber == 7 }">
            {{ myNumber }}
        </h1>

        <button @click="myRandom()">
            Click me to play
        </button>

        <!-- 
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label> 
        -->
    </div>
</template>

<style scoped>
    .green{
        color: rgb(0, 255, 0);
    }

    .red{
        color: rgb(255, 0, 0);
    }
</style>
